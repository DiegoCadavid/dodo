import { Noto_Sans } from "next/font/google";
import Head from "next/head";
import Header from "../header/Header";

const notoSans = Noto_Sans({
  weight: ["400","500","600"],
  subsets: ["latin"],
  preload: true,
  style: ["italic", "normal"],
});

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Dodo</title>
        <meta name="description" content="Dodo site!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={notoSans.className} >
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
