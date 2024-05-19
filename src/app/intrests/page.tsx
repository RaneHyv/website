import { SimpleLayout } from "@/components/SimpleLayout";
import { Tool } from "@/helpers/tools/tool-helper";
import { ToolsSection } from "@/helpers/tools/tool-selection-helper";

export const metadata = {
  title: "Intrests",
  description: "Intrests and things I want to learn about.",
};

export default function Skills() {
  return (
    <SimpleLayout
      title="Intrests and things I want to learn about."
      intro={`There are always new things, terchnologies 
        and tools to learn and explore. 
        Here are some of the things I am interested in.`}
    >
      <div className="space-y-20">
        <ToolsSection title="Programming languages">
          <Tool title="Java">
            Java is a language that I have been interested in for a long time,
            due to it&apos;s wide range of use cases. I have used it previously
            but I would like to learn more about it and it&apos;s use cases for
            web service backend.
          </Tool>
          <Tool title="Go">
            Go seems really simple and straght forward language in it&apos;s
            design and syntax. I personally find it admireable to strive for
            simplicity and what I have seen and heard about Go, it seems like a
            language that I would enjoy to learn and use.
          </Tool>
          <Tool title="Rust">
            What can I say... it has been the talk of the town for a while now
            and it is getting a lot of recognition and praise for it&apos;s
            features. I mean who wouldn&apos;t want to learn a language that is
            getting more and more used in Linux kernel and in other big projects
            and rewrites.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}
