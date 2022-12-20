import Footer from "./Components/HomePage/Footer";
import NavBar from "./Components/NavBar";
import AllRoutes from "./Components/Routes/AllRoutes";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
