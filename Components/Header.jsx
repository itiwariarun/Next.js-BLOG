import Link from "next/link";
import { useState, useCallback } from "react";
import styles from "../styles/Home.module.css";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="flex z-50">
      <div className="fixed w-full hidden sm:block z-30 py-2 px-7 bg-white/60 backdrop-blur-lg ">
        <nav className=" pt-1 z-40  h-[2.7rem]   hidden sm:block ">
          <div className="flex justify-between ">
            <div>
              <h2 className="font-extrabold text-3xl text-cyan-700">
                <Link href="/">Code Blogger</Link>
              </h2>
            </div>
            <div>
              <div className="py-2 ">
                <ul className=" flex space-x-3 font-bold text-slate-800  ">
                  <li className="hover:text-cyan-600 focus:outline-none  focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2">
                    <div className="hover:border-b-4 rounded ease-in-out delay-200  duration-200 pb-0.5 border-cyan-800">
                      <span
                        className={
                          router.pathname == "/"
                            ? "text-cyan-900 border-cyan-700 border-y-2 hover:border-y-0"
                            : ""
                        }
                      >
                        <Link
                          href="/"
                          className={
                            router.pathname == "/"
                              ? "text-cyan-900 border-cyan-700 border-y-2 hover:border-y-0"
                              : ""
                          }
                        >
                          Home
                        </Link>
                      </span>
                    </div>
                  </li>
                  <li className="hover:text-cyan-600 focus:outline-none  focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2">
                    <div className="hover:border-b-4 rounded ease-in-out delay-200  duration-200 pb-0.5 border-cyan-800">
                      <span
                        className={
                          router.pathname == "/blogs"
                            ? "text-cyan-900 border-cyan-700 border-y-2 hover:border-y-0"
                            : ""
                        }
                      >
                        <Link href="/blogs">Blog</Link>
                      </span>
                    </div>
                  </li>
                  <li className="hover:text-cyan-600 focus:outline-none  focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2">
                    <div className="hover:border-b-4 rounded ease-in-out delay-200  duration-200 pb-0.5 border-cyan-800">
                      <span
                        className={
                          router.pathname == "/contact"
                            ? "text-cyan-900 border-cyan-700 border-y-2 hover:border-y-0"
                            : ""
                        }
                      >
                        <Link href="/contact">Contact</Link>
                      </span>
                    </div>
                  </li>
                  <li className="hover:text-cyan-600 focus:outline-none  focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2">
                    <div className="hover:border-b-4 rounded ease-in-out delay-200  duration-200 pb-0.5 border-cyan-800">
                      <span
                        className={
                          router.pathname == "/about"
                            ? "text-cyan-900 border-cyan-700 border-y-2 hover:border-y-0"
                            : ""
                        }
                      >
                        <Link href="/about">About Us</Link>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <nav className="  w-full bg-white/60 z-40 backdrop-blur-lg sm:hidden block py-1   fixed">
        <div className="pt-1  flex  delay-500">
          <div className=" text-cyan-900 ">
            <Hamburger toggled={isOpen} toggle={setisOpen} />
          </div>

          {isOpen ? (
            <div className="fixed mt-[4.08rem]  bg-black/90 backdrop-invert	  ">
              <div className="h-screen flex justify-end  w-screen">
                <ul className="z-50  p-16 font-bold text-right  text-[1.5rem] w-5/6 text-white">
                  <li className="hover:text-cyan-600 focus:outline-none  focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2">
                    <div className="hover:border-b-4 rounded  ease-in-out delay-200  duration-200  pb-0.5 border-cyan-800">
                      <span
                        className={
                          router.pathname == "/"
                            ? "text-cyan-900 border-cyan-700 border-y-2 hover:border-y-0"
                            : ""
                        }
                      >
                        <Link href="/">Home</Link>
                      </span>
                    </div>
                  </li>
                  <li className="hover:text-cyan-600 focus:outline-none  focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2">
                    <div className="hover:border-b-4 rounded  ease-in-out delay-200  duration-200  pb-0.5 border-cyan-800">
                      <span
                        className={
                          router.pathname == "/blogs"
                            ? "text-cyan-900 border-cyan-700 border-y-2 hover:border-y-0"
                            : ""
                        }
                      >
                        <Link href="/blogs">Blog</Link>
                      </span>
                    </div>
                  </li>
                  <li className="hover:text-cyan-600 focus:outline-none  focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2">
                    <div className="hover:border-b-4 rounded  ease-in-out delay-200  duration-200  pb-0.5 border-cyan-800">
                      <span
                        className={
                          router.pathname == "/contact"
                            ? "text-cyan-900 border-cyan-700 border-y-2 hover:border-y-0"
                            : ""
                        }
                      >
                        <Link href="/contact">Contact</Link>
                      </span>
                    </div>
                  </li>
                  <li className="hover:text-cyan-600 focus:outline-none  focus:ring-2 focus:ring-cyan-800 focus:ring-offset-2">
                    <div className="hover:border-b-4 rounded  ease-in-out delay-200  duration-200  pb-0.5 border-cyan-800">
                      <span
                        className={
                          router.pathname == "/about"
                            ? "text-cyan-900 border-cyan-700 border-y-2 hover:border-y-0"
                            : ""
                        }
                      >
                        {" "}
                        <Link href="/about">About Us</Link>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="flex px-3 ">
            <h2 className="font-extrabold  py-1 text-3xl text-cyan-700">
              <Link href="/">Code Blogger</Link>
            </h2>
          </div>
        </div>
      </nav>
      <div className="mt-12 z-50 py-4">
        <hr className=" fixed border-t-[0.35rem] border-cyan-700 w-full" />
      </div>
    </div>
  );
};

export default Header;
