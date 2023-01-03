import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import dark from "../public/dark.png";

const inter = Inter({ subsets: ["latin"] });

interface IHome {
  VCUPrice: string;
}

export default function Home({ VCUPrice }: IHome) {
  return (
    <>
      <Head>
        <title>Onchain VCU</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen">
        <div className="pl-10 pt-10">
          <Image src={dark} alt="MW" height={100} className="" />
        </div>

        <div className={styles.main}>
          <div className={styles.center}>
            <div className={styles.thirteen}>
              <div className="stat">
                <div className="stat-title text-center">
                  Verra Carbon Credit Price
                </div>
                <div className="stat-value text-center">${VCUPrice} USD</div>
                <div className="stat-desc text-center">
                  Last updated 4 minutes ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // const res = await fetch("https://.../posts");
  // const VCUPrice = awa it res.json();

  return {
    props: {
      VCUPrice: "180.00",
    },
    revalidate: 60,
  };
}
