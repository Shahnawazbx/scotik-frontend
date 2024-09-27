import Banner from "./pages/layout/Banner";
import CourceSlider from "./pages/layout/CourceSlider";
import Feature from "./pages/layout/Feature";
import Footer from "./pages/layout/Footer";
import Navbar from "./pages/layout/Navbar";
import Team from "./pages/layout/Team";

const Home = () => {
    
    return (
        <>
           <Navbar />
           <Banner />
           <CourceSlider />
           <Feature />
           { /* <Team /> */ }
           <Footer />
        </>
)};

export default Home;