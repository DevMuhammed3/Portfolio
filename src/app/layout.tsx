import "./globals.css";
import GlobalCursor from '@/components/GlobalCursor'
import ScrollGearController from '@/components/webSystem/ScrollGearController'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0b0614] text-slate-100`}>
        <ScrollGearController />
        <GlobalCursor />
        {children}
      </body>
    </html>
  );
}
