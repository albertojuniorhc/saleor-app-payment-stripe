import { createAppRegisterHandler } from "@saleor/app-sdk/handlers/next";

import { saleorApp } from "../../saleor-app";
// import { env } from "@/lib/env.mjs";

// const allowedUrlsPattern = env.ALLOWED_DOMAIN_PATTERN;

/**
 * Required endpoint, called by Saleor to install app.
 * It will exchange tokens with app, so saleorApp.apl will contain token
 */
export default createAppRegisterHandler({
  apl: saleorApp.apl,
  allowedSaleorUrls: ["https://orium-composable.saleor.cloud/graphql/"],
});
