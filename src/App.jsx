import Header from "./Components/Header";

import BookList from "./Components/BookList";

import BookProvider from "./Services/BookContext";
import Hero from "./Components/Hero";
import CategoryFilter from "./Components/CategoryFilter";
import Footer from "./Components/Footer";

function App() {
  return (
    <BookProvider>
      <div className="min-h-screen flex flex-col gap-4 sm:gap-6 md:gap-8 w-full rtl">
        <Header />
        <div className="mt-26">
          <Hero />
        </div>
        <div className="mt-15 md:mt-30">
          <CategoryFilter />
        </div>

        <BookList />
        <Footer />
      </div>
    </BookProvider>
  );
}

export default App;
