import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookContextProvider from "./contexts/BookContext";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./scroll.css";

function App() {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }}>
      <div className="App">
        <BookContextProvider>
          <Navbar />
          <BookList />
        </BookContextProvider>
      </div>
    </SimpleBar>
  );
}

export default App;
