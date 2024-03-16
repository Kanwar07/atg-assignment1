import React, { useContext, useState } from "react";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import PasswordStrengthBar from "react-password-strength-bar";
import { Data } from "../context/Context";
import section1style from "./Section1.module.css";

function Login() {
  const { settoggle } = useContext(Data);

  const [password, setPassword] = useState();

  const onchangeauth = () => {
    settoggle(false);
  };

  return (
    <div className={section1style.login}>
      <div class="mb-6">
        <button class="text-[18px] opacity-60 mr-4" onClick={onchangeauth}>
          Sign In
        </button>
        <button class="text-[18px] text-[#9a6cb8] mr-4 underline underline-offset-8">
          Join In
        </button>
      </div>
      <button class="flex flex-row items-center border-1 border-[#9a6cb8] w-full justify-between pl-6 pr-6 pt-1 pb-1 rounded-lg mb-3">
        <img src={google} alt="google" />
        Continue with Google
        <img src={google} alt="google" class="invisible" />
      </button>
      <button class="flex flex-row items-center border-1 border-[#9a6cb8] w-full justify-between pl-6 pr-6 pt-1 pb-1 rounded-lg mb-3">
        <img src={facebook} alt="facebook" />
        <div>Continue with Facebook</div>
        <img src={facebook} alt="facebook" class="invisible" />
      </button>
      <div class="flex flex-row">
        <hr />
        Or connect with
        <hr />
      </div>
      <div class="mt-4 mb-3">
        <input
          type="email"
          placeholder="Email"
          class="w-full pl-2 pr-2 pt-1 pb-1 rounded-lg"
        />
      </div>
      <div class="mb-4">
        <input
          type="password"
          placeholder="Password"
          class="w-full pl-2 pr-2 pt-1 pb-1 rounded-lg"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
      </div>
      <div class="mb-4">
        <PasswordStrengthBar password={password} />
      </div>
      <div class="mb-4 text-[14px] font-normal">
        By continuing, you agree to our{" "}
        <span class="font-semibold cursor-pointer">Terms of Service</span> and{" "}
        <span class="font-semibold cursor-pointer">Privacy Policy</span>
      </div>
      <button class="w-full pl-2 pr-2 pt-1 pb-1 rounded-lg border-1 border-[#000000] bg-[#9a6cb8] text-[#ffffff]">
        Continue
      </button>
    </div>
  );
}

export default Login;
