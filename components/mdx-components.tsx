import type { MDXComponents } from "mdx/types";
import { FlowScribeDemo } from "./flowscribe-demo";

export const mdxComponents: MDXComponents = {
  FlowScribeDemo,
  h2: (props) => <h2 className="mt-10 font-display text-h3 text-mist first:mt-0" {...props} />,
  h3: (props) => <h3 className="mt-8 font-display text-body-lg text-mist" {...props} />,
  p: (props) => <p className="mt-4 text-body-lg leading-relaxed text-lilac" {...props} />,
  ul: (props) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-body-lg text-lilac" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-body-lg text-lilac" {...props} />
  ),
  li: (props) => <li {...props} />,
  strong: (props) => <strong className="font-semibold text-mist" {...props} />,
  a: (props) => (
    <a className="text-pulse underline underline-offset-2 hover:text-mist" {...props} />
  ),
  code: (props) => (
    <code className="rounded bg-depth px-1.5 py-0.5 font-mono text-mono text-mist" {...props} />
  ),
};
