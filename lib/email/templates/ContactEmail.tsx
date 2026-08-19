import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "@react-email/components";
import type { ContactSubmission } from "@/lib/types/lead";

interface ContactEmailProps {
  submission: ContactSubmission;
}

export function ContactEmail({ submission }: ContactEmailProps) {
  const { firstName, lastName, email, phone, message, sourcePage } = submission;

  return (
    <Html>
      <Head />
      <Preview>New website inquiry from {firstName} {lastName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Contact Form Submission</Heading>
          <Text style={text}>KM Curtis Realty website — {sourcePage}</Text>
          <Hr style={hr} />
          <Section>
            <Text style={label}>Name</Text>
            <Text style={text}>{firstName} {lastName}</Text>
            <Text style={label}>Email</Text>
            <Text style={text}>{email}</Text>
            <Text style={label}>Phone</Text>
            <Text style={text}>{phone || "Not provided"}</Text>
            <Text style={label}>Message</Text>
            <Text style={text}>{message}</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>Sent automatically from the KM Curtis Realty website contact form.</Text>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactEmail;

const main = { backgroundColor: "#F6F2EA", fontFamily: "Georgia, 'Times New Roman', serif" };
const container = { margin: "0 auto", padding: "32px 24px", maxWidth: "560px" };
const heading = { color: "#1E2622", fontSize: "22px", fontWeight: 600 };
const label = { color: "#2E4A4C", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "2px" };
const text = { color: "#1E2622", fontSize: "15px", lineHeight: "1.6", marginTop: 0, marginBottom: "16px" };
const hr = { borderColor: "#DDE3DE", margin: "20px 0" };
const footer = { color: "#7C8B6F", fontSize: "12px" };
