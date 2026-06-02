import { blogs } from "@/data/blog";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

function Blog() {
    const featuredBlog = blogs.find((blog) => blog.featured)!;
    const previousBlogs = blogs.filter((blog) => !blog.featured).slice(0,1);

  return (
    <section id="#blog" className="min-h-screen flex flex-col gap-8 px-10 mb-30">
      <div className="text-primary flex justify-between">
        <p className="text-3xl font-bold">Blog</p>
        <a href="/blogs" className="flex gap-2 items-center"> <span className="text-lg ">View All</span> <ArrowRight /> </a>
      </div>
      <div className="grid col-span-1 text-secondary">
        <div key={featuredBlog.id} className="flex flex-col w-80 h-145 border shadow-xl ">
            <div><img src={featuredBlog.image} alt={featuredBlog.title} className="w-full h-70 mb-2"/></div>
            <div className="flex flex-col gap-3 p-5">
                <div className="font-bold">{`FEATURED - ${featuredBlog.date}`}</div>
                <div className="text-xl font-bold">{featuredBlog.title}</div>
                <div>{featuredBlog.excerpt}</div>
                <div><Button variant="outline">Read more <ArrowRight /></Button></div>
            </div>
        </div>
      </div>
      <div className="grid col-span-1 text-secondary gap-8">
        {
            previousBlogs.map((blog) => {
            return (
                <div key={blog.id} className="flex flex-col w-80 h-145 border shadow-xl">
                    <div><img src={blog.image} alt={blog.title} className="w-full h-70 mb-2"/></div>
                    <div className="flex flex-col gap-3 p-5">
                        <div className="font-bold">{blog.date}</div>
                        <div className="text-xl font-bold">{blog.title}</div>
                        <div>{blog.excerpt}</div>
                        <div><Button variant="outline">Read more <ArrowRight /></Button></div>
                    </div>
                </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Blog
