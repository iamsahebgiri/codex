import React from "react";
import { Icon } from "@iconify/react";
import peopleCommunity20Filled from "@iconify/icons-fluent/people-community-20-filled";
import presenter20Filled from "@iconify/icons-fluent/presenter-20-filled";
import chess20Filled from "@iconify/icons-fluent/chess-20-filled";
import beach20Filled from "@iconify/icons-fluent/beach-20-filled";

export default function FeaturesSection() {
  const features = [
    {
      title: "Active Community",
      description:
        "We are 100+ quality coders always one message away to solve your doubts.",
      icon: peopleCommunity20Filled,
      color: "text-teal-600",
    },
    {
      title: "Best coding environment",
      description:
        "We are 100+ quality coders always one message away to solve your doubts.",
      icon: beach20Filled,
      color: "text-indigo-600",
    },
    {
      title: "Regular Workshops",
      description:
        "We are 100+ quality coders always one message away to solve your doubts.",
      icon: presenter20Filled,
      color: "text-purple-600",
    },
    {
      title: "Great minds",
      description:
        "We are 100+ quality coders always one message away to solve your doubts.",
      icon: chess20Filled,
      color: "text-sky-600",
    },
  ];
  return (
    <section className="relative bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)] py-24 sm:py-40">
      <div className="container max-w-7xl mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 max-w-[620px] lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600">
                Why codex
              </span>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-[42px] text-white">
                Coding club of ITER
              </h2>
              <p className="text-lg leading-relaxed text-slate-400 sm:text-xl sm:leading-relaxed">
                There are many clubs who keep adding members, playing number
                games, we pick the best of best coders.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap ">
          {features.map(({ title, description, icon, color }) => (
            <div className="w-full px-4 md:w-1/2 lg:w-1/4" key={title}>
              <div className="group mb-12">
                <div className="mb-6">
                  <Icon icon={icon} className={`h-8 w-8 text-slate-500`} />
                </div>
                <h4 className="mb-3 text-xl font-bold text-slate-200">
                  {title}
                </h4>
                <p className="mb-8 text-body-color lg:mb-11 text-slate-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
