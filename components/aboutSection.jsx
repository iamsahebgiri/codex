import React from "react";

const BlogCard = () => {
  return (
    <a
      href="https://splitbee.io/"
      target="_blank"
      class="rounded-lg shadow bg-white cursor-pointer overflow-hidden transition-all duration-200 group hover:shadow-lg"
      style={{
        filter: "grayscale(0%)",
        transform: "none",
        opacity: "1",
      }}
    >
      <div
        class="h-32 w-full flex justify-center items-center transition-all duration-200 transform"
        style={{
          backgroundColor: "#FFF0D3",
        }}
      >
        {/* <img
          class="w-16 transition-transform duration-500 transform group-hover:scale-110"
          src="/logo.svg"
        /> */}
      </div>
      <div class="p-4">
        <div class="flex items-center">
          <h3 class="text-lg font-semibold text-gray-800">
            What is FaaS? Function as a Service explained
          </h3>
        </div>
        <div class="mt-3 text-sm text-gray-700">
          Function as a Service, or FaaS, is a subset of serverless computing
          that’s focused on event-driven triggers. Learn the benefits of FaaS
          and when it may be the right choice for you.
        </div>
      </div>
    </a>
  );
};

export default function AboutSection() {
  return (
    <section className="overflow-hidden py-24 sm:py-40">
      <div className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 mx-auto">
        <div className="relative">
          <div className="pointer-events-none absolute -top-4 right-full -mr-14 hidden w-1/2 origin-top-right rotate-12 xl:block">
            <div className="aspect-w-4 aspect-h-5">
              <div>
                <div
                  className="absolute top-0 left-[-200%] -right-1/4 h-px opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(148, 163, 184, 0) 33%, rgb(148, 163, 184) 80%, rgba(148, 163, 184, 0) 100%)",
                  }}
                ></div>
                <div
                  className="absolute top-[-125%] right-0 -bottom-1/3 w-px opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(closest-corner at 50% 66%, rgb(148, 163, 184), rgba(148, 163, 184, 0))",
                  }}
                ></div>
                <div
                  className="absolute bottom-0 left-[-200%] -right-1/2 h-px opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(148, 163, 184, 0) 33%, rgb(148, 163, 184) 80%, rgba(148, 163, 184, 0) 100%)",
                  }}
                ></div>
                <div
                  className="absolute top-[-100%] left-0 -bottom-1/2 w-px opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(closest-corner at 50% 66%, rgb(148, 163, 184), rgba(148, 163, 184, 0))",
                  }}
                ></div>
                <div className="absolute top-[-0.5px] left-0 h-[2px] w-28 -translate-x-1/3 rounded-full bg-gradient-to-r from-blue-500"></div>
                <div className="absolute bottom-[-0.5px] right-0 h-[2px] w-28 translate-x-4 rounded-full bg-gradient-to-l from-violet-400"></div>
              </div>
            </div>
          </div>
          <h2 className="font-semibold leading-snug text-5xl leading-[1.2] tracking-tighter sm:leading-[4.75rem] text-center  text-slate-900">
            “ We code, we explore. ”
          </h2>
          <div className="space-y-8 text-lg leading-8 mt-16">
            <p>
              We here at codex are identified as coders only because we know
              what it takes to start from scratch and keep on scratching till we
              achieve our goals.
            </p>
            <p>
              We have seen our aluminis sharpen their skills, work in teams,
              brainstorm ideas and get placed in fortune companies. Our goal is
              not to teach anyone rather, learn together.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
}
