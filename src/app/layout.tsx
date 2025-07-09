import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";
import { Oswald } from "next/font/google";
import "./global.css";
import { UserContextProvider } from "@/context/useContex";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  weight: ["400", "700"], 
  subsets: ["latin"],
  variable: "--font-roboto",
});

const oswald = Oswald({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-oswald ",
});

const poppins = Poppins({
  weight: ["400", "700"], 
  subsets: ["latin"],
  variable: "--font-poppins",
});
export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-Br"
      className={`${roboto.variable} ${poppins.variable} ${oswald.variable}`}
    >
      <body>
        <UserContextProvider>
          <main>
            {children}
            <Footer />
          </main>
          <div>{modal}</div>
        </UserContextProvider>
      </body>
    </html>
  );
}
