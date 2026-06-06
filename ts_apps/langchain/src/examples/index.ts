import "dotenv/config";

import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

export async function helloDemo01() {
  const model = new ChatOpenAI({
    model: "gpt-4o-mini",
    temperature: 0,
  });

  const response = await model.invoke("请用一句话介绍 LangChain");

  console.log(response.content);
}

// PromptTemplate
export async function helloDemo02() {
  const prompt = PromptTemplate.fromTemplate("请用{style}风格解释{topic}");
  const formatted = await prompt.format({
    style: "简单",
    topic: "LangChain",
  });
  console.log(formatted);
}

export async function helloDemo03() {
  const model = new ChatOpenAI({
    model: "gpt-4o-mini",
  });
  const prompt = PromptTemplate.fromTemplate("请解释 {topic}");

  const chain = prompt.pipe(model).pipe(new StringOutputParser());

  const result = await chain.invoke({
    topic: "RAG",
  });
  console.log(result);
}
