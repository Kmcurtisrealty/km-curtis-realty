/**
 * Real, verified client reviews sourced from Krissy Curtis's Zillow profile
 * (https://www.zillow.com/profile/Krissy%20M%20Curtis#reviews) — per the
 * master spec (§28, §40) requiring "verified client reviews only." Quoted
 * verbatim from the source; add new entries the same way as more reviews
 * come in.
 */

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  source: string;
  date: string;
  isDemo: false;
}

const testimonials: Testimonial[] = [
  {
    id: "testimonial-frank-yocum",
    quote:
      "Krissy did an outstanding job! very responsive, not once did i have to re-text or re-send an email. Responses were usually within an hour. I have bought and sold multiple houses with Krissy as my agent. I would not hesitate to call her for anything.",
    name: "Frank Yocum",
    location: "Sherwood, MD",
    source: "Zillow",
    date: "2026-06-16",
    isDemo: false,
  },
  {
    id: "testimonial-tyresag85",
    quote:
      "Ms Krissy has assisted me with purchasing and selling a home. She makes the transition from one home to the next as easy as possible. She educates you on the do's & dont when you looking to purchase or sell. She's knowledgeable. She never leaves you in the dark and answers every question. I heard how some people lose money when dealing with certain realtors. You won't lose a dime when working with Ms Krissy. She's my Shero!",
    name: "tyresag85",
    location: "Belair-Edison, Baltimore, MD",
    source: "Zillow",
    date: "2026-05-20",
    isDemo: false,
  },
  {
    id: "testimonial-daniellebechtold6",
    quote:
      "We had an excellent experience working with Krissy while purchasing our new construction home and selling our previous house. Throughout both transactions, she was knowledgeable, responsive, and incredibly supportive, making the entire process smooth and stress-free. Thanks to her expertise, strategic marketing, and guidance, our home sold in just 3 days, exceeding our expectations. From advocating for us during the new construction process to managing the sale of our home, Krissy consistently went above and beyond to ensure everything was ready for closing. We highly recommend Krissy to anyone looking for a trustworthy, professional, and dedicated real estate agent.",
    name: "DanielleBechtold6",
    location: "Centreville, MD",
    source: "Zillow",
    date: "2026-06-13",
    isDemo: false,
  },
  {
    id: "testimonial-william-wooten",
    quote:
      "Krissy Curtis was a blessing during the whole process of selling my home. She is very pleasant, knowledgeable and staying updated everything going on with all parties involved. I highly recommend working with her",
    name: "William Wooten",
    location: "Waldorf, MD",
    source: "Zillow",
    date: "2025-04-08",
    isDemo: false,
  },
  {
    id: "testimonial-melissahoffman1992",
    quote:
      "Krissy was fabulous. Friendly, extremely helpful and responsive to all questions email and calls! Would definitely recommend the group to anyone looking to sell or buy. Everyone I spoke with was pleasant and helpful",
    name: "melissahoffman1992",
    location: "Odenton, MD",
    source: "Zillow",
    date: "2024-10-24",
    isDemo: false,
  },
  {
    id: "testimonial-erinmurn",
    quote:
      "Krissy brings her A-game to every step of the home buying process. Our offer was accepted and closed within 40 days!!! We could not have accomplished this without Krissy. My husband and I were first time home buyers and had worked with other realtors. During our first showing, we knew Krissy was our gal! Krissy was personable, responsive, punctual, and most importantly, listened to our wants and needs! My husband and I were so impressed by her attention to detail and wealth of knowledge of the area (including builders, country regulations, school systems, market trends, investments, etc.). Her connections and brilliance is the reason why we had lender, home inspector, and contractor dream team! Best part is negotiated us credit in the end and looked out for us even after the deal. Our next home purchase will absolutely be with Krissy. Schedule an appointment with her immediately!!!",
    name: "erinmurn",
    location: "Arnold, MD",
    source: "Zillow",
    date: "2024-02-28",
    isDemo: false,
  },
  {
    id: "testimonial-shibanipatra02",
    quote:
      "Krissy Curtis was a delight to work with. She is very professional, knowledgeable and takes the time to ensure you have a full understanding of the transaction. If you are looking for a realtor who knows the market, I highly recommend her as your choice.",
    name: "shibanipatra02",
    location: "MD 21076",
    source: "Zillow",
    date: "2020-02-20",
    isDemo: false,
  },
  {
    id: "testimonial-rwayson867",
    quote:
      "Helped us through every step from start to finish. Was honest about feedback and things that could help the home to sell. She was available anytime that we had a question or concern about the process for selling the home. I would definitely recommend her for anyone looking for an agent that they can trust and rely on.",
    name: "rwayson867",
    location: "Edgewater, MD",
    source: "Zillow",
    date: "2019-02-27",
    isDemo: false,
  },
  {
    id: "testimonial-shanell-nero",
    quote:
      "Krissy was amazing to work with! She was very professional, she answered all our questions and made revisions quickly to ensure our listing was accurate and up to date. We had lots of foot traffic and Krissy was there every step of the way showing the house to all potential renters and also provided feedback. If you are in need of an agent who is friendly, responsive and professional, Krissy more than fits the bill! I would highly recommend working with her, I will use her for future real estate needs for my family!",
    name: "Shanell Nero",
    location: "Owings, MD",
    source: "Zillow",
    date: "2019-02-21",
    isDemo: false,
  },
  {
    id: "testimonial-kimowens8",
    quote:
      "We worked with Krissy to sell and buy our home. She was very knowledgeable and gave us suggestions as needed. She also was very responsive and available to answer all our questions.",
    name: "KimOwens8",
    location: "Lake Shore, Pasadena, MD",
    source: "Zillow",
    date: "2019-02-07",
    isDemo: false,
  },
  {
    id: "testimonial-lharvey050",
    quote:
      "Krissy is amazing! She worked so hard on behalf of my husband and I, both during the selling and the purchase of our home. She was always responsive, reachable, and reassuring. Her knowledge of the whole process made us feel so comfortable. I cannot recommend her enough!",
    name: "lharvey050",
    location: "Deale, MD",
    source: "Zillow",
    date: "2019-02-06",
    isDemo: false,
  },
];

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}
