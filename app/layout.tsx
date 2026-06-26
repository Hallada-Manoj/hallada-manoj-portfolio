import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hallada Manoj | Data Scientist & Machine Learning Engineer",
  description:
    "Aspiring Data Scientist and Machine Learning Engineer with expertise in Python, SQL, Machine Learning, and Data Analytics. Building intelligent solutions through predictive modeling and data-driven insights.",
  keywords: [
    "Data Scientist",
    "Machine Learning Engineer",
    "Python",
    "SQL",
    "Data Analytics",
    "AI",
    "Portfolio",
    "Hallada Manoj",
  ],
  authors: [{ name: "Hallada Manoj" }],
  openGraph: {
    title: "Hallada Manoj | Data Scientist & Machine Learning Engineer",
    description:
      "Aspiring Data Scientist and Machine Learning Engineer specializing in predictive modeling, data visualization, and AI solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Hallada Manoj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hallada Manoj | Data Scientist & Machine Learning Engineer",
    description:
      "Aspiring Data Scientist and Machine Learning Engineer specializing in predictive modeling, data visualization, and AI solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hallada Manoj",
              givenName: "Manoj",
              familyName: "Hallada",
              jobTitle: "Aspiring Data Scientist | Machine Learning Engineer",
              email: "halladamanoj4@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                addressCountry: "India",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "REVA University",
              },
              knowsAbout: [
                "Python",
                "SQL",
                "Machine Learning",
                "Data Science",
                "Data Analytics",
                "Deep Learning",
              ],
              url: "https://github.com/Hallada-Manoj",
            }),
          }}
        />
      </head>
      <body className="antialiased bg-[#020617] text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}
