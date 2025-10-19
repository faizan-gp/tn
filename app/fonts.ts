import { Poppins, Montserrat, Inter, Playfair_Display } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","300","400", "500", "600", "700","800","900"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200","300","400", "500", "600", "700","800","900"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200","300","400", "500", "600", "700","800","900"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700","800","900"],
  variable: "--font-playfair",
});

export { poppins, montserrat, inter, playfair };