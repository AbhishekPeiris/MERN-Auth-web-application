import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home/></Layout>}/>
        </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
