import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import StyledComponentsRegistry from "./Registry";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";

// Font Configurations
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "Otito",
  description: "News in just 2 lines",
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        <StyledComponentsRegistry>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
