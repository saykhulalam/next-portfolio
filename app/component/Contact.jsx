"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Container from "./Container";
import Flex from "./Flex";
import Link from "next/link";
import Title from "./Title";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    service: Yup.string().required("Please select a service"),
    budget: Yup.string().required("Please select a budget"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <section id="Contact" className="bg-dark-bg py-16">
      <Container>
        <Title Name="CONTACT" className="mb-10" />
        <Flex className="xl:items-center xl:gap-48 xl:flex-row flex-col lg:flex-row lg:gap-10 gap-10">
          <div className="xl:w-[50%]">
            <h2 className="text-[30px] text-white font-inter font-bold mb-[20px]">
              Let&apos;s Talk
            </h2>
            <p className="text-white text-[15px] font-poppins">
              Have some big idea or brand to develop and need help? Then reach
              out we&apos;d love to hear about your project and provide help
            </p>
            <div className="mt-[54px] mb-[54px]">
              <h2 className="text-[30px] text-white font-inter font-bold mb-[20px]">
                Email
              </h2>
              <p className="text-white text-[15px] font-poppins">
                saykhulalam@gmail.com
              </p>
              <h2 className="text-white text-[15px] font-inter tracking-[1px] flex items-center gap-4 mt-[20px] ">
                <FaPhoneVolume />
                01966266966
              </h2>
            </div>
            <div className="mt-[54px]">
              <h2 className="text-[30px] text-white font-inter font-bold mb-[20px]">
                Socials
              </h2>
              <Link target="_blank" rel="noopener noreferrer" href="#">
                <p className=" mb-[20px] text-white text-[15px] font-poppins underline">
                  Instagram
                </p>
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="#">
                <p className=" mb-[20px] text-white text-[15px] font-poppins underline">
                  Twitter
                </p>
              </Link>
              <Link target="_blank" rel="noopener noreferrer" href="#">
                <p className=" mb-[20px] text-white text-[15px] font-poppins underline">
                  Facebook
                </p>
              </Link>
            </div>
          </div>
          <div className="xl:w-[50%]">
            <Formik
              initialValues={{
                name: "",
                email: "",
                service: "",
                budget: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-[28px]">
                    <h2 className="text-white text-[20px] font-poppins mb-[15px] select-none">
                      Name
                    </h2>
                    <Field
                      name="name"
                      type="text"
                      className="bg-gray-400 xl:w-[500px] w-[320px] sm:w-[500px] text-[20px] font-poppins pl-5 h-[46px]"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="mb-[28px]">
                    <h2 className="text-white text-[20px] font-poppins mb-[15px] select-none">
                      Email
                    </h2>
                    <Field
                      name="email"
                      type="email"
                      className="bg-gray-400 xl:w-[500px] w-[320px] sm:w-[500px] text-[20px] font-poppins pl-5 h-[46px]"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="mb-[28px]">
                    <h2 className="text-white text-[20px] font-poppins mb-[15px] select-none">
                      What service are you interested in
                    </h2>
                    <Field
                      name="service"
                      as="select"
                      className="bg-gray-400 xl:w-[500px] w-[320px] sm:w-[500px] text-[20px] font-poppins pl-5 pr-10 h-[46px] text-white"
                    >
                      <option value="">Select project type</option>
                      <option value="Single Page Application">
                        Single Page Application
                      </option>
                      <option value=" Multiple Page Application">
                        Multiple Page Application
                      </option>
                      <option value="E-Commerce Application">
                        E-Commerce Application
                      </option>
                    </Field>
                    <ErrorMessage
                      name="service"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="mb-[28px]">
                    <h2 className="text-white text-[20px] font-poppins mb-[15px] select-none">
                      Budget
                    </h2>
                    <Field
                      name="budget"
                      as="select"
                      className="bg-gray-400 xl:w-[500px] w-[320px] sm:w-[500px] text-[20px] font-poppins pl-5 pr-10 h-[46px] text-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="$150">Less than $150</option>
                      <option value="$200 - $300">$200 - $300</option>
                      <option value="$500 - $700">More than $500 - $700</option>
                    </Field>
                    <ErrorMessage
                      name="budget"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="mb-[28px]">
                    <h2 className="text-white text-[20px] font-poppins mb-[15px] select-none">
                      Message
                    </h2>
                    <Field
                      name="message"
                      as="textarea"
                      className="bg-gray-400 xl:w-[500px] w-[320px] sm:w-[500px] text-[20px] font-poppins pl-5 h-[165px] text-black pt-2"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="xl:w-[500px] w-[320px] sm:w-[500px] text-[20px] h-[56px] text-white bg-blue-600"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Contact;
