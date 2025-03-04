import { Router } from "express";
import geminiController from "./geminiController.js";

const geminiRouter = Router();

geminiRouter.post("/gemini/message", geminiController.getGeminiTextData.bind(geminiController))
geminiRouter.post("/gemini/chatSession", geminiController.chatSession.bind(geminiController))

export default geminiRouter;