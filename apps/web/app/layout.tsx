import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "@workspace/ui/styles/globals.css";
import { TanstackReactQueryProvider } from "./TanstackReactQueryProvider";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../contexts/AuthContext";
import { getAppName } from "../lib/app-config";

const fontEpilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
});

const appName = getAppName();

export const metadata: Metadata = {
  title: appName,
  description: `Web client for ${appName}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontEpilogue.variable} font-sans antialiased `}>
        <TanstackReactQueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </TanstackReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
