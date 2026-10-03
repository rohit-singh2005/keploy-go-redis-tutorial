import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/Callout";
import { HighlightedCode } from "@/components/HighlightedCode";
import { Insight } from "@/components/Insight";
import { WhatYouLearn } from "@/components/WhatYouLearn";
import { StatsBanner } from "@/components/StatsBanner";
import { KeployRecordOutput, KeployTestOutput } from "@/components/TerminalOutput";
import { StepScreenshot } from "@/components/StepScreenshot";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Callout,
    Insight,
    WhatYouLearn,
    StatsBanner,
    KeployRecordOutput,
    KeployTestOutput,
    StepScreenshot,
    pre: ({ children }) => <>{children}</>,
    code: (props) => <HighlightedCode {...props} />,
  };
}
