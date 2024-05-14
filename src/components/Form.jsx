import { useState } from "react";

const Form = ({ toast }) => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      setErrorMessage("Email address is required.");
    } else if (!email.match(emailRegex)) {
      setErrorMessage("Please enter a valid email address.");
    } else {
      setErrorMessage("");
      try {
        const response = await fetch(
          "https://www.greatfrontend.com/api/projects/challenges/newsletter",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              email,
            }),
          }
        );
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          toast.custom(
            <div className="text-green-700 text-sm font-medium py-[6px] px-[10px] flex items-center gap-3 bg-green-50 rounded-full">
              <span className="rounded-full bg-white shadow-md px-[10px] py-[2px]">
                Success
              </span>
              <span>{data.message}</span>
            </div>
          );

          setEmail("");
        } else {
          toast.custom(
            <div className="text-red-600 text-sm font-medium py-[6px] px-[10px] flex items-center gap-3 bg-red-50 rounded-full">
              <span className="rounded-full bg-white shadow-md px-[10px] py-[2px]">
                Error
              </span>
              <span>{data.error}</span>
            </div>
          );
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex gap-4 items-start max-w-[448px] w-full">
        <div className="flex flex-col w-full">
          <label htmlFor="email-input" className="hidden">
            Email
          </label>
          <input
            className="px-[14px] py-[10px] border border-[#e6e6e6] focus:ouline-1 focus:outline-indigo-700 focus:ring focus:ring-[#444CE7]/[.12] rounded text-sm text-neutral-900 font-medium"
            id="email-input"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
          />
          {errorMessage && (
            <p className="text-sm text-red-600 font-normal mt-1.5">
              {errorMessage}
            </p>
          )}
        </div>
        <input
          type="submit"
          className="bg-indigo-700 text-sm font-medium text-white rounded px-4 py-[10px] cursor-pointer"
          value="Subscribe"
        />
      </div>
      <div>
        <p>We only send you the best! No spam.</p>
      </div>
    </form>
  );
};

export default Form;
