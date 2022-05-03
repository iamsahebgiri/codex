import Button from "@/components/button";
import Dashboard from "@/layouts/dashboard";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function CreateMember() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (data) => {
    setError(null);
    setLoading(true);
    axios
      .post("/api/members", data)
      .then((res) => {
        console.log(res);
        router.push("/dashboard/members");
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data?.error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Dashboard>
      <div className="flex items-center justify-between p-4 sm:p-0 sm:mb-8">
        <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Add a member
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Basic Information
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Create a member with basic details
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  {error ? <p className="text-red-700">{error}</p> : null}
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register("name", { required: true, maxLength: 20 })}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Photo
                      </label>
                      <div className="mt-1 flex items-center">
                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        <button
                          type="button"
                          className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Change
                        </button>
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="batch"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Batch
                      </label>
                      <input
                        name="batch"
                        id="batch"
                        type="number"
                        placeholder="2024"
                        {...register("batch", { min: 2000, max: 2999 })}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        {...register("email", { required: true })}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="portfolio"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Portfolio
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          https://
                        </span>
                        <input
                          type="text"
                          name="portfolio"
                          id="portfolio"
                          {...register("portfolio")}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="www.john.com"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="role"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Role
                      </label>

                      <select
                        id="role"
                        name="role"
                        {...register("role")}
                        defaultValue="MEMBER"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="ALUMNI">Almuni</option>
                        <option value="COORDINATOR">Coordinator</option>
                        <option value="MEMBER">Member</option>
                        <option value="TEACHER">Teacher</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        About
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          defaultValue={""}
                          {...register("about")}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief description for this profile.
                      </p>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="skills"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Skills
                      </label>
                      <input
                        type="text"
                        name="skills"
                        id="skills"
                        {...register("skill")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="github"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Github
                      </label>
                      <input
                        type="url"
                        name="github"
                        id="github"
                        {...register("github")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="linkedin"
                        className="block text-sm font-medium text-gray-700"
                      >
                        LinkedIn
                      </label>
                      <input
                        type="url"
                        name="linkedin"
                        id="linkedin"
                        {...register("linkedin")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="twitter"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Twitter
                      </label>
                      <input
                        type="url"
                        name="twitter"
                        id="twitter"
                        {...register("twitter")}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="text-right p-4 sm:p-0 sm:mb-8">
          <Link href="/dashboard/members">
            <a className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-600 uppercase tracking-widest active:bg-white transition ease-in-out duration-150 mr-4">
              Cancel
            </a>
          </Link>
          <Button type="submit">Save member</Button>
        </div>
      </form>
    </Dashboard>
  );
}
