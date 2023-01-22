import React from "react";

export default function Login() {
  return (
    <body class="bg-white">
      <div class="flex min-h-screen">
        <div class="flex flex-row w-full">
          <div class="hidden lg:flex flex-col justify-between bg-[#ffe85c] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
            <div class="flex items-center justify-start space-x-3">
              <span class="bg-black rounded-full w-8 h-8"></span>
              <a href="#" class="font-medium text-xl">
                Brand
              </a>
            </div>
            <div class="space-y-5">
              <h1 class="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
                Enter your account and discover new experiences
              </h1>
              <p class="text-lg">You do not have an account?</p>
              <button class="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                Create account here
              </button>
            </div>
            <p class="font-medium">© 2022 Company</p>
          </div>

          <div class="flex flex-1 flex-col items-center justify-center px-10 relative">
            <div class="flex lg:hidden justify-between items-center w-full py-4">
              <div class="flex items-center justify-start space-x-3">
                <span class="bg-black rounded-full w-6 h-6"></span>
                <a href="#" class="font-medium text-lg">
                  Brand
                </a>
              </div>
              <div class="flex items-center space-x-2">
                <span>Not a member? </span>
                <a href="#" class="underline font-medium text-[#070eff]">
                  Sign up now
                </a>
              </div>
            </div>
            <div class="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
              <div class="flex flex-col space-y-2 text-center">
                <h2 class="text-3xl md:text-4xl font-bold">
                  Sign in to account
                </h2>
                <p class="text-md md:text-xl">
                  Sign up or log in to place the order,no password require!
                </p>
              </div>
              <div class="flex flex-col max-w-md space-y-5">
                <input
                  type="text"
                  placeholder="Email"
                  class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                />
                <input
                  type="password"
                  placeholder="********"
                  class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                />
                <button class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                  Confirm with email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
