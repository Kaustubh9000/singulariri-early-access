"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
};

export default function EarlyAccess() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    toast.loading("Submitting...");

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      toast.dismiss();

      if (result.status === "success") {
        toast.success("Successfully submitted! 🎉");
        setTimeout(() => {
          setSubmitted(true);
          setFormData({ name: "", email: "" });
        }, 100)
      } else {
        toast.error(result.message || "Something went wrong. Try again!");
      }
    } catch (error: unknown) {
      toast.dismiss();
      console.error("Submission error:", error);
      toast.error("Error submitting. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="container" aria-live="polite">
      <div className="h-[86vh] flex flex-col text-white justify-center items-center text-center p-12">
        <Toaster position="bottom-right" />

        {submitted ? ( // Show thank-you message if submitted
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-4">Thank You! 🎉</h1>
            <p className="text-lg">
              You have successfully registered for early access of <span className="font-semibold">Singulariti</span>!
            </p>
            <button
              onClick={() => setSubmitted(false)} // Allow signing up again
              className="mt-6 px-6 py-2 rounded-lg bg-[#E2DFD0] hover:bg-[#E2DFD0]/90 text-black border-2 border-white/50 shadow-inner shadow-white/80"
            >
              Sign Up Again
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-5xl font-bold mb-4">Early Access</h1>
            <p className="text-xl mb-6">Join the wait list for early access to Singulariti!</p>

            <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 w-full rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-font-yellow text-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 w-full rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-font-yellow text-black"
                required
              />
              <button
                type="submit"
                className="w-full font-semibold rounded-xl lg:text-md px-4 h-12 bg-[#E2DFD0] hover:bg-[#E2DFD0]/90 text-black border-2 border-white/50 shadow-inner shadow-white/80"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Join Now"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
