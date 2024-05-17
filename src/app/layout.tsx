import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "채유빈의 포트폴리오",
  description: "채유빈의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <div className="bg-primary">
            <Header />
            <section className="flex min-h-screen flex-col justify-center text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                {children}
              </div>
            </section>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
