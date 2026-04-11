import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Poker Preflop Strategy",
  description: "ポーカー プリフロップ戦略ツール",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
