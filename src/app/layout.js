import localFont from "next/font/local";
import "./globals.css";
import './css/style.scss'
import Layout from "./_common/layout/layout";
import { AllPackagesProvider, ContextProvider } from "@/context/contextProviders";
 
 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Travel Network",
  description: "travel Network Website description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Layout>
          <ContextProvider>
          {children}
          </ContextProvider>
        </Layout>
      </body>
    </html>
  );
}
