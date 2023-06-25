import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
export default function Navbar() {
  return (
    <div className={`${styles.container_fluid} ${styles.for_bg}`}>
      <Head>
        <title>Maddela Sudhakar - UI/UX Designer & Graphic Designer</title>
        <meta name="description" content="Maddela Sudhakar - UI/UX Designer & Graphic Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav
        className={`${styles.container} ${styles.forflex} ${styles.ltn_header_transparent}`}
      >
        <div>
          <Link href="/">
            <Image src="/images/logo1.png" alt="logo" width={100} height={92} />
          </Link>
        </div>
        <div className={styles.mainmenu}>
          <Link href="/">
            Home
          </Link>
          <Link href="/about">
            About Me
          </Link>
          <Link href="/portfolio">
            Portfolio
          </Link>
          <Link href="/services">
            Services
          </Link>
          <Link href="/contact">
            Contact Me
          </Link>
        </div>
      </nav>
    </div>
  );
}