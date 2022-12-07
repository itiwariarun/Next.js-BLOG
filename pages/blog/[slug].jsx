import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";

//SSG
// run npm export after all this to creat export file or stic package

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: "bruce-main" } },
//       { params: { slug: "bruce-one" } },
//       { params: { slug: "bruce-two" } },
//     ],
//     fallback: true, //false or 'blocking'
//   };
// }
// export async function getStaticProps(context) {
//   const { slug } = context.params;
//   let currentblog = await fs.promises.readFile(`blogData/${slug}.json`,'utf-8');
//   return{
//     props:{
//       currentblog: JSON.parse(currentblog),//will be passed to the components as props
//     }
//   }
// }
//SSR
export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let currentblog = await data.json();
  return {
    props: { currentblog },
  };
}

const Slug = (props) => {
  //CSR
  // const router = useRouter();
  // const [blog, setblog] = useState([]);

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((result) => {
  //       setblog(result);
  //     });
  // }, [router.isReady]);
  //SSR
  const { currentblog } = props;
  const [blog, setblog] = useState([]);
  useEffect(() => {
    setblog(currentblog);
  }, []);
  return (
    <>
      <div className={styles.container}>
        <h1 className="uppercase text-center font-bold">{blog.slug}</h1>

        <main>
          <div id="blog" className="sm:px-4 rounded-xl xl:px-0 py-12">
            <div className="mx-auto container">
              <div className="">
                <div className="flex max-w-7xl">
                  <div>
                    <img
                      className="w-full max-h-[30rem]"
                      src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png"
                      alt="computer"
                    />
                    <div className="py-4 px-8 w-full flex justify-between bg-cyan-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                        {" "}
                        {blog.slug}
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 px-5 sm:px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                      <h2 className="text-4xl text-gray-900 dark:text-gray-100  font-semibold tracking-wider">
                        {blog.title} blog
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300  text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                        {blog.content}
                      </p>

                      <div className="h-5 w-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Slug;
