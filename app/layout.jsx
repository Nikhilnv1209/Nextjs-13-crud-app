import Footer from "./Footer";
import "./globals.css";
import Header from "./Header";
import { UserProvider } from "@/lib/Context/Usercontext";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <main className="flex-1">
          <UserProvider>
          {children}
          </UserProvider>
          </main>
        <Footer />
      </body>
    </html>
  );
}
