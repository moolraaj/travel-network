import localFont from "next/font/local";
import "./globals.css";
import './css/style.scss'
import Layout from "./_common/layout/layout";
import { ContextProvider } from "@/context/contextProviders";
import { Toaster } from 'sonner';


export const metadata = {
  title: "Travel Network",
  description: "travel Network Website description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="travel-network-page">
        <Toaster  position="top-right" />
        <Layout>
          <ContextProvider>
            {children}
          </ContextProvider>
        </Layout>
      </body>
    </html>
  );
}
