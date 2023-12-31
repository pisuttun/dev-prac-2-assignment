import Topmenu from "@/components/TopMenu";
import "./globals.css";
import { Inter } from "next/font/google";
import {getServerSession} from "next-auth";
import NextAuthProvider from "@/providers/NextAuthProvider";
import ReduxProvider from "@/redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nextAuthSession = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <NextAuthProvider session={nextAuthSession}>
            <Topmenu />
            {children}
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
