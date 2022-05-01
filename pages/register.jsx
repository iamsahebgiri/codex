import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Button from "@/components/button";
import Guest from "@/layouts/guest";
import Input from "@/components/input";
import Label from "@/components/label";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/router";

export default function Register() {
  const { signup } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleRegistration = async ({ name, email, password }) => {
    setProcessing(true);
    signup(email, password)
      .then((user) => {
        console.log(user);
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
        setError("Whoops! Failed to create account");
      })
      .finally(() => {
        setProcessing(false);
      });
  };

  return (
    <Guest>
      {error ? (
        <div className="mb-4">
          <div className="font-medium text-red-600">{error}</div>
        </div>
      ) : null}

      <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
          <Label forInput="name" value="Name" />
          <Input
            name="name"
            type="text"
            className="mt-1 block w-full"
            autoComplete="name"
            required
            register={register}
          />
        </div>

        <div className="mt-4">
          <Label forInput="email" value="Email" />
          <Input
            name="email"
            type="email"
            className="mt-1 block w-full"
            autoComplete="username"
            required
            register={register}
          />
        </div>

        <div className="mt-4">
          <Label forInput="password" value="Password" />
          <Input
            name="password"
            type="password"
            className="mt-1 block w-full"
            autoComplete="new-password"
            required
            register={register}
          />
        </div>

        <div className="flex items-center justify-end mt-4">
          <Link
            href="/login"
            className="underline text-sm text-gray-600 hover:text-gray-900"
          >
            <a>Already registered?</a>
          </Link>

          <Button className="ml-4" type="submit" processing={processing}>
            Register
          </Button>
        </div>
      </form>
    </Guest>
  );
}
