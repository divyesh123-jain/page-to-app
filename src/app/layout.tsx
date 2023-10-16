// layout.tsx
import "./styles/globals.css";
import "./styles/content.scss";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ThemeSelector from "../../components/ThemeChanger";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Lokus Template</title>
      </Head>
      <Header />
      <Image
        src="/Herobg.svg"
        fill
        alt=""
        className="translate-y-[-35vh] mix-blend-multiply absolute z-[-10]"
      />
      <main className="min-h-screen max-w-6xl mx-auto pt-40 px-8 md:px-4 z-10">
        {children}
      </main>
      <Footer />
      <ThemeSelector />
    </div>
  );
};

export default Layout;
