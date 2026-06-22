import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

export async function SplitterDemo01() {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 200,
    chunkOverlap: 20,
    separators: ["\n\n", "\n", " ", ""],
  });

  const text = `# LangChain 简介

LangChain 是一个用于构建 LLM 应用的框架。它提供了一系列工具和抽象，帮助开发者快速构建基于大语言模型的应用程序。

## 核心概念

LangChain 的核心概念包括 Chain、Agent、Tool 等。每个概念都有明确的职责划分。

Chain 是最基础的抽象，它将多个步骤串联起来，形成一个完整的处理流程。

## 安装方式

使用 npm 安装: npm install langchain
使用 yarn 安装: yarn add langchain`;

  const chunks = await splitter.createDocuments([text]);

  chunks.forEach((chunk, i) => {
    console.log(`--- Chunk ${i} (${chunk.pageContent.length} chars) ---`);
    console.log();
  });
}
