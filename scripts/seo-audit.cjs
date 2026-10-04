const fs = require('fs');
const root = process.env.AUDIT_ORIGIN || 'https://dhakaspacentre.com';
const canonicalRoot = process.env.CANONICAL_ORIGIN || root;
(async () => {
 const xml = await (await fetch(root+'/sitemap.xml')).text();
 const routes = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>new URL(m[1]).pathname);
 const rows=[]; const links=new Set(); const images=new Set(); const schemaFailures=[]; const incoming=new Map();
 for(const path of routes){
  const r=await fetch(root+path); const h=await r.text();
  const get=(re)=>h.match(re)?.[1] || '';
  const schemas=[...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
  const inspect=(value)=>{if(!value||typeof value!=='object')return;for(const [key,item]of Object.entries(value)){if(['aggregateRating','reviewCount','ratingValue','geo'].includes(key))schemaFailures.push(path+': unverified '+key);if(typeof item==='string'&&item.includes('{{'))schemaFailures.push(path+': placeholder '+key);if(key==='@id'&&typeof item==='string'&&!item.startsWith(canonicalRoot+'/'))schemaFailures.push(path+': wrong entity origin');inspect(item);}};
  schemas.forEach(inspect);
  const business = schemas.find(s=>s['@type']==='HealthAndBeautyBusiness');
  const hours = business?.openingHoursSpecification || [];
  const days = hours.flatMap(h=>(h.dayOfWeek||[]).map(d=>[d.split('/').pop(),h.opens,h.closes]));
  if(days.length!==7 || new Set(days.map(d=>d[0])).size!==7 || days.some(([day,opens,closes])=>opens!==(day==='Friday'?'14:00':'10:00') || closes!=='22:00')) schemaFailures.push(path+': hours differ from published GBP schedule');
  if(schemas.filter(s=>s['@type']==='HealthAndBeautyBusiness').length!==1||schemas.some(s=>s['@id']?.endsWith('#organization')))schemaFailures.push(path+': business identity mismatch');
  for(const schema of schemas){if(schema.offers&&(!Number.isFinite(schema.offers.price)||schema.offers.priceCurrency!=='BDT'))schemaFailures.push(path+': invalid offer');if(schema['@type']==='FAQPage')for(const item of schema.mainEntity)if(!h.includes(item.name.replaceAll('&','&amp;'))||!h.includes(item.acceptedAnswer.text.replaceAll('&','&amp;')))schemaFailures.push(path+': FAQ not in HTML');}
  for(const m of h.matchAll(/href="(\/[^"#]*)/g))if(!m[1].startsWith('/_next')){const link=m[1].replaceAll('&amp;','&');links.add(link);const target=new URL(link,root).pathname;if(target!==path){if(!incoming.has(target))incoming.set(target,new Set());incoming.get(target).add(path);}}
  for(const m of h.matchAll(/<img[^>]+src="([^"]+)/g))images.add(m[1].replaceAll('&amp;','&'));
  rows.push({path,status:r.status,title:get(/<title>(.*?)<\/title>/),description:get(/<meta name="description" content="([^"]*)/),h1:get(/<h1[^>]*>([\s\S]*?)<\/h1>/).replace(/<br\s*\/?\s*>/g,' ').replace(/<[^>]+>/g,''),h1Count:(h.match(/<h1[\s>]/g)||[]).length,canonical:get(/rel="canonical" href="([^"]*)/),robots:get(/<meta name="robots" content="([^"]*)/),og:['title','description','url','type','image'].every(x=>h.includes('property="og:'+x+'"')),schema:schemas.map(s=>s['@type']).join(', '),schemas,bytes:Buffer.byteLength(h),oversizedCandidates:h.includes('3840w'),imagesMissingAlt:[...h.matchAll(/<img\b[^>]*>/g)].filter(m=>!/alt="[^"]+"/.test(m[0])).length});
 }
 const extra=[];
 const urls=[root+'/robots.txt',root+'/sitemap.xml',root+'/llms.txt',root+'/ai-facts',root+'/services/',root+'/missing-audit-page',root+'/services/aroma-body-massage'];
 if(root.startsWith('https://dhakaspacentre.com'))urls.push('http://dhakaspacentre.com','https://www.dhakaspacentre.com');
 for(const url of urls){try{const r=await fetch(url,{redirect:'manual'});extra.push({url,status:r.status,location:r.headers.get('location'),body:(await r.text()).slice(0,1500)});}catch(e){extra.push({url,error:e.message});}}
 const broken=[];for(const url of [...links,...images]){const r=await fetch(root+url);if(!r.ok)broken.push({url,status:r.status});}
 const duplicates={};for(const key of ['title','description','h1','canonical']){const seen=new Map();duplicates[key]=[];for(const row of rows){if(seen.has(row[key]))duplicates[key].push([seen.get(row[key]),row.path]);seen.set(row[key],row.path);}}
 const failures=rows.filter(x=>x.status!==200||x.h1Count!==1||!x.description||!x.og||x.imagesMissingAlt||x.robots.includes('noindex')||new URL(x.canonical).href!==new URL(canonicalRoot+x.path).href).map(x=>x.path);
 const orphans=routes.filter(path=>!incoming.has(path));
 const output={testedAt:new Date().toISOString(),root,rows,extra,duplicates,failures,schemaFailures,broken,orphans,linksChecked:links.size,imagesChecked:images.size};
 const outputPath=process.env.AUDIT_OUTPUT||'scratch/seo-current.json';fs.mkdirSync(require('path').dirname(outputPath),{recursive:true});fs.writeFileSync(outputPath,JSON.stringify(output,null,2));console.log(JSON.stringify({pages:rows.length,duplicates,failures,schemaFailures,broken,orphans,extra,linksChecked:links.size,imagesChecked:images.size},null,2));
 if(failures.length||schemaFailures.length||broken.length||orphans.length||Object.values(duplicates).some(x=>x.length))process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1;});
