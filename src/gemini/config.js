import {GoogleGenerativeAI} from "@google/generative-ai"
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



// export const model = {
//     apiKey: process.env.GOOGLE_API_KEY,
//     async generateContent(userText) {
//         const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${this.apiKey}`
//             },
//             body: JSON.stringify({ prompt: userText })
//         });
//         console.log("result : " . response);
        
//         if (!response.ok) {
//             throw new Error(`Error fetching from API: ${response.status} ${response.statusText}`);
//         }
//         return response.json();
//     }
// };

