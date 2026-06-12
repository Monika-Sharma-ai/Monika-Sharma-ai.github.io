import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Monika Sharma | Production Architect, Enterprise Agentic AI",
    template: "%s | Monika Sharma",
  },
  description:
    "Production Architect for Enterprise Agentic Systems. I build the patterns that make multi-agent AI survive Fortune 50 reality. 7 Named Frameworks · LangGraph · MCP · LLMOps.",
  keywords: [
    "Agentic AI",
    "LLMOps",
    "Enterprise AI",
    "Production Architecture",
    "Multi-Agent Systems",
    "LangGraph",
    "MCP",
    "Knowledge Graphs",
    "RAG",
  ],
  authors: [{ name: "Monika Sharma" }],
  openGraph: {
    title: "Monika Sharma | Production Architect, Enterprise Agentic AI",
    description:
      "I build the patterns that make multi-agent AI survive Fortune 50 reality.",
    type: "website",
    siteName: "Monika Sharma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monika Sharma | Production Architect, Enterprise Agentic AI",
    description:
      "I build the patterns that make multi-agent AI survive Fortune 50 reality.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
