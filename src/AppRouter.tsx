import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>1</h1>} />
        <Route path="landing" element={<h1>2</h1>} />
        <Route path="home" element={<h1>3</h1>} />
        <Route path="dashboard" element={<h1>4</h1>} />
        <Route path="analytics" element={<h1>5</h1>} />
        <Route path="admin" element={<h1>6</h1>} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  );
}
