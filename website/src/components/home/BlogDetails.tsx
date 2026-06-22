import { Link, useParams } from "react-router";
import { blogs } from "@/data/blog";
import Navbar from "../common/Navbar";
import { ArrowLeftIcon } from "lucide-react";

function BlogDetails() {
  const { blogTitle } = useParams();
  const decoded = decodeURIComponent(blogTitle ?? "");
  const blog = blogs.find((b) => b.title === decoded);

  if (!blog) return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center gap-4 text-primary">
        <p className="text-xl">Blog not found.</p>
        <Link to="/blogs" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <ArrowLeftIcon size={18} /> Back to Blogs
        </Link>
      </main>
    </>
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-24 lg:pb-40 flex flex-col gap-6 text-primary">
        <Link to="/blogs" className="flex items-center gap-2 w-fit hover:opacity-70 transition-opacity">
          <ArrowLeftIcon className="size-5" /> Go Back
        </Link>

        <div className="flex flex-col gap-4">
          <p className="text-sm text-secondary">{blog.date}</p>
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">{blog.title}</h1>

          <div className="w-full h-56 sm:h-72 lg:h-96 overflow-hidden rounded-2xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full text-secondary text-sm sm:text-base leading-relaxed flex flex-col gap-4">
            {blog.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogDetails;
