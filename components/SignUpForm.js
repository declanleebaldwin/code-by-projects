import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Divider, Title, Paragraph } from '../components'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const SignUpForm = ({ title, paragraphs, button }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const router = useRouter();


  const onSubmitError = (error) => {
    console.log("onSubmitError", error);
    setLoading(false);
    // snackbar
  };

  const onSubmitSuccess = () => {
    console.log("onSubmitSuccess");
    setLoading(false);
    resetForm();
    router.push("/success");
  };

  const resetForm = () => {
    setEmail("");
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();
    if (loading) return;
    if (!!!email) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    const form = formRef.current;
    setLoading(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        email,
        data: 'mentor-page'
      }),
    })
      .then(() => onSubmitSuccess())
      .catch((error) => onSubmitError(error));
  };

  return (
    <>
      <Divider />
      <form
        name="contact"
        method="POST"
        className="flex flex-col pl-16 pr-16"
        action="/thanks/"
        data-netlify="true"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <Title text={title} />
        {paragraphs.map((p, i) => {
          return <Paragraph key={i} text={p} />
        })}
        <div className="relative mb-8">
          <input
            onBlur={() => setError(false)}
            name="email"
            className={
              error
                ? "shadow-inner focus:outline-none focus:shadow-inner w-full bg-gray-400 pt-0 pb-0 pl-6 text-gray-300 placeholder:text-gray-300 text-base rounded-lg h-[4.25rem]"
                : "focus:outline-none focus:shadow-inner w-full bg-gray-400 pt-0 pb-0 pl-6 text-gray-300 placeholder:text-gray-300 text-base rounded-lg h-[4.25rem]"
            }
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          ></input>
        </div>
        <div
          className={
            loading
              ? "relative ease-in-out duration-300 bg-purple-500 flex items-center justify-center rounded-lg h-[4.25rem]"
              : "relative ease-in-out duration-300 hover:bg-purple-400 bg-purple-500 flex items-center justify-center rounded-lg cursor-pointer h-[4.25rem]"
          }
        >
          {loading ? (
            <div className="absolute flex items-center justify-center">
              <div className="animate-spin relative w-10 h-10">
                <Image
                  objectFit="cover"
                  layout="fill"
                  src="/spinner.svg"
                  alt="loading"
                />
              </div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full h-full text-white uppercase font-semibold text-base tracking-wider"
            >
              {button}
            </button>
          )}
        </div>
      </form>
    </>
  );
};
export default SignUpForm;
