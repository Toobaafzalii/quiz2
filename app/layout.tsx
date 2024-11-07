"use client";
import "./globals.css";
import { Navbar } from "@/components/navBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new QueryClient();

  return (
    <html lang="en">
      <body className="bg-indigo-100">
        <QueryClientProvider client={client}>
          <Navbar />
          <main>{children}</main>
          <div className="w-full h-52 bg-slate-500 bg-gradient-to-t from-slate-700 rounded-t-full"></div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
