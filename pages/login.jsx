import React, { useState } from "react";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Guest from "@/layouts/Guest";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Link from "next/link";
import { useAuth } from "context/authContext";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function Login() {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleRegistration = async ({ name, email, password }) => {
    setProcessing(true);
    login(email, password)
      .then((user) => {
        console.log(user);
        router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setError("Email or password is incorrect!");
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
          <Label forInput="email" value="Email" />

          <Input
            type="text"
            name="email"
            className="mt-1 block w-full"
            autoComplete="username"
            register={register}
          />
        </div>

        <div className="mt-4">
          <Label forInput="password" value="Password" />

          <Input
            type="password"
            name="password"
            className="mt-1 block w-full"
            autoComplete="current-password"
            register={register}
          />
        </div>

        <div className="block mt-4">
          <label className="flex items-center">
            <Checkbox name="remember" />

            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>

        <div className="flex items-center justify-end mt-4">
          <Link
            href="/forgot-password"
            className="underline text-sm text-gray-600 hover:text-gray-900"
          >
            Forgot your password?
          </Link>

          <Button className="ml-4" processing={processing}>
            Log in
          </Button>
        </div>
      </form>
    </Guest>
  );
}
