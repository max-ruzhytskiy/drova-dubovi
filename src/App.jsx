import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoriesSection from "./components/CategoriesSection";
import CategoryPage from "./pages/CategoryPage";
import ArticlePage from "./pages/ArticlePage";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <Router basename="/drova-dubovi">
      <GlobalStyles />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CategoriesSection />
              <Gallery />
            </>
          }
        />
        <Route path="/categories/:id" element={<CategoryPage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
