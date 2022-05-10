
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Main from "./Main";
import "./App.scss";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
