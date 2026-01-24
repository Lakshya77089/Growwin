import { useState } from "react";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [touched, setTouched] = useState({ email: false, message: false });

  // Email validation
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid = isValidEmail(email) && message.trim().length > 0;

  const handleSubmit = async () => {
    if (!isFormValid) return;

    setError("");
    setSuccess("");

    try {
      setLoading(true);

      const res = await fetch(
        "https://api.growwincapital.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            message,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong");
      }

      // ✅ Success
      setSuccess("Your message has been sent successfully!");
      setEmail("");
      setMessage("");
      setTouched({ email: false, message: false });
    } catch (err: any) {
      setError(
        err.message ||
        "Unable to send message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-16 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== Heading ===== */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-medium text-[#2D2D2D]">
            Contact <span className="text-[#51367e]">us</span>
          </h2>
        </div>

        {/* ===== Form ===== */}
        <div className="flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row gap-4 items-center">
            {/* Email */}
            <div className="w-full md:w-[320px] relative">
              <input
                type="email"
                placeholder="Enter your mail here"
                value={email}
                onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                onChange={(e) => setEmail(e.target.value)}
                className={`
                  w-full
                  h-[56px]
                  px-6
                  rounded-full
                  border
                  bg-white
                  outline-none
                  text-sm
                  transition-all
                  ${touched.email && !isValidEmail(email)
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border-gray-300 focus:border-[#51367e]"
                  }
                `}
              />
              {touched.email && !isValidEmail(email) && (
                <span className="absolute -bottom-6 left-4 text-[10px] text-red-500 font-medium">Please enter a valid email.</span>
              )}
            </div>

            {/* Message */}
            <div className="w-full md:flex-1 relative">
              <input
                type="text"
                placeholder="Enter your message here"
                value={message}
                onBlur={() => setTouched(prev => ({ ...prev, message: true }))}
                onChange={(e) => setMessage(e.target.value)}
                className={`
                  w-full
                  h-[56px]
                  px-6
                  rounded-full
                  border
                  bg-white
                  outline-none
                  text-sm
                  transition-all
                  ${touched.message && !message.trim()
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border-gray-300 focus:border-[#51367e]"
                  }
                `}
              />
              {touched.message && !message.trim() && (
                <span className="absolute -bottom-6 left-4 text-[10px] text-red-500 font-medium">Message cannot be empty.</span>
              )}
            </div>

            {/* Button */}
            <button
              onClick={handleSubmit}
              disabled={loading || !isFormValid}
              className={`
                h-[56px]
                px-8
                w-full md:w-auto
                rounded-full
                text-sm
                font-medium
                text-white
                transition-all
                ${loading || !isFormValid
                  ? "bg-gray-400 cursor-not-allowed opacity-70"
                  : "bg-[#51367e] hover:bg-[#4b347a] shadow-lg shadow-purple-500/20"
                }
              `}
            >
              {loading ? "Sending..." : "Send mail"}
            </button>
          </div>

          {/* 🔴 Error */}
          {error && (
            <p className="mt-8 text-sm text-red-600 text-center">
              {error}
            </p>
          )}

          {/* ✅ Success */}
          {success && (
            <p className="mt-8 text-sm text-green-600 text-center">
              {success}
            </p>
          )}

          {/* Note */}
          <p className="text-xs text-gray-500 mt-10 text-center max-w-3xl">
            Note: If you have any questions or need further information,
            please don&apos;t hesitate to contact us. We&apos;re here to help!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
