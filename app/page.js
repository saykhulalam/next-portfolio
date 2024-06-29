"use client";
import About from "./component/About";
import Banner from "./component/Banner";
import Projects from "./component/Projects";
import Services from "./component/Services";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Scroll from "./component/Scroll";
import { useState, useEffect } from "react";
import FristLoading from "./component/FristLoading";
import MessengerCustomerChat from "react-messenger-customer-chat";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // এখানে আপনি API কল বা অন্য কোন লোডিং এর কাজ করতে পারেন
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // ৩ সেকেন্ড পরে লোডিং শেষ হবে

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <FristLoading />;
  }
  return (
    <main>
      <Banner />
      <Skills />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Scroll />
      <MessengerCustomerChat appId="<1244142530298418>" />
    </main>
  );
}
