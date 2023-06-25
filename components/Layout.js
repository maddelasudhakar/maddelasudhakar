import Footer from "../components/Footer";
import Navbar from "./Header";
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
