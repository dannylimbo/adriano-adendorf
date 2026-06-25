import type { Metadata } from "next";
import { Playfair_Display, Nunito_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eiscafé Pizzeria Adriano Adendorf – Eis, Pizza & Kaffee",
  description:
    "Eiscafé Pizzeria Adriano in Adendorf: Eis, Pizza, Kaffee und italienische Spezialitäten im Kirchweg 19A. Vor Ort genießen oder zum Mitnehmen.",
  keywords: [
    "Eiscafé Adendorf",
    "Pizzeria Adendorf",
    "Adriano Adendorf",
    "Eiscafé Pizzeria Adriano",
    "Pizza Adendorf",
    "Eis Adendorf",
    "Café Adendorf",
    "Kirchweg Adendorf",
  ],
  openGraph: {
    title: "Eiscafé Pizzeria Adriano Adendorf – Eis, Pizza & Kaffee",
    description:
      "Eis, Pizza, Kaffee und italienische Spezialitäten im Kirchweg 19A, Adendorf.",
    locale: "de_DE",
    type: "website",
    url: "https://www.adriano-adendorf.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${nunito.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
