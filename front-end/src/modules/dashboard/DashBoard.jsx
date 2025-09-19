// // import { Box, Flex } from "@radix-ui/themes";
// // import { paddingPropDefs } from "@radix-ui/themes/dist/esm/props/padding.props.js";
// import { Heading } from "@radix-ui/themes";
// import { Separator } from "radix-ui";
// import { useNavigate ,Outlet,linkStyle,active} from "react-router-dom";
// // import { Separator } from "radix-ui";
// import (Flex,Box,Heading,Button,Separator,Text);
// export const DashBoard = () => {
//     const navigate = useNavigate();
//     // return <h1>DashBoard Welcome {localStorage.email}</h1>;
    
//         return (
//     <Flex direction="column" style={{ minHeight: "100dvh" }}>
//       {/* Header */}
//       <Box asChild>
//         <header style={{ padding: "12px 16px" }}>
//           <Flex align="center" justify="between">
//             <Heading size="5">
//               🔗 URL Shortener App, Welcome {localStorage.email}
//             </Heading>
//             <Button
//               variant="soft"
//               onClick={() => {
//                 localStorage.removeItem("email");
//                 navigate("/login", { replace: true });
//               }}>
//                 Logout
//            </Button>
//            </Flex>
//            </header>
//            </Box>

//            <Separator size="4"/>
//            <Flex style={{flex:1}}>
//             <Box asChild>
//                 <aside
//                 style={{
//                     width:"240px",
//                     padding:"16px",
//                     borderRight:"1px solid var(--gray-5)",

//                 }}
//                 >
//                     <Flex direction="column" gap="2">
//                         <Text size="2" color="gray">
//                             menu
//                         </Text>

//                         <div
//                         style={linkStyle(active == "shorten")}
//                         onClick={() => navigate("/dashboard/shorten")}
// >
// Genrate short Url
// </div>

// <div
//    style={linkStyle(active == "links")}
//                         onClick={() => navigate("/dashboard/links")}
// >
// my url

// <div/>
// </Flex>
// </aside>
// </Box>



// <Separator orientation ="vertical" size="4" style={{height: "100%"}}

// <Box asChild>
//     <main style={{flex: 1, padding:16}}>
//         <Outlet/>
//     </main>
// </Box>
// </Flex>
// </Flex>
// );
// };









// more stylish


import {
  Box,
  Flex,
  Heading,
  Button,
  Separator,
  Text,
  Card,
} from "@radix-ui/themes";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

export const DashBoard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Active menu detection
  const active = location.pathname.includes("links") ? "links" : "shorten";

  // Sidebar link styles
  const linkStyle = (isActive) => ({
    padding: "12px 16px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: isActive ? "600" : "500",
    color: isActive ? "var(--accent-11)" : "var(--gray-12)",
    backgroundColor: isActive ? "var(--accent-4)" : "transparent",
    transition: "all 0.25s ease",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  });

  return (
    <Flex direction="column" style={{ minHeight: "100dvh" }}>
      {/* Header */}
      <Box asChild>
        <header
          style={{
            padding: "16px 32px",
            background: "linear-gradient(90deg, #2563eb, #3b82f6)",
            color: "white",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <Flex align="center" justify="between">
            <Heading size="6" weight="bold" style={{ letterSpacing: "-0.5px" }}>
              🔗 URL Shortener Pro
            </Heading>

            <Flex align="center" gap="4">
              <Text size="3">
                Welcome,{" "}
                <span style={{ fontWeight: 600 }}>
                  {localStorage.getItem("email")}
                </span>
              </Text>
              <Button
                variant="solid"
                color="red"
                style={{ borderRadius: "10px", padding: "8px 16px" }}
                onClick={() => {
                  localStorage.removeItem("email");
                  navigate("/login", { replace: true });
                }}
              >
                Logout
              </Button>
            </Flex>
          </Flex>
        </header>
      </Box>

      <Flex style={{ flex: 1 }}>
        {/* Sidebar */}
        <Box asChild>
          <aside
            style={{
              width: "260px",
              padding: "24px 20px",
              borderRight: "1px solid var(--gray-5)",
              backgroundColor: "var(--gray-2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Flex direction="column" gap="4">
              <Text size="2" color="gray" weight="medium" style={{ marginBottom: "8px" }}>
                MAIN MENU
              </Text>

              <div
                style={linkStyle(active === "shorten")}
                onClick={() => navigate("/dashboard/shorten")}
              >
                ➕ Generate Short URL
              </div>

              <div
                style={linkStyle(active === "links")}
                onClick={() => navigate("/dashboard/links")}
              >
                📑 My URLs
              </div>
            </Flex>

            {/* Footer in Sidebar */}
            <Box>
              <Separator size="4" style={{ margin: "16px 0" }} />
              <Text size="2" color="gray">
                © {new Date().getFullYear()} URL Shortener
              </Text>
            </Box>
          </aside>
        </Box>

        {/* Main Content */}
        <Box asChild>
          <main
            style={{
              flex: 1,
              padding: "32px",
              backgroundColor: "var(--gray-1)",
            }}
          >
            <Card
              size="4"
              style={{
                minHeight: "80vh",
                borderRadius: "16px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                background: "white",
                padding: "32px",
              }}
            >
              <Outlet />
            </Card>
          </main>
        </Box>
      </Flex>
    </Flex>
  );
};








