import React from "react";

export default function StatsSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              100+
            </h2>
            <p className="leading-relaxed">Members</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              40+
            </h2>
            <p className="leading-relaxed">Projects</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              1K+
            </h2>
            <p className="leading-relaxed">Commits</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              10+
            </h2>
            <p className="leading-relaxed">Workshops</p>
          </div>
        </div>
      </div>
    </section>
  );
}
