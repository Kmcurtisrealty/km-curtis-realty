import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "@react-email/components";
import type { ShowSuggestionSubmission } from "@/lib/types/lead";

interface ShowSuggestionEmailProps {
  submission: ShowSuggestionSubmission;
}

export function ShowSuggestionEmail({ submission }: ShowSuggestionEmailProps) {
  const { name, email, suggestion, sourcePage } = submission;

  return (
    <Html>
      <Head />
      <Preview>New American Dream TV show suggestion from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Show Suggestion</Heading>
          <Text style={text}>Krissy Curtis Realty website — {sourcePage}</Text>
          <Hr style={hr} />
          <Section>
            <Text style={label}>Name</Text>
            <Text style={text}>{name}</Text>
            <Text style={label}>Email</Text>
            <Text style={text}>{email}</Text>
            <Text style={label}>Suggestion</Text>
            <Text style={text}>{suggestion}</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>Sent automatically from the American Dream TV suggestion box.</Text>
        </Container>
      </Body>
    </Html>
  );
}

export default ShowSuggestionEmail;

const main = { backgroundColor: "#FAFBFC", fontFamily: "Georgia, 'Times New Roman', serif" };
const container = { margin: "0 auto", padding: "32px 24px", maxWidth: "560px" };
const heading = { color: "#333A42", fontSize: "22px", fontWeight: 600 };
const label = { color: "#6C90B0", fontSize: "12px", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "2px" };
const text = { color: "#333A42", fontSize: "15px", lineHeight: "1.6", marginTop: 0, marginBottom: "16px" };
const hr = { borderColor: "#DEE3E8", margin: "20px 0" };
const footer = { color: "#6B7480", fontSize: "12px" };
