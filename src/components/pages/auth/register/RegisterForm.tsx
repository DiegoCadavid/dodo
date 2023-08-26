/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
interface FormInputs {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
}

const RegisterForm = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError: setFormError,
  } = useForm<FormInputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
    if (formData.password !== formData.repeatPassword) {
      setFormError("repeatPassword", {
        message: "Passwords do not match",
        type: "manual",
      });
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      await axios("/api/auth/register", {
        data: formData,
        method: "POST",
      });

      await axios("/api/auth/login", {
        data: formData,
        method: "POST",
      })
      
      void router.push("/");
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
      <form
        className="flex flex-col gap-4"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          {errors.username && (
            <p className="text-sm italic text-red-500">
              {errors.username.message}
            </p>
          )}
          <input
            type="text"
            placeholder="username"
            className="dodo-input"
            autoComplete="off"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9_]+$/g,
                message:
                  "Username can only contain letters, numbers and underscores",
              },
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters long",
              },
              maxLength: {
                value: 20,
                message: "Username must be at most 20 characters long",
              },
            })}
          />
        </div>
        <div>
          {errors.email && (
            <p className="text-sm italic text-red-500">
              {errors.email.message}
            </p>
          )}
          <input
            type="email"
            placeholder="email"
            className="dodo-input"
            autoComplete="off"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
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
            placeholder="password"
            className="dodo-input"
            autoComplete="off"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              min: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              max: {
                value: 20,
                message: "Password must be at most 20 characters long",
              },
            })}
          />
        </div>
        <div>
          {errors.repeatPassword && (
            <p className="text-sm italic text-red-500">
              {errors.repeatPassword.message}
            </p>
          )}
          <input
            type="password"
            placeholder="repeat password"
            className="dodo-input"
            autoComplete="off"
            {...register("repeatPassword", {
              required: {
                value: true,
                message: "Password is required",
              },
              min: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              max: {
                value: 20,
                message: "Password must be at most 20 characters long",
              },
            })}
          />
        </div>
        <button type="submit" className="dodo-btn dodo-btn-primary pt-2">
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
