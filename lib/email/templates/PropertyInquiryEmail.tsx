import { Body, Container, Head, Heading, Hr, Html, Link, Preview, Section, Text } from "@react-email/components";
import type { PropertyInquirySubmission } from "@/lib/types/lead";

interface PropertyInquiryEmailProps {
  submission: PropertyInquirySubmission;
}

export function PropertyInquiryEmail({ submission }: PropertyInquiryEmailProps) {
  const {
    firstName,
    lastName,
    email,
    phone,
    message,
    sourcePage,
    propertyAddress,
    propertyId,
    propertySlug,
    propertyUrl,
    interestedInProperty,
  } = submission;

  return (
    <Html>
      <Head />
      <Preview>Property inquiry: {propertyAddress}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Property Inquiry</Heading>
          <Text style={text}>KM Curtis Realty website — {sourcePage}</Text>
          <Hr style={hr} />
          <Section>
            <Text style={label}>Property</Text>
            <Text style={text}>{propertyAddress}</Text>
            <Text style={label}>Listing ID</Text>
            <Text style={text}>{propertyId} ({propertySlug})</Text>
            <Text style={label}>Property URL</Text>
            <Text style={text}>
              <Link href={propertyUrl} style={link}>{propertyUrl}</Link>
            </Text>
            <Text style={label}>Interested in this property?</Text>
            <Text style={text}>{interestedInProperty ? "Yes" : "Not specified"}</Text>
          </Section>
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
          <Text style={footer}>Sent automatically from the KM Curtis Realty website property inquiry form.</Text>
        </Container>
      </Body>
    </Html>
  );
}

export default PropertyInquiryEmail;

const main = { backgroundColor: "#F6F2EA", fontFamily: "Georgia, 'Times New Roman', serif" };
const container = { margin: "0 auto", padding: "32px 24px", maxWidth: "560px" };
const heading = { color: "#1E2622", fontSize: "22px", fontWeight: 600 };
const label = { color: "#2E4A4C", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "2px" };
const text = { color: "#1E2622", fontSize: "15px", lineHeight: "1.6", marginTop: 0, marginBottom: "16px" };
const link = { color: "#2E4A4C" };
const hr = { borderColor: "#DDE3DE", margin: "20px 0" };
const footer = { color: "#7C8B6F", fontSize: "12px" };
