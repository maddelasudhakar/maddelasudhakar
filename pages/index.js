import Myname from "@/components/Myname";
import ScrollSection from "@/components/ScrollSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Myname />
      <ScrollSection />
      </div>
    </>
  )
}
