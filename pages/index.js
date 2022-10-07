import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";
import React, { useState, useEffect } from "react";

import Script from "next/script";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Home({ activeEvents, inactiveEvents }) {
  const client = createClient({
    projectId: "kg131sei",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  const [activeList, setActiveList] = useState([]);
  const [activeSearch, setActiveSearch] = useState("");

  const [inactiveList, setInActiveList] = useState([]);
  const [inactiveSearch, setInActiveSearch] = useState("");

  useEffect(() => {
    setActiveList(
      activeEvents.filter((user) =>
        user.title.toLowerCase().includes(activeSearch.toLowerCase())
      )
    );
  }, [activeSearch, activeEvents]);

  useEffect(() => {
    setInActiveList(
      inactiveEvents.filter((user) =>
        user.title.toLowerCase().includes(inactiveSearch.toLowerCase())
      )
    );
  }, [inactiveSearch, inactiveEvents]);

  return (
    <>
      <>
        <Script src="/assets/js/main.js"></Script>
        <Head>
          <meta charset="utf-8" />

          <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

          <meta
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"
          />

          <title>TakeItEasy Events</title>

          <meta property="og:title" content="Homepage | Atom Template" />

          <meta property="og:locale" content="en_US" />

          <link rel="canonical" href="//" />

          <meta property="og:url" content="//" />

          <meta
            name="description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

          <meta name="theme-color" content="#0f1e26" />

          <meta property="og:site_name" content="Atom Template" />

          <meta property="og:image" content="//assets/img/social.jpg" />

          <meta name="twitter:card" content="summary_large_image" />

          <meta name="twitter:site" content="@tailwindmade" />

        
          <script
            defer
            src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
          ></script>

          <script
            defer
            src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
          ></script>
        </Head>
        <NavBar />

        <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />
      </>
      <>
        <div>
          <div className="relative bg-cover bg-center bg-no-repeat py-8">
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>
            <div className="container relative z-30 pt-5 pb-12  sm:pt-5 sm:pb-12  lg:pt-5 mt-10lg:pb-12">
                  <div className="flex flex-col items-center justify-center lg:flex-row">
                    <div className="max-w-xl pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                    <h1 className="text-center font-header text-4xl text-white sm:text-center sm:text-5xl md:text-6xl">
                    Teaching tomorrow's skills today...
                  </h1>
                      <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                        <div className="flex items-center justify-center pl-0 sm:justify-center md:pl-1">
                        <p className="font-body text-lg text-white text-center  sm:text-center ">
                      Advance your skills with Internships, Workshops, and
                      Certifications from world-class industry experts and
                      companies.
                    </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                    <Image
                        src="/assets/img/webinar-animate.svg"
                        alt="development icon"
                        layout="responsive"
                        width={700}
                        height={475}
                      />
                    </div>
                  </div>
                </div>
          </div>

          <div className="bg-grey-50" id="event">
            <div className="container py-6 md:py-6">
              <form
                class="flex items-center"
                onChange={(e) => {
                  setActiveSearch(e.target.value);
                }}
              >
                <label for="simple-search" class="sr-only">
                  Search Event...
                </label>
                <div class="relative w-full">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    class="bg-[#0f1e26] border border-[#0f1e26] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-[#0f1e26] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Event..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="p-2.5 ml-2 text-sm font-medium text-blue-700 bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#fcbe44] dark:hover:bg-[#fcbe44] dark:focus:bg-[#fcbe44]"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </form>
              {/* <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                I also like to write
              </h2>
              <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Check out my latest posts!
              </h4> */}
              <div className="rounded-3xl">
                <h3 className="text-center my-5 font-header text-2xl text-[#0f1e26] sm:text-left sm:text-3xl md:text-3xl">
                  Ongoing and Upcoming events
                </h3>
                <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-6 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10 ">
                  {activeList.map((item) => {
                    return (
                      <Link
                        key={item.slug.current}
                        href={"/event/" + item.slug.current}
                        className="shadow"
                      >
                        <div>
                          <div
                            style={{
                              backgroundImage: `url(${
                                builder.image(item.picture).width(1500).url() ||
                                "/assets/img/post-01.png"
                              })`,
                            }}
                            className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72 rounded-3xl"
                          >
                            <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                            <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 bg-blue-800 px-6 py-2 text-center font-body text-sm font-bold  text-white md:text-base cursor-pointer">
                              View More
                            </span>
                          </div>
                          <div className="bg-white py-6 px-5 xl:py-8">
                            <div>
                              <span className="block font-body text-lg font-semibold text-black">
                                {" "}
                                {item.title}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-grey-50" id="event">
            <div className="container py-6 md:py-6">
              {/* <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                I also like to write
              </h2>
              <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Check out my latest posts!
              </h4> */}
              <div className="rounded-3xl">
                <h3 className="text-center my-5 font-header text-2xl text-[#0f1e26] sm:text-left sm:text-3xl md:text-3xl">
                  Past events
                </h3>
                <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-6 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10 ">
                  {inactiveList.map((item) => {
                    return (
                      <Link
                        key={item.slug.current}
                        href={"/event/" + item.slug.current}
                        className="shadow"
                      >
                        <div>
                          <div
                            style={{
                              backgroundImage: `url(${
                                builder.image(item.picture).width(1500).url() ||
                                "/assets/img/post-01.png"
                              })`,
                            }}
                            className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72 rounded-3xl"
                          >
                            <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                            <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 bg-blue-800 px-6 py-2 text-center font-body text-sm font-bold  text-white md:text-base cursor-pointer">
                              View More
                            </span>
                          </div>
                          <div className="bg-white py-6 px-5 xl:py-8">
                            <div>
                              <span className="block font-body text-lg font-semibold text-black">
                                {" "}
                                {item.title}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#11222b]">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              © Copyright 2022. All right reserved, TakeItEasy Events.
            </p>
          </div>
        </div>
      </>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "kg131sei",
    dataset: "production",
    useCdn: false,
  });
  const query1 = `*[_type == "event" && dateTime(startDate) > dateTime(now())]`;
  const activeEvents = await client.fetch(query1);

  const query2 = `*[_type == "event" && dateTime(startDate) < dateTime(now())]`;
  const inactiveEvents = await client.fetch(query2);

  return {
    props: {
      activeEvents,
      inactiveEvents,
    },
  };
}
