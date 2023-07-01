import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
export default function Navbar() {
  return (
    <div className={`${styles.container} ${styles.for_bg}`}>
      <Head>
        <title>Maddela Sudhakar - UI/UX Designer & Graphic Designer</title>
        <meta name="description" content="Maddela Sudhakar - UI/UX Designer & Graphic Designer" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <nav
        className={`${styles.container} ${styles.forflex}`}
      >
        <div>
          <Link href="/">
            <Image src="/images/color-logo.png" alt="logo" width={225} height={70} className={styles.logo} priority={true} />
          </Link>
         </div>
        {/*<div className={styles.mainmenu}>
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
        </div> */}
      </nav>
    </div>
  );
}