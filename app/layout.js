import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "emil shiju",
  description: "emil shiju , full stack development,portfolio",
};
import { ThemeProvider } from "./components/toggle";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
      >
        <ThemeProvider> {children}</ThemeProvider>
       
      </body>
    </html>
  );
}
