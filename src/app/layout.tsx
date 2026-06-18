import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://peirisabhi.github.io/Portfolio"),
  title: {
    default: "Abhishek Peiris — Software Engineer & Full Stack Developer",
    template: "%s | Abhishek Peiris",
  },
  description:
    "Abhishek Peiris is a Software Engineer from Sri Lanka with 5+ years of experience in Java, Spring Boot, Android, and full-stack development. Currently at VitalHub Innovations Lab building healthcare interoperability solutions.",
  keywords: [
    "Abhishek Peiris",
    "abhishek peiris",
    "peirisabhi",
    "Software Engineer Sri Lanka",
    "Java Developer Sri Lanka",
    "Spring Boot Developer",
    "Android Developer",
    "Full Stack Developer",
    "VitalHub Innovations Lab",
    "Cardiff Metropolitan University",
    "MSc Data Science",
    "Healthcare Software Engineer",
    "Negombo Sri Lanka",
    "Portfolio",
  ],
  authors: [{ name: "Abhishek Peiris", url: "https://peirisabhi.github.io/Portfolio" }],
  creator: "Abhishek Peiris",
  publisher: "Abhishek Peiris",
  alternates: {
    canonical: "https://peirisabhi.github.io/Portfolio",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://peirisabhi.github.io/Portfolio",
    title: "Abhishek Peiris — Software Engineer & Full Stack Developer",
    description:
      "Abhishek Peiris is a Software Engineer from Sri Lanka specialising in Java, Spring Boot, Android, and healthcare interoperability. 5+ years experience, MSc Data Science.",
    siteName: "Abhishek Peiris",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Abhishek Peiris — Software Engineer" }],
    firstName: "Abhishek",
    lastName: "Peiris",
    username: "peirisabhi",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Peiris — Software Engineer",
    description: "Software Engineer from Sri Lanka · Java · Spring Boot · Android · Healthcare Tech · MSc Data Science",
    images: ["/og-image.png"],
    creator: "@peirisabhi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification token here once you set it up:
    // google: "your-verification-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      // suppressHydrationWarning prevents the class mismatch warning when
      // ThemeProvider adds/removes "dark" after hydration
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#7C3AED" />
        {/* JSON-LD Person schema — tells Google exactly who this page is about */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abhishek Peiris",
              alternateName: ["peirisabhi", "Abhishek P"],
              url: "https://peirisabhi.github.io/Portfolio",
              image: "https://peirisabhi.github.io/Portfolio/og-image.png",
              jobTitle: "Software Engineer",
              description: "Software Engineer from Sri Lanka with 5+ years of experience in Java, Spring Boot, Android, and full-stack development. Currently building healthcare interoperability solutions at VitalHub Innovations Lab.",
              nationality: {
                "@type": "Country",
                name: "Sri Lanka",
              },
              worksFor: {
                "@type": "Organization",
                name: "VitalHub Innovations Lab",
                url: "https://vitalhub.com",
              },
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "Cardiff Metropolitan University",
                  url: "https://www.cardiffmet.ac.uk",
                },
              ],
              knowsAbout: [
                "Java", "Spring Boot", "Android Development", "Kotlin",
                "JavaScript", "TypeScript", "React", "Next.js", "PHP",
                "Python", "Healthcare Interoperability", "Microservices",
                "Full Stack Development", "Software Engineering",
              ],
              sameAs: [
                "https://github.com/peirisabhi",
                "https://www.linkedin.com/in/abhishekpeiris",
                "https://medium.com/@abhishekpeiris",
              ],
            }),
          }}
        />
        {/* Inline script to apply saved theme before first paint — prevents flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('portfolio-theme') || 'dark';
                  if (t !== 'light') document.documentElement.classList.add('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-bg text-text-primary font-body antialiased transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
