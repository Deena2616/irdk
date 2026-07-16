import "./App.css";
import Karaoke from "./pages/karaoke";
import Events from "./pages/events";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Games from "./pages/Games";
import Membership from "./pages/Membership";
import Offers from "./pages/Offers";
import Services from "./pages/Services";
import Shops from "./pages/Shops";
import ShopImageView from "./pages/ShopImageView";
import Termsandconditions from "./pages/Termsandconditions";
import Dining from "./pages/Dining";
import StoreView1 from "./pages/StoreView1";
import StoreView2 from "./pages/StoreView2";
import StoreView3 from "./pages/StoreView3";
import StoreView4 from "./pages/StoreView4";
import StoreView5 from "./pages/StoreView5";
import StoreView6 from "./pages/StoreView6";
import StoreView7 from "./pages/StoreView7";
import StoreView8 from "./pages/StoreView8";
import StoreView9 from "./pages/StoreView9";
import Attoxifty from "./pages/Attoxifty";
import Samsung from "./pages/Samsung";
import CAndK from "./pages/C&K";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/games" element={<Games />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/shop-image-view" element={<ShopImageView />} />
          <Route path="/terms" element={<Termsandconditions />} />
          <Route path="/termsandconditions" element={<Termsandconditions />} />
          <Route path="/dine" element={<Dining />} />
          <Route path="/store-view1" element={<StoreView1 />} />
          <Route path="/store-view2" element={<StoreView2 />} />
          <Route path="/store-view3" element={<StoreView3 />} />
          <Route path="/store-view4" element={<StoreView4 />} />
          <Route path="/store-view5" element={<StoreView5 />} />
          <Route path="/store-view6" element={<StoreView6 />} />
          <Route path="/store-view7" element={<StoreView7 />} />
          <Route path="/store-view8" element={<StoreView8 />} />
          <Route path="/store-view9" element={<StoreView9 />} />
          <Route path="/events" element={<Events />} />
          <Route path="/karaoke" element={<Karaoke />} />
          <Route path="/Attoxifty" element={<Attoxifty />} />
          <Route path="/samsung" element={<Samsung />} />
          <Route path="/ck" element={<CAndK />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
