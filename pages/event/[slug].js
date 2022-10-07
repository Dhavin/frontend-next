import { useRouter } from "next/router";
import Head from "next/head";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import NavBar from "../../components/navbar";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Image from "next/image";

const Post = ({ event }) => {
  const router = useRouter();
  const client = createClient({
    projectId: "kg131sei",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  return (
    <>
      <>
        <Head>
          <meta charset="utf-8" />

          <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

          <meta
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"
          />

          <title>{event.title}</title>

          <meta property="og:title" content="TIE Events" />

          <meta property="og:locale" content="en_US" />

          <link rel="canonical" href="//post" />

          <meta property="og:url" content="//post" />

          <meta
            name="description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <Link
            crossorigin="anonymous"
            href="/assets/styles/main.min.css"
            media="screen"
            rel="stylesheet"
          />

          <script
            defer
            src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
          ></script>

          <script
            defer
            src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
          ></script>

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
          />
        </Head>
        <NavBar />

        <div>
          <div class="container py-6 md:py-10">
            <div class="mx-auto max-w-4xl ">
              <div class="">
                <h1 class="pt-5 pb-5 font-body text-3xl font-semibold text-[#0f1e26] sm:text-4xl md:text-5xl xl:text-6xl">
                  {event.title}
                </h1>
              </div>
              <div
                className="relative bg-cover bg-center bg-no-repeat py-8"
                style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}
              >
                <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

                <div className="container relative z-30 pt-5 pb-12  sm:pt-5 sm:pb-12  lg:pt-5 mt-10lg:pb-12">
                  <div className="flex flex-col items-center justify-center lg:flex-row">
                    <div className="max-w-xl pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                      <p className="font-body text-lg ¸text-white text-center  sm:text-left ">
                        Venue: {event.venue} - Timings: 6:30-8:30
                      </p>
                      <br></br>
                      <p className="font-body text-lg text-white text-center  sm:text-left ">
                        Fees: {event.fees} INR
                      </p>
                      <br></br>
                      <p className="font-body text-lg text-white text-center  sm:text-left ">
                        Start Date : {event.endDate}
                      </p>
                      <br></br>
                      <p className="font-body text-lg text-white text-center  sm:text-left ">
                        End Date : {event.endDate}
                      </p>
                      <br></br>
                      <a
                        href={event.paymentLink}
                        type="submit"
                        className="bg-[#fcbe44] p-2 rounded px-8 hover:bg-[#ad7b16] "
                      >
                        Click Here to Register... Limited seats only
                      </a>
                      <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                        <div className="flex items-center justify-center pl-0 sm:justify-center md:pl-1">
                          <p className="font-body text-lg text-white text-center  sm:text-left ">
                            Advance your skills in{" "}
                            <span className="text-[#fcbe44]">
                              {event.title}
                            </span>{" "}
                            and become industry ready.
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
              <div class="prose max-w-none pt-8">
                <PortableText
                  // Pass in block content straight from Sanity.io
                  content={event.content}
                  projectId="kg131sei"
                  dataset="production"
                  // Optionally override marks, decorators, blocks, etc. in a flat
                  // structure without doing any gymnastics
                  serializers={{
                    h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                    li: ({ children }) => (
                      <li className="special-list-item">{children}</li>
                    ),
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="bg-primary">
          <div class="container flex flex-col justify-between py-6 sm:flex-row">
            <p class="text-center font-body text-white md:text-left">
              © Copyright 2022. All right reserved, TakeItEasy Events.
            </p>
          </div>
        </div>
      </>{" "}
    </>
  );
};

export default Post;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const client = createClient({
    projectId: "kg131sei",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "event" && slug.current == '${slug}'][0]`;
  const event = await client.fetch(query);
  return {
    props: {
      event,
    },
  };
};
