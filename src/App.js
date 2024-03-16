import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/section1/Introduction";
import ContextData from "./components/context/Context";
import Features from "./components/section2/Features";
import AddNew from "./components/section3/AddNew";
import Testimonials from "./components/section3/Testimonials";
import ToTheTop from "./components/section4/ToTheTop";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <ContextData>
        <Navbar />
        <Introduction />
        <Features />
        <AddNew />
        <Testimonials />
        <ToTheTop />
        <Footer />
      </ContextData>
    </>
  );
}

export default App;
