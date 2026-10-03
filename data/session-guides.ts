export interface SessionGuide {
  pressure: string;
  products: string;
  preparation: string;
  aftercare: string;
  safety: string;
}

// Technique guidance, not claims about unverified staff, facilities or policies.
export const SESSION_GUIDES: Record<string, SessionGuide> = {
  "thai-massage": {
    pressure: "Rhythmic compression and assisted movement can feel active. Agree on gentle or firmer pressure and keep stretches within a comfortable range.",
    products: "Traditional Thai-style work is usually clothing-based rather than oil-led. Confirm this session's clothing, surface and oil arrangements with the team.",
    preparation: "Ask what flexible clothing to wear and which movements are planned. Mention any joints or areas that should not be stretched.",
    aftercare: "Stand up gradually and leave time to change. Note which stretches felt comfortable before considering another session.",
    safety: "Do not force joint movement or endure painful stretches. If you have an injury, recent surgery or a condition affecting movement, obtain healthcare advice first.",
  },
  "aromatherapy-massage": {
    pressure: "Flowing strokes are typically slower and sensory-led. State your preferred pressure; fragrance does not determine how firm a massage should be.",
    products: "Ask which carrier oils and fragrances are used. A botanical label does not establish that an ingredient is safe for a particular sensitivity.",
    preparation: "Discuss fragrance allergies and whether an unscented alternative exists. Do not assume a particular oil blend is included.",
    aftercare: "Ask whether residual oil should be removed and avoid using unfamiliar scented products on irritated skin.",
    safety: "Avoid products you know cause a reaction. If an ingredient or skin condition raises a concern, discuss suitability with a qualified healthcare professional.",
  },
  "deep-tissue-massage": {
    pressure: "Slower, focused pressure on selected areas is distinct from a flowing full-body routine. Agree on the intensity; pain is not proof of benefit.",
    products: "Oil or lotion may be used for glide. Confirm the product and the areas to be worked on before starting.",
    preparation: "Choose the areas you want addressed rather than requesting maximum pressure everywhere. Explain any areas that must be avoided.",
    aftercare: "Leave time to assess how you feel before strenuous plans. Concerning or persistent symptoms should be assessed medically, not dismissed as a normal result.",
    safety: "Vigorous massage carries greater risk for some people. Ask a healthcare professional first if your health history or medication may make pressure unsafe.",
  },
  "hot-stone-massage": {
    pressure: "Warm stones may be combined with manual strokes. Ask about stone placement, heat and pressure separately so each can be adjusted.",
    products: "Oil may assist stone glide. Confirm the oil ingredients and how stone temperature is checked; specific equipment and procedures are not verified here.",
    preparation: "Mention heat sensitivity or altered skin sensation. Ask whether an unheated alternative can be arranged.",
    aftercare: "Check how your skin feels and ask about removing oil. Seek advice if heat causes lasting discomfort or skin changes.",
    safety: "The stones should not feel painfully hot. Discuss heated treatment suitability with a healthcare professional if you have a condition affecting sensation or heat tolerance.",
  },
  "full-body-massage": {
    pressure: "A broader sequence covers the agreed areas rather than concentrating the whole session on one spot. Tell the team where you prefer light or firmer pressure.",
    products: "Confirm whether this full-body session uses oil and which ingredients are involved; the name alone does not specify the technique.",
    preparation: "Define what 'full body' includes, areas to omit, clothing and draping before the session begins.",
    aftercare: "Take time to get dressed and discuss any areas that felt uncomfortable. A full-body session does not require a fixed repeat schedule.",
    safety: "A broad session is not automatically appropriate for every area. Ask for exclusions and healthcare advice where a condition or injury makes massage uncertain.",
  },
  "swedish-massage": {
    pressure: "Longer gliding strokes and kneading create a flowing rhythm. Swedish-style massage need not be uniformly light; agree on a comfortable level.",
    products: "Oil or lotion commonly provides glide. Ask about ingredients, scent and alternatives before choosing.",
    preparation: "Explain whether you prefer an overall flowing session or extra time on a particular area, and confirm draping arrangements.",
    aftercare: "Ask how to remove remaining product and allow time to get ready for the journey home.",
    safety: "Do not accept painful pressure simply because the service is called relaxing. Ask a healthcare professional when a condition, injury or medication raises a concern.",
  },
  "foot-massage": {
    pressure: "Focused work around the feet can range from light strokes to firmer pressure. Agree on comfort rather than assuming every point should be worked deeply.",
    products: "Ask whether oil, lotion or another product is used and confirm ingredients if your skin is sensitive.",
    preparation: "Ask what areas the session includes and mention tenderness, skin irritation or areas to avoid.",
    aftercare: "Remove slippery product before putting on footwear and give yourself time to stand comfortably.",
    safety: "Do not massage injured or irritated areas without appropriate advice. If you have a condition affecting foot circulation or sensation, speak with a healthcare professional first.",
  },
  "body-scrub": {
    pressure: "A scrub uses surface exfoliation rather than deep muscle pressure. Ask for gentle application and identify sensitive areas.",
    products: "Request the scrub ingredients, texture and fragrance details. Product brands and shower arrangements have not been confirmed.",
    preparation: "Discuss skin irritation and recent skin treatments. Ask how the product is applied and removed before reserving.",
    aftercare: "Ask for product-specific skin-care instructions. Avoid adding another unfamiliar abrasive product if your skin feels irritated.",
    safety: "Do not scrub broken, inflamed or irritated skin. Seek appropriate advice for a skin condition rather than treating exfoliation as therapy.",
  },
  "dry-massage": {
    pressure: "Dry massage emphasises contact and pressure without the glide of an oil-led session. Ask which techniques and pressure level will be used.",
    products: "The published name indicates a dry format. Confirm that oils or other products are not used and ask what clothing is appropriate.",
    preparation: "Choose comfortable clothing as advised and explain areas you prefer avoided. The owner-confirmed guide is 60 minutes, ৳5,500.",
    aftercare: "Allow time to change and stand comfortably. Share what pressure suited you if you return.",
    safety: "An oil-free session still involves physical pressure. Check suitability with a healthcare professional if a condition or injury raises a concern.",
  },
  "oil-massage": {
    pressure: "Oil supports gliding movements; it does not imply a fixed pressure. Discuss whether you want a lighter flowing session or firmer work on selected areas.",
    products: "Request the oil ingredients and scent details. Brands, fragrance-free options and allergy accommodations require confirmation.",
    preparation: "Discuss product sensitivities, clothing and draping. The owner-confirmed guide is 60 minutes, ৳6,500.",
    aftercare: "Ask how the remaining oil is removed and take care with slippery skin when getting dressed.",
    safety: "Avoid ingredients known to cause a reaction and request a stop if your skin feels irritated. Ask for healthcare advice where massage suitability is uncertain.",
  },
  "hot-oil-massage": {
    pressure: "Warmed oil adds a heat sensation to gliding strokes. Agree on pressure and temperature independently.",
    products: "Confirm the oil ingredients and how the temperature is checked. Warmed oil should not be assumed suitable simply because it is natural.",
    preparation: "Mention heat and fragrance sensitivities. The owner-confirmed guide is 60 minutes, ৳7,000; longer sessions require a quote.",
    aftercare: "Check your skin comfort and ask how to remove the oil. Do not dismiss persistent heat discomfort.",
    safety: "Request an immediate pause if oil feels too hot. Seek advice first if a condition affects sensation or tolerance of heated treatments.",
  },
  "body-to-body-massage": {
    pressure: "This name does not define a standard technique. Ask the team to describe the actual movements, boundaries and intended relaxation format before booking.",
    products: "Oil usage and ingredients must be confirmed directly; the label alone does not establish the products involved.",
    preparation: "Agree on treatment areas, clothing, draping and who will be present. Do not reserve if the description or boundaries remain unclear.",
    aftercare: "Ask about removing products and take time to get ready. Discuss any discomfort before deciding on another session.",
    safety: "A service name is not a clinical qualification or consent policy. Ask how to pause or stop and obtain healthcare advice if physical contact may be unsuitable.",
  },
  "nuru-massage": {
    pressure: "This specialist label does not by itself define the movements offered. Request an explicit description of the session and agree on boundaries.",
    products: "If a gel is involved, request its ingredients, application and removal details. No particular brand or formulation is verified here.",
    preparation: "Discuss skin sensitivities, clothing, draping and the agreed contact areas before making a booking decision.",
    aftercare: "Ask how any slippery product is removed and how to move safely after the session.",
    safety: "Do not assume a specialist gel is allergy-safe or medically beneficial. Stop if there is irritation or discomfort and ask about suitability where needed.",
  },
  "couple-massage": {
    pressure: "Two guests may prefer different techniques and pressure levels. Agree on each person's session rather than treating the pair as one set of preferences.",
    products: "Confirm the technique and any oils separately for each guest. Shared-room and practitioner arrangements require direct confirmation.",
    preparation: "Check both guests' agreement, time, duration and room arrangements. The owner supplied a 60-minute guide price of ৳10,000; confirm exactly what the total covers.",
    aftercare: "Leave time for both guests to get ready and check that the final charge matches the agreed scope.",
    safety: "Each guest should discuss their own comfort and suitability. A companion cannot agree to another person's treatment boundaries on their behalf.",
  },
  "four-hand-massage": {
    pressure: "The label suggests coordinated work by two practitioners. Confirm staffing and how pressure and timing are synchronised before booking.",
    products: "Ask whether the format is oil-based and confirm the ingredients. Oil usage is not guaranteed by the service name.",
    preparation: "Agree on areas, draping and a clear pause signal that both practitioners can hear. The owner-confirmed guide is 60 minutes, ৳12,000.",
    aftercare: "Describe which parts of the coordinated session suited you and allow time to get dressed comfortably.",
    safety: "Multiple simultaneous contacts can make intensity harder to judge. Ask for reduced pressure or a pause as soon as you need it; stronger sensation is not a benefit claim.",
  },
  "six-hand-massage": {
    pressure: "The label suggests three practitioners working in coordination. Confirm the actual staffing and how the sequence is planned for your comfort.",
    products: "Confirm whether oil or another product is involved and request ingredient details before agreeing.",
    preparation: "Ask who leads communication, how to stop the session and which areas are included. The owner-confirmed guide is 60 minutes, ৳16,500.",
    aftercare: "Give yourself time to get ready and discuss whether the simultaneous contact matched your preferences.",
    safety: "Agree on a stop signal everyone recognises. Do not assume more practitioners or firmer pressure makes a session safer or more effective.",
  },
};
