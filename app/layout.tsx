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
            <a href="/">Home</a>
            <a href="/landing">Landing</a>
            <a href="#reports">Reports</a>
            <a href="#settings">Settings</a>
          </nav>
        </header>
        <main className="content">{children}</main>
        {/* Visual UI Editor — dev-only in-page widget (served by the companion on :5179). */}
        {process.env.NODE_ENV === "development" && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script src="http://127.0.0.1:5179/widget.js" async />
        )}
      </body>
    </html>
  );
}
