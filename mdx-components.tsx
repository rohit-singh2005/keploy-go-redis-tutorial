import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/Callout";
import { HighlightedCode } from "@/components/HighlightedCode";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Callout,
    pre: ({ children }) => <>{children}</>,
    code: (props) => <HighlightedCode {...props} />,
  };
}
