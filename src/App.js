import { Fragment, useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import { useDispatch } from "react-redux";
import { isUserLoggedIn } from "./store/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isUserLoggedIn());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
