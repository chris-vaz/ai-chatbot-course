import { Configuration, OpenAIApi } from "openai";
import OpenAI from 'openai';
const {OPENAI_API_KEY} = useRuntimeConfig();
export default defineEventHandler(async (event) => {
  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello World" }],
  });

  console.log(completion.data.choices[0].message);

});
