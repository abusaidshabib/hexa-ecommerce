import React from "react";
import { Button, Input } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";

const LoginPage = () => {
  return (
      <div className="container flex items-center justify-center h-screen mx-auto">
        <div className="flex flex-col gap-5">
          <p className="text-4xl font-semibold">Welcome</p>
          <p className="text-lg">
            Discover the best deals on your favorite products.
          </p>
          <div className="flex items-center justify-start gap-3">
            <Button
              color="default"
              startContent={<FcGoogle size="25" />}
              variant="bordered"
              radius="md"
              size="lg"
            >
              Google
            </Button>
            <Button
              color="default"
              startContent={<GrFacebookOption size="25" />}
              variant="bordered"
              radius="md"
              size="lg"
            >
              Facebook
            </Button>
          </div>
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
            className="max-w-xl"
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="bordered"
            className="max-w-xl"
          />
          <p className="text-end text-orange-600 underline pb-3">
            Forget Password
          </p>
          <Button color="primary" radius="md" className="text-base">
            Button
          </Button>
        </div>
      </div>
  );
};

export default LoginPage;
