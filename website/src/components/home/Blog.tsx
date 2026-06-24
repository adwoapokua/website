import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import type { Blog } from "@/types/sanity";
import { client } from '../../lib/sanityClient'
import { urlFor } from '../../lib/urlFor'
import { useEffect, useState } from "react";

function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([])
    
  useEffect(() => {
    client.fetch<Blog[]>(`*[_type == "project"] | order(_createdAt desc)`)
      .then(data => setBlogs(data))
  }, [])
    const featuredBlog = blogs.find((blog) => blog.featured)!;
    const previousBlogs = blogs.filter((blog) => !blog.featured).slice(0,1);

  return (
    <section id="blog" className="min-h-screen flex flex-col gap-8 mx-10 mb-30 mt-10 lg:mb-15 lg:mt-20 lg:mx-20 scroll-mt-24">
      <div className="text-primary flex justify-between">
        <p className="text-3xl font-bold">Blog</p>
        <a href="/blogs" className="flex gap-2 items-center"> <span className="text-lg ">View All</span> <ArrowRight /> </a>
      </div>
      <div className="lg:flex lg:gap-5 grid gap-7">
        <div className="grid grid-cols-1 text-secondary">
          <div key={featuredBlog.id} className="flex flex-col lg:flex-row w-full h-145 lg:w-230 lg:h-120 border shadow-xl ">
              <div className="overflow-hidden h-70 lg:h-full lg:w-1/2 shrink-0">
                <img src={urlFor(featuredBlog.image).width(600).url()} alt={featuredBlog.title} className="w-full h-full object-cover"/>
              </div>
              <div className="flex flex-col gap-3 p-5 lg:justify-end lg:pb-15 lg:px-7">
                  <div className="font-bold">{`FEATURED - ${featuredBlog.date}`}</div>
                  <div className="text-xl font-bold">{featuredBlog.title}</div>
                  <div>{featuredBlog.excerpt}</div>
                  <Link to={`/blogs/${encodeURIComponent(featuredBlog.title)}`}><Button variant="outline">Read more <ArrowRight /></Button></Link>
              </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 text-secondary gap-8 lg:hidden">
          {
              previousBlogs.map((blog) => {
              return (
                  <div key={blog.id} className="flex flex-col w-full h-145 border shadow-xl">
                      <div className="overflow-hidden h-70">
                        <img src={urlFor(blog.image).width(600).url()} alt={blog.title} className="w-full h-full object-cover"/>
                      </div>
                      <div className="flex flex-col gap-3 p-5">
                          <div className="font-bold">{blog.date}</div>
                          <div className="text-xl font-bold">{blog.title}</div>
                          <div>{blog.excerpt}</div>
                          <Link to={`/blogs/${encodeURIComponent(blog.title)}`}><Button variant="outline">Read more <ArrowRight /></Button></Link>
                      </div>
                  </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Blog
