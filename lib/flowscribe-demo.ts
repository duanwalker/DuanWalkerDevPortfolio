import fs from "node:fs";
import path from "node:path";

const FIXTURES_DIR = path.join(process.cwd(), "testJSON");
const INPUT_FILE = "01-simple-http-approval.json";
const OUTPUT_FILE = path.join(
  "testSampleOutput",
  "01-simple-http-approval-documentationOutput.md"
);

export interface FlowScribeDemoFixture {
  inputJson: string;
  outputMarkdown: string;
}

export function getFlowScribeDemoFixture(): FlowScribeDemoFixture {
  const inputJson = fs.readFileSync(path.join(FIXTURES_DIR, INPUT_FILE), "utf8").trimEnd();
  const outputMarkdown = fs.readFileSync(path.join(FIXTURES_DIR, OUTPUT_FILE), "utf8");
  return { inputJson, outputMarkdown };
}
