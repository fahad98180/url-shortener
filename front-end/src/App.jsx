import React from "react";
import Register from "./modules/user/pages/Register";
// import { login } from "../../back-end/src/controller/user-controller.js";
import  Login  from "./modules/user/pages/Login";
import { Button } from "@radix-ui/themes";
import { AppRouts } from "./shared/routs/AppRouts";
import {  useNavigate } from "react-router-dom";
// import {UrlShort} from "./modules/urlshortner/pages/UrlShort";
import { UrlShort } from "./modules/urlshortner/pages/Urlshort";

// function App(){
//   return <UrlShort/>;
// }
// export default App;
function App(){
  const navigate = useNavigate();
  return(
  
  <>
      <Button onClick={()=>{
        navigate('/register');
        }}type="button"variant="classic"size="3"style={{margin:3}}>
        Register</Button>

      <Button onClick={()=>{
         navigate('/login');
      }} type="button"variant="surface"size="3"style={{margin:3}}>
        Login</Button>

        <AppRouts/>

{/* <Register/>
<Login/> */}
  </>
  )
}
export default App;







// import React from "react";
// import { Button } from "@radix-ui/themes";
// import { useNavigate } from "react-router-dom";
// import { AppRouts } from "./shared/routs/AppRouts";

// function App() {
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("email"); // true if logged in

//   return (
//     <>
//       {/* ✅ Only show Login/Register when NOT logged in */}
//       {!isLoggedIn && (
//         <>
//           <Button
//             onClick={() => {
//               navigate("/register");
//             }}
//             type="button"
//             variant="classic"
//             size="3"
//             style={{ margin: 3 }}
//           >
//             Register
//           </Button>

//           <Button
//             onClick={() => {
//               navigate("/login");
//             }}
//             type="button"
//             variant="surface"
//             size="3"
//             style={{ margin: 3 }}
//           >
//             Login
//           </Button>
//         </>
//       )}

//       {/* 🚫 No Logout here — only in Dashboard */}
//       <AppRouts />
//     </>
//   );
// }

// export default App;







// import React, { useState, useEffect } from "react";
// import { Button } from "@radix-ui/themes";
// import { useNavigate } from "react-router-dom";
// import { AppRouts } from "./shared/routs/AppRouts";

// function App() {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // 🔹 Check login status when app loads
//   useEffect(() => {
//     const loggedIn = !!localStorage.getItem("email");
//     setIsLoggedIn(loggedIn);
//   }, []);

//   // 🔹 Listen for login/logout changes across app
//   useEffect(() => {
//     const handleStorageChange = () => {
//       const loggedIn = !!localStorage.getItem("email");
//       setIsLoggedIn(loggedIn);
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   return (
//     <>
//       {/* ✅ Show Login/Register ONLY when NOT logged in */}
//       {!isLoggedIn && (
//         <>
//           <Button
//             onClick={() => navigate("/register")}
//             type="button"
//             variant="classic"
//             size="3"
//             style={{ margin: 3 }}
//           >
//             Register
//           </Button>

//           <Button
//             onClick={() => navigate("/login")}
//             type="button"
//             variant="surface"
//             size="3"
//             style={{ margin: 3 }}
//           >
//             Login
//           </Button>
//         </>
//       )}

//       {/* 🚫 No logout button here (only in Dashboard) */}
//       <AppRouts />
//     </>
//   );
// }

// export default App;
