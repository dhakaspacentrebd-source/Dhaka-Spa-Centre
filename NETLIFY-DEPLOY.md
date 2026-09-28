# GitHub → Netlify deployment

The project includes `netlify.toml`: build command `npm run build`, publish directory `.next`, Node 22. Netlify automatically uses its Next.js/OpenNext adapter. Upload source code, not the `.next` output folder.

1. Extract the provided source ZIP. Create a GitHub repository, then upload the extracted files with `package.json`, `netlify.toml`, `app/`, `components/`, `data/`, `lib/` and `public/` at the repository root. Do not upload the ZIP itself as your application.
2. In Netlify choose **Add new project → Import an existing project → GitHub**. Authorize access to the selected repository and choose it.
3. Use branch `main`, leave the base directory blank for a repository containing this site at its root, build command `npm run build`, and publish directory `.next`. These build values are already in the configuration file.
4. Deploy. Netlify's automatic `URL` provides the primary site origin for canonicals and sitemap when `NEXT_PUBLIC_SITE_URL` is unset.
5. When attaching a custom domain, set `NEXT_PUBLIC_SITE_URL` to its full HTTPS origin in Netlify environment variables with build scope, then redeploy. Never put a preview URL or localhost in this production setting.
6. Check the homepage, treatment prices, a service page, `/sitemap.xml`, `/robots.txt` and WhatsApp links on the actual hosted URL.

The provided package excludes dependencies, build output, local environment files, development utilities and old unused JPEG originals. It includes the current WebP images, logos and icons. No external account deployment has been performed. Hosted adapter behavior must be verified after the actual Netlify deploy.

Netlify deploy previews and branch deploys receive noindex metadata and disallow crawling. Production remains indexable.

Official references: [Next.js on Netlify](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/), [Git-connected deployments](https://docs.netlify.com/deploy/create-deploys/), [build environment variables](https://docs.netlify.com/build/configure-builds/environment-variables/).
