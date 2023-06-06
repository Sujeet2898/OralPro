import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Information from './components/Information';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Error from './components/Error';
import GoToTop from "./components/GoToTop";
import SubPage1 from './components/SubPage1';
import SubPage2 from './components/SubPage2';
import SubPage3 from './components/SubPage3';
import SubPage4 from './components/SubPage4';
import SubPage5 from './components/SubPage5';
import SubPage6 from './components/SubPage6';
import SubPage7 from './components/SubPage7';
import SubPage8 from './components/SubPage8';
import SubPage9 from './components/SubPage9';
import SubPage10 from './components/SubPage10';
import SubPage11 from './components/SubPage11';
import SubPage12 from './components/SubPage12';



const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
      <GlobalStyle />
      <GoToTop />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/information" element={<Information />} />
          <Route path="/information/subpage1" element={<SubPage1 />} />
          <Route path="/information/subpage2" element={<SubPage2 />} />
          <Route path="/information/subpage3" element={<SubPage3 />} />
          <Route path="/information/subpage4" element={<SubPage4 />} />
          <Route path="/information/subpage5" element={<SubPage5 />} />
          <Route path="/information/subpage6" element={<SubPage6 />} />
          <Route path="/information/subpage7" element={<SubPage7 />} />
          <Route path="/information/subpage8" element={<SubPage8 />} />
          <Route path="/information/subpage9" element={<SubPage9 />} />
          <Route path="/information/subpage10" element={<SubPage10 />} />
          <Route path="/information/subpage11" element={<SubPage11/>} />
          <Route path="/information/subpage12" element={<SubPage12/>} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
