"use client";

import AuthContainer from "../containers/AuthContainer";
import Button from "../general/Button";
import Heading from "../general/Heading";
import Input from "../general/Input";

import { FaGoogle } from "react-icons/fa";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { useEffect } from "react";

interface RegisterClientProps {
  currentUser: User | null | undefined|any;
}

const RegisterClient: React.FC<RegisterClientProps> = ({ currentUser }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios.post("/api/register", data).then(() => {
      toast.success("Kullanıcı Oluşturuldu");
      signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      }).then((callback) => {
        if (callback?.ok) {
          router.push("/cart");
          router.refresh();
          toast.success("Giriş İşlemi Başarılı");
        }

        if (callback?.error) {
          toast.error(callback.error);
        }
      });
    });
  };

  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, []);

  return (
    <div>
      <AuthContainer>
        <div className="flex items-center justify-center flex-col gap-3 w-full md:w-[500px] p-3 shadow-lg rounded-md">
          <Heading text="Register/Kayıt Ol" />

          <Input
            placeholder="Ad"
            type="text"
            id="name"
            register={register}
            errors={errors}
            required
          />

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
          <Button text="Kayıt Ol" outline onClick={handleSubmit(onSubmit)} />
          <div>OR</div>
          <Button
            text="Google İle Üye Ol"
            icon={FaGoogle}
            onClick={() => signIn("google")}
          />
        </div>
      </AuthContainer>
    </div>
  );
};

export default RegisterClient;
