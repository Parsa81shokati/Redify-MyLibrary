import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import BookList from "./Components/BookList";

import BookProvider from "./Services/BookContext";

function App() {
  return (
    <BookProvider>
      <div className="min-h-screen flex flex-col gap-4 sm:gap-6 md:gap-8 w-full px-4 sm:px-6 md:px-6 lg:px-8 rtl">
        <div>
          <Header />
          <SearchBar />
        </div>
        <BookList />
      </div>
    </BookProvider>
  );
}

export default App;
