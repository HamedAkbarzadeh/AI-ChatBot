import controller from "../controller.js";
import { model } from "./config.js";

class GeminiController extends controller {

    async getGeminiTextData(req, res) {
        const text = req.body.text;
        const result = await model.generateContent(text);
        const AIResponse = await result.response.text();
        this.response({res , message : "success" , status : 200 , data : AIResponse});
    }

    async chatSession(req , res){
        const text = req.body.text;
        
        //setup history
        let history = req.body.history || [];
        history.push({role : "user" , parts : [{text : text}]})
        
        const chat = model.startChat({ history });
        const result = await chat.sendMessage(text);
        const modelResponse = result.response.text();

        history.push({role : "model" , parts: [{text : modelResponse}] })

        this.response({res , message : "success" , status : 200 , data : {
            message : modelResponse,
            history : history
        }});
        
    }
}
export default new GeminiController();