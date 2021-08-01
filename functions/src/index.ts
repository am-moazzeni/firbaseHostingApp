import * as functions from "firebase-functions";
import * as express from "express";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
const appExpress = express();

appExpress.get("/timestamp", (request, response) => {
   functions.logger.info("Hello logs!", { structuredData: true });
   response.send(`${Date.now()}`);
});

export const app = functions.https.onRequest(appExpress);
