import type { Metadata } from "next";
import { Sora, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  weight: ["700"],
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  weight: ["400", "600"],
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const SITE_DESCRIPTION =
  "Senior Azure Cloud Integrations Engineer at Microsoft. Orchestration, agent workflows, and integration architecture for enterprise customers.";

export const metadata: Metadata = {
  metadataBase: new URL("https://duanwalker.dev"),
  title: {
    template: "%s · Duan Walker",
    default: "Duan Walker — AI Systems on Azure",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Duan Walker",
    url: "https://duanwalker.dev",
    title: "Duan Walker — AI Systems on Azure",
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
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
      className={`${sora.variable} ${sourceSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-depth text-mist font-body">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
