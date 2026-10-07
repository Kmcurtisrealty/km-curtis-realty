import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShowSuggestionForm } from "@/components/forms/ShowSuggestionForm";

export const metadata: Metadata = {
  title: "ADTV Suggestions",
  description: "Suggest a local business, community story, or idea to be featured on American Dream TV.",
};

export default function ADTVSuggestionsPage() {
  return (
    <section className="py-24">
      <Container className="max-w-2xl">
        <SectionHeading
          eyebrow="Got an Idea?"
          title="Suggest a Show"
          supporting="Know a local business, community story, or idea that deserves a spotlight on American Dream TV? Tell us about it below."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10">
          <ShowSuggestionForm />
        </div>
      </Container>
    </section>
  );
}
