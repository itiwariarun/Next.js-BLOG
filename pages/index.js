import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
//SSR
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allblogs = await data.json();
  return {
    props: { allblogs },
  };
}
export default function Home(props) {
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
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    setblogs(allblogs);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Codder BLog</title>
        <meta
          name="description"
          content="Coder blog a simple blogging site tried by next js"
        />
        <link rel="icon" href="/b.webp" />
      </Head>

      <main className={`${styles.main} ${styles.main2}`}>
        <h1 className={styles.title}>The Code Blogger</h1>
        <Image
          className="rounded-3xl m-6 w-5/6 h-[30rem]"
          src="/pic1.webp"
          alt="code"
          width={2120}
          height={1080}
        />
        {/* in SSG image tag is replaced by img tag */}
        <p className={styles.description}>Get started by demo blog things</p>

        <div id="blog" className="px-4  rounded-xl xl:px-0 py-12">
          <div className="mx-auto container">
            <h1 className="text-left text-3xl lg:text-5xl tracking-wider dark:text-gray-300 text-gray-900">
              Latest from our Blog
            </h1>
            <div className="mt-12 lg:mt-24">
              <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6">
                <div className="">
                  {blogs.map((blogitem) => {
                    return (
                      blogitem.slug == "bruce-main" && (
                        <div
                          key={blogitem.slug}
                          className="md:sticky  mx-auto top-28"
                        >
                          <img
                            className="w-full"
                            src="blog(1).png"
                            alt="computer"
                          />
                          <div className="py-4 px-8 w-full flex justify-between bg-cyan-700">
                            <p className="text-sm text-white font-semibold tracking-wide">
                              {blogitem.title.length > 13
                                ? `${blogitem.title.substring(0, 5)}...`
                                : `${blogitem.title}`}{" "}
                              Wayne{" "}
                            </p>
                            <p className="text-sm text-white font-semibold tracking-wide">
                              13TH Oct, 2020
                            </p>
                          </div>
                          <div className="bg-white px-10 border-2 border-cyan-400 py-6  dark:bg-slate-300 font-semibold rounded-bl-3xl rounded-br-3xl">
                            <h1 className="text-4xl uppercase text-black font-bold tracking-wider">
                              {blogitem.slug}
                            </h1>
                            <p className="text-slate-800  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                              {blogitem.content.length > 350
                                ? `${blogitem.content.substring(0, 350)}...`
                                : `${blogitem.content}`}{" "}
                            </p>
                            <span className="w-full mt-4 hover:scale-80 hover:text-cyan-800 text-cyan-600 justify-end flex items-center cursor-pointer text-base tracking-wide">
                              <Link href={`blog/${blogitem.slug}`}>
                                Read more
                              </Link>
                            </span>
                            <div className="h-5 w-2" />
                          </div>
                        </div>
                      )
                    );
                  })}
                </div>
                <div className="grid lg:col-span-2 lg:grid-cols-2 gap-4">
                  {blogs.map((blogitem) => {
                    return (
                      blogitem.id < 9 &&
                      (blogitem.slug !== "bruce-main" ? (
                        <div key={blogitem.slug} className="gap-8">
                          <div>
                            <img
                              className="w-full"
                              src="blog(2).png"
                              alt="games"
                            />
                            <div className="py-2 px-4 w-full flex justify-between bg-cyan-700">
                              <p className="text-sm text-white font-semibold tracking-wide">
                                {blogitem.title.length > 13
                                  ? `${blogitem.title.substring(0, 5)}...`
                                  : `${blogitem.title}`}{" "}
                                Wayne{" "}
                              </p>
                              <p className="text-sm text-white font-semibold tracking-wide">
                                13TH Oct, 2020
                              </p>
                            </div>
                            <div className="bg-white px-3 h-96 border-2 border-cyan-400 dark:bg-slate-300 font-semibold lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                              <h1 className="text-lg text-black font-bold tracking-wider">
                                {blogitem.slug}
                              </h1>
                              <p className="text-slate-800 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                                {blogitem.content.length > 230
                                  ? `${blogitem.content.substring(0, 230)}.`
                                  : `${blogitem.content}`}{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : null)
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
