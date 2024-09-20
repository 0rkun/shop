"use client";

import AuthContainer from "../containers/AuthContainer";
import Button from "../general/Button";
import Heading from "../general/Heading";
import Input from "../general/Input";

import { FaGoogle } from "react-icons/fa";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Link from "next/link";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { User } from "@prisma/client";
import { useEffect } from "react";

interface LoginClientProps {
  currentUser: User | null | undefined;
}

const LoginClient: React.FC<LoginClientProps> = ({ currentUser }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Giriş başarılı");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  useEffect(() => {
    if (currentUser) {
      router.push("/");
      router.refresh();
    }
  }, []);

  return (
    <div>
      <AuthContainer>
        <div className="flex items-center justify-center flex-col gap-3 w-full md:w-[500px] p-3 shadow-lg rounded-md">
          <Heading text="Login/Giriş Yap" />

          <Input
            placeholder="Email"
            type="text"
            id="email"
            register={register}
            errors={errors}
            required
          />

          <Input
            placeholder="Parola"
            type="password"
            id="password"
            register={register}
            errors={errors}
            required
          />
          <Button text="Giriş Yap" outline onClick={handleSubmit(onSubmit)} />
          <div>OR</div>
          <Button
            text="Google İle Giriş Yap"
            icon={FaGoogle}
            onClick={() => signIn("google")}
          />

          <div>
            Hesap Oluştur{" "}
            <Link className="underline font-semibold" href="/register">
              Tıkla
            </Link>
          </div>
        </div>
      </AuthContainer>
    </div>
  );
};

export default LoginClient;
