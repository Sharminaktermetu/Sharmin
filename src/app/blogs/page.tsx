"use client";
import Image from "next/image";

const blogs = [
    {
      id: 1,
      title: "Exploring the Power of React",
      description:
        "Discover the flexibility and power of React.js in building dynamic web applications.",
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "November 25, 2024",
      link: "/blog/react-power",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      description:
        "Learn how to use Tailwind CSS to design modern, responsive, and scalable UIs efficiently.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "December 1, 2024",
      link: "/blog/master-tailwind",
    },
    {
      id: 3,
      title: "Next.js: The Future of Web Development",
      description:
        "Unleashing the potential of Next.js for building performant and SEO-friendly websites.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "December 2, 2024",
      link: "/blog/nextjs-future",
    },
  ];
  
  
  
const BlogPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      <h1 className="text-4xl lg:text-6xl font-bold text-center text-slate-100 mb-12">
        Blog Posts
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:p-0 p-12">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-[200px] overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-400 mb-2">{blog.date}</p>
              <h2 className="text-2xl font-semibold text-slate-100 mb-3 group-hover:text-blue-500 transition-colors">
                {blog.title}
              </h2>
              <p className="text-slate-300 text-sm mb-4">{blog.description}</p>
              <a
                href='#'
                className="text-blue-400 hover:text-blue-600 transition-colors"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
