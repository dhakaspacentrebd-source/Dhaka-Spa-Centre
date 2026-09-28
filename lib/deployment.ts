export const isPreviewDeployment =
  process.env.VERCEL_ENV === "preview" ||
  process.env.CONTEXT === "deploy-preview" ||
  process.env.CONTEXT === "branch-deploy";
