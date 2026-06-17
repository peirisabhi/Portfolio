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
  metadataBase: new URL("https://abhishekpeiris.dev"),
  title: {
    default: "Abhishek Peiris — Software Engineer & Full Stack Developer",
    template: "%s | Abhishek Peiris",
  },
  description:
    "Passionate Software Engineer from Sri Lanka focused on building scalable software solutions. Experienced in Java, Spring Boot, Android, PHP, JavaScript and modern web technologies.",
  keywords: [
    "Abhishek Peiris",
    "Software Engineer",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot",
    "Android Developer",
    "Sri Lanka",
    "VitalHub",
    "Portfolio",
  ],
  authors: [{ name: "Abhishek Peiris" }],
  creator: "Abhishek Peiris",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekpeiris.dev",
    title: "Abhishek Peiris — Software Engineer & Full Stack Developer",
    description:
      "Passionate Software Engineer from Sri Lanka focused on building scalable software solutions.",
    siteName: "Abhishek Peiris Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Abhishek Peiris Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Peiris — Software Engineer",
    description: "Passionate Software Engineer from Sri Lanka building scalable solutions.",
    images: ["/og-image.png"],
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
