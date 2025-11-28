import { useForm } from "react-hook-form";
import { loginSchema } from "../form/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { TLoginForm } from "../types";

const UseLoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TLoginForm>({ resolver: zodResolver(loginSchema) });
  return {
    register,
    handleSubmit,
    setError,
    errors,
  };
};

export default UseLoginForm;
