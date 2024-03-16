import React, { useContext } from "react";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import LockIcon from "@mui/icons-material/Lock";
import { Data } from "../context/Context";
import section1style from "./Section1.module.css";

function Signin() {
  const { settoggle } = useContext(Data);

  const onchangeauth = () => {
    settoggle(true);
  };

  return (
    <div className={section1style.signin}>
      <div class=" flex flex-row mb-6">
        <button class="text-[18px] text-[#9a6cb8] mr-4 underline underline-offset-8">
          Sign In
        </button>
        <button class="text-[18px] opacity-60 mr-4" onClick={onchangeauth}>
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
        />
      </div>
      <div class="flex flex-row justify-between mb-4">
        <div class="flex flex-row">
          <div class="mr-2">
            <input type="checkbox" id="scales" name="scales" />
          </div>
          Remember me
        </div>
        <div class="flex flex-row">
          <div class="mr-2">
            <LockIcon fontSize="small" />
          </div>
          Forgot password?
        </div>
      </div>
      <button class="w-full pl-2 pr-2 pt-1 pb-1 rounded-lg border-1 border-[#000000] bg-[#9a6cb8] text-[#ffffff]">
        Continue
      </button>
    </div>
  );
}

export default Signin;
