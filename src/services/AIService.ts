import {streamText} from 'ai'
import { openrouter } from '../lib/ai'


export default{
    async generateRecipe(prompt: string){
        const result = streamText({
            model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt:prompt,
            system: 'Eres un bartender con 15 años de experiencia',
            temperature:0
        })
       return result.textStream
        
    }
}
