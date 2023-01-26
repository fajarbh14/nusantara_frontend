import React, { useState } from "react";
import axios from "../api/axios";

function SignUp() {
  const [value, setValue] = useState({ name: "", email: "", password: "", password_confirmation: "" });

  function handleChange(e) {
    const { name, value } = e.target;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    axios.post(`/register`, value, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        window.location.replace("/login");
      })
  }

  return (
    <section className="bg-white px-[120px] h-full flex items-center">
      <div className="container">
        <div className="flex xl:flex-row flex-col xl:space-x-[64px] space-x-[40px] justify-center">
          <div className="xl:flex xl:flex-col xl:space-y-[64px] text-center w-[500px] p-5 hidden lg:mt-0 h-full">
            <div>
              <h2 className="h2">Join With Us!</h2>
              <p className="subtitle text-neutral-500 mt-3">
                Sign up and let's continue
              </p>
            </div>
            <img src="/images/sign_in.png" alt="mockup" className="w-[500px]" />
          </div>
          <div className="justify-center max-w-md mx-auto md:max-w-2xl w-[500px] p-12 place-self-center rounded-[24px] shadow-xl ">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="label-form block">Name</label>
                <input
                  className="text-input mx-auto focus:outline-none"
                  type={"name"}
                  placeholder="Fajar Buana"
                  name="name"
                  value={value.name}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                ></input>
              </div>
              <div className="mb-5">
                <label className="label-form block">Email</label>
                <input
                  className="text-input mx-auto focus:outline-none"
                  type={"email"}
                  placeholder="example@email.com"
                  name="email"
                  value={value.email}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                ></input>
              </div>
              <div className="mb-5">
                <label className="label-form block">Password</label>
                <input
                  className="text-input mx-auto focus:outline-none"
                  type={"password"}
                  placeholder="enter password"
                  name="password"
                  value={value.password}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="mb-5">
                <label className="label-form block">Confirm Password</label>
                <input
                  className="text-input mx-auto focus:outline-none"
                  type={"password"}
                  placeholder="enter password"
                  name="password_confirmation"
                  value={value.password_confirmation}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <button
                className="btn-primary block w-[100%] mt-12"
                type="submit"
              >
                SIGN UP
              </button>
            </form>
            <p className="body mt-8 text-neutral-500 flex justify-center">
              Don't have an account yet?
              <a
                href="/register"
                className="link text-primary-300 ml-2 no-underline"
              >
                Create One
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default SignUp;
