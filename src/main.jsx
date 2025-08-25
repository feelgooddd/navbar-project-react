import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Components/Navbar";
import "./css/index.css"; // global styles

createRoot(document.getElementById("root")).render(<Navbar />);
