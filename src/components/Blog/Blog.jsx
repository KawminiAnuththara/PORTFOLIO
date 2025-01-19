import React from "react";
import "./Blog.css";
import {motion} from 'framer-motion'


const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

const Blog = () => {
  // Example Medium blog data
  const blogs = [
    {
      id: 1,
      title: "How RDBMS is More Efficient than DBMS?",
      content: "Discover why RDBMS is preferred over DBMS for complex applications.",
      author: "Kawmini Anuththara",
      date: "August 16, 2023",
      url: "https://medium.com/@anuththarakawmini/how-rdbms-is-more-efficient-than-dbms-c2ea3d5ac82d",
    },
    {
      id: 2,
      title: "10 Important Facts About Big Data",
      content: "Explore how Big Data is revolutionizing industries worldwide.",
      author: "Kawmini Anuththara",
      date: "August 22, 2023",
      url: "https://medium.com/@anuththarakawmini/10-importance-facts-about-big-data-9b02589efa3a",
    },
    {
      id: 3,
      title: "Keys Made Easy: Unlocking the Secrets of DBMS",
      content: "Simplify the concept of keys in database management systems.",
      author: "Kawmini Anuththara",
      date: "September 18, 2023",
      url: "https://medium.com/@anuththarakawmini/keys-made-easy-unlocking-the-secrets-of-dbms-6c4d74ecc2b1",
    },
    {
      id: 4,
      title: "Installing and Managing Node.js Versions with NVM",
      content: "A comprehensive guide to using NVM for Node.js management.",
      author: "Kawmini Anuththara",
      date: "December 15, 2024",
      url: "https://medium.com/@anuththarakawmini/installing-and-managing-node-js-versions-with-nvm-63d89f5c2fdc",
    },
  ];

  const AppText = {
    Skills: 'My ',
    Experties: 'Blogs', // Correct spelling of 'Expertise'
  };

  return (
    <motion.div className="blog-container" variants={variants} id="blogs">
      <h1 className="skills-title">
          {AppText.Skills}
          <span className="skills-subtitle">{AppText.Experties}</span>
        </h1>
      <motion.div className="blog-list" variants={variants}>
        {blogs.map((blog) => (
          <a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
            key={blog.id}
          >
            <h2 className="blog-card-title">{blog.title}</h2>
            <p className="blog-card-content">{blog.content}</p>
            <div className="blog-card-footer">
              <span className="blog-author">By: {blog.author}</span>
              <span className="blog-date">{blog.date}</span>
            </div>
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Blog;
