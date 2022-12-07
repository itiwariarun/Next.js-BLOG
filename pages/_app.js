import "../styles/globals.css";
import React from "react";
import * from "next/babel";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />

      <div className="py-10 mx-5 scroll-smooth	">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
