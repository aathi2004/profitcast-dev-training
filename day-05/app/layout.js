import "./globals.css";

export const metadata = {
  title: "The Detailing Mafia Vijayawada | Premium Car Detailing Studio",
  description:
    "Vijayawada's most trusted car detailing studio. Paint Protection Film, Ceramic Coating, Interior Detailing & Engine Cleaning by certified technicians. Book your free inspection today.",
  keywords: [
    "car detailing vijayawada",
    "ceramic coating vijayawada",
    "paint protection film vijayawada",
    "the detailing mafia",
    "interior detailing",
    "engine cleaning",
  ],
  openGraph: {
    title: "The Detailing Mafia Vijayawada",
    description:
      "Premium car detailing studio in Vijayawada — PPF, Ceramic Coating, Interior & Engine Detailing.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-carbon text-white">{children}</body>
    </html>
  );
}
