import readlineSync from 'readline-sync';
import colors from 'colors';
import { model } from './config.js';



async function main(){

    while(true){
        //user
        const userText = readlineSync.question(colors.bold.blue("You : "));

        //AI
        const result = await model.generateContent(userText);
        const AIResponse = await result.response.text();
        console.log(colors.bold.green("AI : "), AIResponse);
        if(userText == "exit"){
            return;
        }
        
    }
    

}
main();
