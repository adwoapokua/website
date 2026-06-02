import Footer from "./components/common/Footer"
import Navbar from "./components/common/Navbar"
import About from "./components/home/About"
import Blog from "./components/home/Blog"
import Hero from "./components/home/Hero"
import Project from "./components/home/Project"

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Hero></Hero>

      <About></About>

      <Blog></Blog>

      <Project></Project>
      
      <Footer></Footer>
    </>
  )
}

export default App
