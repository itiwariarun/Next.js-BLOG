import { useEffect, Fragment, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ArrowTopRightOnSquareIcon,
  LinkrrowTopRightOnSquareIcon,
} from "@heroicons/react/20/solid";

const Contact = () => {
  // const [user, setUser] = useState([]);

  // const fetchData = () => {
  //   fetch("https://randomuser.me/api/?results=1")
  //     .then((response) => response.json())
  //     .then((data) => setUser(data));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [company, setcompany] = useState("");
  const [reference, setreference] = useState("");
  const [desc, setdesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, company, desc, reference };
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        alert("Thanks for Support!");
        setphone("");
        setname("");
        setdesc("");
        setcompany("");
        setreference("");
        setemail("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "company") {
      setcompany(e.target.value);
    } else if (e.target.name == "reference") {
      setreference(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    }
  };
  return (
    <div className="bg-slate-300 mt-32 dark:bg-gray-800 -mx-5  ">
      <Head>
        <title>Contect as Blogger</title>
        <meta
          name="description"
          content="A nyc contact form with file system post"
        />
        <link rel="icon" href="/pic1.webp" />
      </Head>

      <main className="">
        {/* Header */}
        <div className="bg-gray-500 z-10 relative -top-32 rounded-3xl  dark:bg-gray-600 mx-10 py-24 sm:py-32">
          <div className="mx-auto max-w-md pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-center text-4xl font-bold leading-10 tracking-tight dark:text-gray-200 text-gray-900  sm:text-5xl sm:leading-none lg:text-6xl">
              Get in touch
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-normal dark:text-gray-300 text-gray-50 dark:bg-gray-5000">
              Convallis feugiat et aliquet pellentesque dictum nisi, velit.
              Egestas fermentum adipiscing risus quam ac consectetur mattis
              turpis tristique.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative -top-16 bg-slate-200 dark:bg-gray-800 ">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 rounded-xl w-full object-cover lg:absolute lg:h-full"
                src="/b.webp"
                alt=""
              />
            </div>
          </div>
          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
            <div className="lg:pr-8">
              <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Let's work together
                </h2>
                <p className="mt-4 text-md  p-3 rounded-xl   text-gray-50 bg-gray-600 sm:mt-3">
                  We’d love to hear from you! Send us a message using the form
                  opposite, or email us. We’d love to hear from you! Send us a
                  message using the form opposite, or email us.
                </p>
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-medium dark:text-gray-200 text-gray-700"
                    >
                      Full Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        value={name}
                        onChange={handleChange}
                        required
                        className=" block w-full text-black rounded-md border-gray-300 bg-gray-400 dark:bg-gray-100 p-1.5 dark:border-gray-50 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium dark:text-gray-200 text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        autoComplete="email"
                        className="block w-full text-black rounded-md border-gray-300 dark:border-gray-50 shadow-sm focus:border-cyan-500 bg-gray-400 dark:bg-gray-100 p-1.5 focus:ring-cyan-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium dark:text-gray-200 text-gray-780"
                      >
                        Phone
                      </label>
                      <span
                        id="phone"
                        className="text-sm dark:text-gray-300 text-gray-500 dark:bg-gray-500 rounded-lg p-0.5"
                      >
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        aria-describedby="phone"
                        className="block w-full  text-black rounded-md border-gray-300 bg-gray-400 dark:bg-gray-100 p-1.5 dark:border-gray-50 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium dark:text-gray-200 text-gray-700"
                    >
                      Company
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={company}
                        onChange={handleChange}
                        autoComplete="organization"
                        className="block w-full  text-black rounded-md border-gray-300 bg-gray-400 dark:bg-gray-100 p-1.5 dark:border-gray-50 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="desc"
                        className="block text-sm font-medium dark:text-gray-200 text-gray-800"
                      >
                        How can we help you?
                      </label>
                      <span
                        id="how-can-we-help-description"
                        className="text-sm dark:text-gray-300  text-gray-500 dark:bg-gray-5000"
                      >
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="desc"
                        required
                        value={desc}
                        onChange={handleChange}
                        name="desc"
                        aria-describedby="how-can-we-help-description"
                        rows={4}
                        className="block w-full  text-black rounded-md bg-gray-400 dark:bg-gray-100 p-1.5 border-gray-300 dark:border-gray-50 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="reference"
                      className="block text-sm font-medium dark:text-gray-200 text-gray-700"
                    >
                      How did you hear about us?
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="reference"
                        value={reference}
                        onChange={handleChange}
                        id="reference"
                        className="block w-full  text-black bg-gray-400 dark:bg-gray-100 p-1.5 rounded-md dark:border-gray-50 border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="text-right sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-grap-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-cyan-400  dark:bg-cyan-800 ">
          <div className="mx-auto max-w-md py-16 px-4 text-center sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="block dark:text-white text-slate-600">
                Let's make this platform
              </span>
              <span className="block dark:text-gray-300 text-cyan-900">
                for everyone.
              </span>
            </h2>
            <a
              href="#"
              className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white dark:bg-gray-800 py-3 px-5 text-base font-medium dark:text-gray-200 text-cyan-600 shadow-md hover:text-gray-200 hover:bg-cyan-700  sm:w-auto"
            >
              <span>See how we solve problems</span>
              <ArrowTopRightOnSquareIcon
                className="ml-3 h-5 w-5 flex-shrink-0 dark:text-gray-200 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
// (
//     <div className={`${styles.title} ${styles.scrn}`}>
//       Contact
//       {Object.keys(user).length > 0 ? (
//         <div style={{ padding: "40px" }}>
//           <h5>Customer data</h5>
//           <p>Name: {user.results[0].name.first}</p>
//           <img src={user.results[0].picture.large} alt="" />
//         </div>
//       ) : (
//         <h1>Data pending...</h1>
//       )}
//     </div>
//   );
