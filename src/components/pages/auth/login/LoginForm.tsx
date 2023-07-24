/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { type User } from "@/types";
import axios from "axios";

interface FormInputs {
  email: string;
  password: string;
}

const LoginForm = ({}) => {
// TODO: Show states in UI

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<{ user: User } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
    try {
      setIsLoading(true);
      setError(null);
      setData(null);

      const login = await axios<{ user: User }>("/api/auth/login", {
        data: formData,
        method: "POST",
      });

      setData(login.data);
      sessionStorage.setItem("user",JSON.stringify(login.data.user));
      window.location.href = "/";
    } catch (error) {
      if (axios.isAxiosError<{ msg: string }>(error)) {
        setError(error.response?.data.msg || null);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {error && (
        <div className="mb-4 rounded-lg border border-red-500 bg-red-900 p-4">
          {error}
        </div>
      )}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          {errors.email && (
            <p className="text-sm italic text-red-500">
              {errors.email.message}
            </p>
          )}
          <input
            type="email"
            placeholder="Enter your email"
            className="dodo-input"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
        </div>
        <div>
          {errors.password && (
            <p className="text-sm italic text-red-500">
              {errors.password.message}
            </p>
          )}
          <input
            type="password"
            placeholder="Enter your password"
            className="dodo-input"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required"
              },
              min: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              max: {
                value: 20,
                message: "Password must be at most 20 characters long"
              },
            })}
          />
        </div>
        <button type="submit" className="dodo-btn dodo-btn-primary pt-2">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
