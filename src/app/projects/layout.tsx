import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로젝트",
  description: "프로젝트 모음입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
