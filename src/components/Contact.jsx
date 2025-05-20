import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/90106a12db7ce3d72b3dfcf3142457aa",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 bg-opacity-90 rounded-xl border-2 border-purple-500 shadow-lg shadow-purple-500/20 mt-10 mb-10">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        <span className="text-purple-400">Gamer</span> Support
      </h2>

      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-600 bg-opacity-90 text-white rounded-lg text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Message sent successfully! We'll get back to you soon.
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input
          type="hidden"
          name="_subject"
          value="New message from GameHub!"
        />

        <div>
          <label className="block text-purple-300 mb-2 font-medium">
            Your Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-3 bg-gray-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition placeholder-gray-400"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-purple-300 mb-2 font-medium">
            Email Address
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-3 bg-gray-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition placeholder-gray-400"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-purple-300 mb-2 font-medium">
            Your Message
          </label>
          <textarea
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
            rows="5"
            className="w-full px-4 py-3 bg-gray-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition placeholder-gray-400"
            placeholder="How can we help you today?"
          />
          {errors.message && (
            <p className="mt-1 text-red-400 text-sm">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-purple-500/30 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <>
              <FaPaperPlane className="text-sm" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}; 
//message


export default Contact;
