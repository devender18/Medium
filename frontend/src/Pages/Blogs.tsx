import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";

export function Blogs() {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center items-center">
        <div className="flex-col justify-center items-center w-10/12">
          <div className="flex justify-center items-center">
            <BlogCard
              authorName="Devender"
              publishedDate="Oct 21,2024"
              title="how to become a full stack developer"
              content="Becoming a full stack developer requires mastering both front-end and back-end development, allowing you to handle all aspects of a web application. Start by learning front-end technologies like HTML, CSS, and JavaScript, which are essential for building user interfaces. Dive into popular frameworks like React, Angular, or Vue.js for more efficient development. On the back-end, learn server-side languages such as Node.js, Python, or Ruby, and familiarize yourself with databases like MongoDB, MySQL, or PostgreSQL for data management. Understanding version control (Git) and tools for continuous integration and deployment will also enhance your skills. Additionally, practice building full applications, integrating APIs, handling authentication, and optimizing performance. Constantly learning and adapting to new technologies, along with working on real projects, will help you grow as a full stack developer."
            />
          </div>
          <div className="flex justify-center items-center">
            <BlogCard
              authorName="Devender"
              publishedDate="Oct 21,2024"
              title="how to become a full stack developer"
              content="Becoming a full stack developer requires mastering both front-end and back-end development, allowing you to handle all aspects of a web application. Start by learning front-end technologies like HTML, CSS, and JavaScript, which are essential for building user interfaces. Dive into popular frameworks like React, Angular, or Vue.js for more efficient development. On the back-end, learn server-side languages such as Node.js, Python, or Ruby, and familiarize yourself with databases like MongoDB, MySQL, or PostgreSQL for data management. Understanding version control (Git) and tools for continuous integration and deployment will also enhance your skills. Additionally, practice building full applications, integrating APIs, handling authentication, and optimizing performance. Constantly learning and adapting to new technologies, along with working on real projects, will help you grow as a full stack developer."
            />
          </div>
          <div className="flex justify-center items-center">
            <BlogCard
              authorName="Devender"
              publishedDate="Oct 21,2024"
              title="how to become a full stack developer"
              content="Becoming a full stack developer requires mastering both front-end and back-end development, allowing you to handle all aspects of a web application. Start by learning front-end technologies like HTML, CSS, and JavaScript, which are essential for building user interfaces. Dive into popular frameworks like React, Angular, or Vue.js for more efficient development. On the back-end, learn server-side languages such as Node.js, Python, or Ruby, and familiarize yourself with databases like MongoDB, MySQL, or PostgreSQL for data management. Understanding version control (Git) and tools for continuous integration and deployment will also enhance your skills. Additionally, practice building full applications, integrating APIs, handling authentication, and optimizing performance. Constantly learning and adapting to new technologies, along with working on real projects, will help you grow as a full stack developer."
            />
          </div>
          <div className="flex justify-center items-center">
            <BlogCard
              authorName="Devender"
              publishedDate="Oct 21,2024"
              title="how to become a full stack developer"
              content="Becoming a full stack developer requires mastering both front-end and back-end development, allowing you to handle all aspects of a web application. Start by learning front-end technologies like HTML, CSS, and JavaScript, which are essential for building user interfaces. Dive into popular frameworks like React, Angular, or Vue.js for more efficient development. On the back-end, learn server-side languages such as Node.js, Python, or Ruby, and familiarize yourself with databases like MongoDB, MySQL, or PostgreSQL for data management. Understanding version control (Git) and tools for continuous integration and deployment will also enhance your skills. Additionally, practice building full applications, integrating APIs, handling authentication, and optimizing performance. Constantly learning and adapting to new technologies, along with working on real projects, will help you grow as a full stack developer."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
