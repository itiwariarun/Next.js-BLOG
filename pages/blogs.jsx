import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/Link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//SSG
// export async function getStaticProps(context) {
//   let data = await fs.promises.readdir("blogData");
//   // data = data.slice(0, parseInt(req.query.count));
//   let myfile;
//   let allblogs = [];
//   let index;
//   for (index = 0; index < data.length; index++) {
//     const item = data[index];
//     myfile = await fs.promises.readFile("blogData/" + item, "utf-8");
//     allblogs.push(JSON.parse(myfile));
//   }
//   return {
//     props: { allblogs },//will be pass data to component as props
//   };
// }
//after all this run npm next export

//SSR
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allblogs = await data.json();
  return {
    props: { allblogs },
  };
}
const Blog = (props) => {
  //CSR
  // const [blogs, setblogs] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((result) => {
  //       setblogs(result);
  //     });
  // }, []);
  //SSR
  const { allblogs } = props;
  const [blogs, setblogs] = useState(allblogs);
  const [count, setcount] = useState(2);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
    setcount(count + 2);

    let data = await d.json();

    setblogs(data);
  };

  return (
    <>
      <div id="blog" className="px-4 rounded-xl xl:px-0 py-12">
        <div className="mx-auto container">
          <h1 className="text-center text-3xl lg:text-5xl tracking-wider dark:text-gray-300 text-gray-900">
            All blogs
          </h1>
          <div className="mt-12 lg:mt-24">
            <main className="grid max-w-4xl sm:grid-cols-2 mx-auto gap-8">
              {blogs.map((blogitem) => {
                return (
                  <div key={blogitem.slug}>
                    <img
                      className="max-h-80 w-full"
                      src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png"
                      alt="games"
                    />
                    <div className="py-2 px-4 w-full flex justify-between bg-cyan-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                        <span>{blogitem.title}</span> BLog
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-white px-3 border-2 border-cyan-400 lg:px-6 py-4 rounded-bl-3xl dark:bg-slate-300 font-semibold rounded-br-3xl">
                      <h1 className="text-lg text-black font-semibold tracking-wider">
                        {blogitem.author}
                      </h1>

                      <p className="text-gray-800 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                        {blogitem.content.length > 200
                          ? `${blogitem.content.substring(0, 200)}...`
                          : `${blogitem.content}`}{" "}
                      </p>

                      <span className="w-full mt-4 hover:scale-80 hover:text-cyan-900 text-cyan-700 justify-end flex items-center cursor-pointer text-base tracking-wide">
                        <Link href={`blog/${blogitem.slug}`}>Read more</Link>
                      </span>
                    </div>
                  </div>
                );
              })}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
