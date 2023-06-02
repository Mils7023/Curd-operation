import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home";
import AddEmployee from "./components/AddEmployee";
import { GlobalProvider } from "./context/GlobalState";
import EditEmployee from "./components/EditEmployee";

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEmployee />} exact />
        <Route path="/edit/:id" element={<EditEmployee />} exact />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
