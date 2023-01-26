import React, { useState } from "react";
import axios from "../api/axios";
import Toast from "../components/Toast";

function SignIn() {

  const [value, setValue] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ display: false });

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

    axios
      .post(`/login`, value, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        localStorage.setItem("BUKUQU", res.data.token);
        window.location.replace("/");
      })
      .catch((err) => {
        if (err.response?.status === 403) {
          setValue({ email: value.email, password: "" });
          setMessage({
            display: true,
            type: "error",
            content: "Invalid Credentials",
          });
        } else {
          setValue({ email: value.email, password: "" });
          setMessage({
            display: true,
            type: "error",
            content: "Something is wrong.",
          });
        }
      });
  }

  return (
    <section className="bg-white px-[120px] h-full flex items-center">
      <div className="container">
        {message.display && (
          <Toast
            type={message.type}
            content={message.content}
            closeToast={setMessage}
          />
        )}
        <div className="flex xl:flex-row flex-col xl:space-x-[64px] space-x-[40px] justify-center">
          <div className="xl:flex xl:flex-col xl:space-y-[64px] text-center w-[500px] p-5 hidden lg:mt-0 h-full">
            <div>
              <h2 className="h2">Welcome Back!</h2>
              <p className="subtitle text-neutral-500 mt-3">
                Sign in and let's continue Your Journey For List Favorite Book.
              </p>
            </div>
            <img src="/images/sign_in.png" alt="mockup" className="w-[500px]" />
          </div>
          <div className="justify-center max-w-md mx-auto md:max-w-2xl w-[500px] p-12 place-self-center rounded-[24px] shadow-xl ">
            <form onSubmit={handleSubmit}>
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
              <button
                className="btn-primary block w-[100%] mt-12"
                type="submit"
              >
                SIGN IN
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

export default SignIn;
