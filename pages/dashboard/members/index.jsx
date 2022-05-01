import Dashboard from "@/layouts/dashboard";
import { toTitleCase } from "@/utils/string";
import axios from "axios";
import prisma from "libs/prisma";
import Link from "next/link";
import React, { useState } from "react";

export default function Members({ data }) {
  const [members, setMembers] = useState(data);

  const deleteMember = (id) => {
    axios
      .delete(`/api/members/${id}`)
      .then(() => {
        const newMembers = members.filter((member) => member.id !== id);
        setMembers(newMembers);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Dashboard>
      <div className="flex items-center justify-between p-4 sm:p-0 sm:mb-8">
        <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Members
        </h1>
        <Link href="/dashboard/members/create">
          <a className="inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150">
            Add Member
          </a>
        </Link>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Member name
              </th>
              <th scope="col" className="px-6 py-3">
                Batch
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Skill
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {members?.length == 0 ? (
              <tr>
                <td colSpan="6" className="p-6 bg-white">
                  <div className="p-8 text-center">
                    <h2 className="text-2xl font-medium">
                      There's nothing here...
                    </h2>

                    <p className="mt-4 text-sm text-gray-500">
                      Created members will appear here, try addiong one!
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              members.map(({ id, name, batch, email, skill, role }) => (
                <tr
                  key={id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {name}
                  </th>
                  <td className="px-6 py-4">{batch}</td>
                  <td className="px-6 py-4">{email}</td>
                  <td className="px-6 py-4">
                    {skill ? skill.split(/[ ,]/)[0] : "NA"}
                  </td>
                  <td className="px-6 py-4">
                    {role !== undefined ? toTitleCase(role) : "NA"}
                  </td>
                  <td className="px-6 py-4 flex">
                    <Link href={`/dashboard/members/${id}`}>
                      <a className="block font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                      </a>
                    </Link>
                    <button
                      className="ml-4 block font-medium text-red-600 dark:text-red-500 hover:underline"
                      onClick={() => deleteMember(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
}

export const getServerSideProps = async (context) => {
  const data = await prisma.user.findMany();
  return { props: { data } };
};
