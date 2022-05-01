import axios from "axios";
import prisma from "libs/prisma";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function EditMember({ user }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      ...user,
    },
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setError(null);
    setLoading(true);
    axios
      .patch(`/api/members/${user.id}`, data)
      .then((res) => {
        console.log(res);
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
    <>
      <h1>Edit member</h1>
      {error ? <p className="text-red-700">{error}</p> : null}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        <br />
        <select {...register("role")} defaultValue="MEMBER">
          <option value="ALUMNI">almuni</option>
          <option value="COORDINATOR">coordinator</option>
          <option value="MEMBER">member</option>
          <option value="TEACHER">teacher</option>
        </select>
        <br />
        <input
          type="number"
          placeholder="batch"
          {...register("batch", { min: 2000, max: 2080, valueAsNumber: true })}
        />
        <br />
        <input type="text" placeholder="skill" {...register("skill")} /> <br />
        <input type="url" placeholder="github" {...register("github")} /> <br />
        <input type="url" placeholder="linkedin" {...register("linkedin")} />
        <br />
        <input type="url" placeholder="twitter" {...register("twitter")} />
        <br />
        <input type="url" placeholder="portfolio" {...register("portfolio")} />
        <br />
        <textarea placeholder="about" {...register("about")} />
        <input type="submit" disabled={loading} value="Update" />
      </form>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  return { props: { user } };
};
