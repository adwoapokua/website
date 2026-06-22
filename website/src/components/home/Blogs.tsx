import { blogs } from "@/data/blog";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "../common/Navbar";
import { Link } from "react-router";
import Footer from "../common/Footer";

function Blogs() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-6 lg:px-20 flex flex-col min-h-screen mx-auto max-w-6xl gap-5">
        <div className="text-secondary flex justify-between">
            <p className="text-2xl font-semibold">Blogs</p>
            <Link to="/"><span className="flex gap-2 justify-center items-center"><ArrowLeft size="20"/> <span className="text-sm font-semibold">Go Back</span></span> </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-secondary gap-6">
          {
              blogs.map((blog) => {
              return (
                  <div key={blog.id} className="flex flex-col w-full border shadow-xl">
                      <div className="h-56 overflow-hidden">
                        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover"/>
                      </div>
                      <div className="flex flex-col gap-3 p-5 flex-1">
                          <div className="font-bold text-sm">{blog.date}</div>
                          <div className="text-xl font-bold">{blog.title}</div>
                          <div>{blog.excerpt}</div>
                          <div className="mt-auto pt-3">
                            <Link to={`/blogs/${encodeURIComponent(blog.title)}`}>
                              <Button variant="outline">Read more <ArrowRight /></Button>
                            </Link>
                          </div>
                      </div>
                  </div>
              )
            })
          }
          </div>
        </main>  
        <Footer/>
    </>
  )
}

export default Blogs
