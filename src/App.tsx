import "./App.css";
// import Login from "./components/LoginForm";
// import Register from "./components/RegisterForm";
// import { SwiperSection } from "./components/Swiper";
// import { TestFetch } from "./components/Test";

import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import Example from "./components/Header/DefaultNavbar";

function App() {
  return (
    <AuthProvider>
      {/* <Header /> */}
      <Example />
      <div className=" min-h-80 ">
        <Outlet />
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default App;
