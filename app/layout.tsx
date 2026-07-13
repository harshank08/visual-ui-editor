import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "Visual UI Editor — Next.js demo target",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <h1 className="site-title">Acme Dashboard</h1>
          <nav className="site-nav">
            <a href="#home">Home</a>
            <a href="#reports">Reports</a>
            <a href="#settings">Settings</a>
          </nav>
        </header>
        <main className="content" style={{ backgroundColor: "white" }}>{children}</main>
      </body>
    </html>
  );
}
