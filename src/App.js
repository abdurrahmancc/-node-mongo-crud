import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddUsers from "./Components/AddUsers/AddUsers";
import Users from "./Components/Users/Users";
import Header from "./Components/Header/Header";
import UpdateUser from "./Components/UpdateUser/UpdateUser";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/user" element={<AddUsers></AddUsers>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route path="/update/:id" element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
