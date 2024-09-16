import { Inter, Poppins, Lato } from "@next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar-homepage";
import { AppWrapper } from "./context";

export const metadata = {
  title: "Kana Rent",
  description:
    "Wypożyczalnia sprzętu budowlanego i ogrodnicznego Będzin i okolice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <AppWrapper>{children}</AppWrapper>
        <Footer />
      </body>
      <script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/4eb158332f26f5f9eb4cc8a5/script.js"
      ></script>
    </html>
  );
}
