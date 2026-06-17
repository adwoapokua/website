export type BlogPost = {
  id: number;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featured: boolean;
};

export const blogs: BlogPost[] = [
  {
    id: 1,
    image: "/about.jpg",
    date: "June 2, 2026",
    title: "Understanding System Design for Modern Applications",
    excerpt:
      "Learn the core concepts behind scalable and reliable software systems.",
    content:
      "System design is the process of defining a system's architecture, components, modules, interfaces, and data flow...",
    category: "System Design",
    tags: ["System Design", "Scalability", "Architecture"],
    featured: true,
  },
  {
    id: 2,
    image: "/image1.png",
    date: "May 28, 2026",
    title: "10 React Performance Optimization Techniques",
    excerpt:
      "Improve your React apps with memoization, lazy loading, and code splitting.",
    content:
      "As React applications grow, performance can become a challenge...",
    category: "React",
    tags: ["React", "Performance", "Frontend"],
    featured: false,
  },
  {
    id: 3,
    image: "/image2.png",
    date: "May 20, 2026",
    title: "Why TypeScript Makes Large Projects Easier",
    excerpt:
      "Explore how TypeScript improves maintainability and developer experience.",
    content:
      "TypeScript provides static typing, better tooling, and improved maintainability...",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Frontend"],
    featured: false,
  },
];