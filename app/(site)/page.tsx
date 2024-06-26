import Image from "next/image";
import React from "react";
import AuthForm from "./components/AuthForm";

const Home = () => {
  return (
    <>
      <div className=" flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            className="mx-auto w-auto"
            src="/img/logo.png"
            height="48"
            width="48"
            alt="Logo"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-grey-900">
            Sign in to your account
          </h2>
          <AuthForm />
        </div>
      </div>
    </>
  );
};

export default Home;
