import React from "react";
const BlogCard = () => {
  return (
    <a
      href="https://splitbee.io/"
      target="_blank"
      className="rounded-lg shadow bg-white cursor-pointer overflow-hidden transition-all duration-200 group hover:shadow-lg"
      style={{
        filter: "grayscale(0%)",
        transform: "none",
        opacity: "1",
      }}
    >
      <div
        className="h-32 w-full flex justify-center items-center transition-all duration-200 transform"
        style={{
          backgroundColor: "#FFF0D3",
        }}
      >
        {/* <img
          className="w-16 transition-transform duration-500 transform group-hover:scale-110"
          src="/logo.svg"
        /> */}
      </div>
      <div className="p-4">
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-gray-800">
            What is FaaS? Function as a Service explained
          </h3>
        </div>
        <div className="mt-3 text-sm text-gray-700">
          Function as a Service, or FaaS, is a subset of serverless computing
          that's focused on event-driven triggers. Learn the benefits of FaaS
          and when it may be the right choice for you.
        </div>
      </div>
    </a>
  );
};

export default function BlogSection() {
  return (
    <div className="mt-20 py-16 px-4 sm:py-20">
      <div className="flex justify-center">
        <div className="rounded-3xl bg-slate-100 lg:grid-cols-2 xl:gap-x-28 xl:p-20 w-full mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-2 block text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-purple-800">
              From blogs
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-slate-800">
                Learn from others
              </h2>
            </div>
            <div>
              <p className="leading-relaxed text-slate-500 sm:leading-relaxed">
                We covers every stacks from React to Flutter all contributed by
                our beloved members. It contains guide, tips, tricks, interview
                experiences, news and many more.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-12">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
}
