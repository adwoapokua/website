import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import Blogs from './components/home/Blogs.tsx';
import BlogDetails from './components/home/BlogDetails.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogTitle" element={<BlogDetails />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
