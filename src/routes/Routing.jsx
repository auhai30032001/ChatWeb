import React from "react";
import { Router, Route, Routes } from "react-router-dom";

import Document from "../components/Documents/DocumentPage";
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/document" element={<Document />} />
      </Routes>
    </Router>
  );
}

export default Routing;
