import signupSvg from "/signup.svg";
import addFundsSvg from "/add-funds.svg";
import manageFundsSvg from "/manage-funds.svg";
import profitsSvg from "/profits.svg";
import withdrawSvg from "/withdraw.svg";

const Section4 = () => {
  return (
    <section className=" w-full py-32 relative  md:mt-15 -mt-20 bg-[#F2F2F2] overflow-hidden ">
      <div className="hidden lg:block  max-w-7xl mx-auto px-6 relative min-h-[1150px]">
        {/* ===== Heading ===== */}
        <div className="text-center mb-28">
          <h2 className="text-5xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D]">
            How <span className="text-[#51367e]">Growwin Capital</span>
          </h2>
          <h2 className="text-5xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D]">
            work&apos;s
          </h2>
        </div>

        {/* ===== DOTTED PATH (EXACT SHAPE) ===== */}
        <svg
          className="absolute top-[170px] left-1/2 -translate-x-1/2 pointer-events-none z-0"
          width="1500"
          height="1200"
          viewBox="0 0 980 720"
          fill="none"
        >
          <path
            d="
              M 120 40
              H 800
              V 318
              H 520
              V 318
              H 170
              V 620
              H 860
            "
            stroke="#51367e"
            strokeWidth="2"
            strokeDasharray="6 6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>

        {/* ===== STEP 1 ===== */}
        <div className="absolute top-[130px] left-[0px] flex items-start z-10">
          <div className="relative w-[320px]">
            <img src={signupSvg} alt="Signup" className="w-full rounded-xl" />

            {/* TOP FADE */}
            <div
              className="pointer-events-none absolute top-0 left-0 w-full h-[80px]
                  bg-gradient-to-b from-white/20 to-transparent"
            />

            {/* BOTTOM FADE */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 w-full h-[140px]
                  bg-gradient-to-t from-white/20 to-transparent"
            />
          </div>

          {/* TEXT CONTAINER */}
          <div className="inline-flex flex-col mt-33 items-start">
            {/* STEP BADGE — MASK HERE */}
            <div className="bg-[#F2F2F2] px-2 py-1 rounded-sm mb-2">
              <span className="bg-[#51367e] font-[var(--font-poppins)]  font-medium text-white text-lg px-3 py-1 rounded-sm">
                Step 1
              </span>
            </div>

            {/* HEADING — LINE CAN PASS THROUGH */}
            <h4 className="font-[var(--font-poppins)]  font-medium text-lg mb-1 px-2">
              Create an Account
            </h4>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-500 font-[var(--font-poppins)]  font-medium whitespace-nowrap px-2">
              Sign up and complete your KYC.
            </p>
          </div>
        </div>

        {/* ===== STEP 2 ===== */}
        <div className="absolute top-[350px] right-[5px] w-[450px] text-right ">
          <div className="mr-43">
            <span className="inline-block font-[var(--font-poppins)]  font-medium bg-[#51367e] text-white text-lg px-3 py-1 rounded-sm mb-2">
              Step 2
            </span>
            <h4 className="font-poppins-semibold text-lg mb-1 font-[var(--font-poppins)]  font-medium">
              Add Funds
            </h4>
            <p className="text-sm text-gray-500 font-[var(--font-poppins)]  font-medium">
              Choose a plan and
            </p>
            <p className="text-sm text-gray-500 mb-4 font-[var(--font-poppins)]  font-medium">
              deposit your investment amount.
            </p>
          </div>
          <img src={addFundsSvg} alt="Add funds" className="ml-auto" />
        </div>

        {/* ===== STEP 3 (CENTER – ANCHORED) ===== */}
        <div className="absolute top-[470px] left-1/2 -translate-x-1/2 w-[360px] flex flex-col items-center ">
          {/* TEXT */}
          <div className="text-center w-[220px] ">
            <span className="inline-block font-[var(--font-poppins)]  font-medium bg-[#51367e] text-white text-lg px-3 py-1 mb-2 rounded-lg">
              Step 3
            </span>

            <h4 className="font-poppins-semibold font-[var(--font-poppins)]  font-medium text-lg mb-1">
              We Manage Your Funds
            </h4>

            <p className="text-sm text-gray-500 font-[var(--font-poppins)]  font-medium">
              Our experts manage your money across global markets.
            </p>
          </div>

          {/* IMAGE */}
          {/* IMAGE — MASK LINE ONLY HERE */}
          <div className="relative mt-4">
            {/* LINE CUTTER (only image area) */}
            <div className="absolute inset-5 bg-[#F2F2F2] z-0" aria-hidden />

            {/* IMAGE */}
            <img
              src={manageFundsSvg}
              alt="Manage funds"
              className="relative z-10"
            />
          </div>
        </div>

        {/* ===== STEP 4 ===== */}
        <div className="absolute top-[800px] left-[30px] w-[340px] items-center flex gap-3">
          <img src={profitsSvg} alt="Monthly profits" />

          <div className="flex flex-col">
            <span className="inline-block bg-[#51367e] font-[var(--font-poppins)]  font-medium text-white text-lg px-3 py-1 rounded-lg mb-2 w-fit">
              Step 4
            </span>

            <h4 className="font-poppins-semibold font-[var(--font-poppins)]  font-medium text-lg mb-1 w-[200px]">
              Receive Monthly Profits
            </h4>

            <p className="text-sm text-gray-500 font-[var(--font-poppins)]  font-medium w-[220px]">
              Your fixed monthly returns are credited automatically.
            </p>
          </div>
        </div>

        {/* ===== STEP 5 ===== */}
        <div className="absolute top-[860px] right-[80px] w-[340px] text-right">
          <div className="">
            <span className="inline-block font-[var(--font-poppins)]  font-medium bg-[#51367e] text-white text-lg px-3 py-1 rounded-lg mb-2">
              Step 5
            </span>
            <h4 className="font-[var(--font-poppins)]  font-medium text-lg mb-1">
              Withdraw Anytime (T&C apply)
            </h4>
            <p className="font-[var(--font-poppins)]  font-medium text-sm text-gray-500">
              Withdraw your profits or capital
            </p>
            <p className="text-sm text-gray-500 mb-4 font-[var(--font-poppins)]  font-medium">
              anytime with ease.
            </p>
          </div>
          {/* <img src={withdrawSvg} alt="Withdraw" className="ml-auto" /> */}
          <div className="relative w-[320px] ml-20">
            <img src={withdrawSvg} alt="Signup" className="w-full rounded-xl" />

            {/* TOP FADE */}
            <div
              className="pointer-events-none absolute top-0 left-0 w-full h-[80px]
                  bg-gradient-to-b from-white/20 to-transparent"
            />

            {/* BOTTOM FADE */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 w-full h-[140px]
                  bg-gradient-to-t from-white/20 to-transparent"
            />
          </div>
        </div>
      </div>
      {/* Moblie  */}
      {/* <div className=" max-w-7xl mx-auto px-6 relative min-h-[1150px]">
        <div className="text-center mb-28">
          <h2 className="text-5xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D]">
            How <span className="text-[#51367e]">Growwin Capital</span>
          </h2>
          <h2 className="text-5xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D]">
            work&apos;s
          </h2>
        </div>
      </div> */}

      {/* ================= MOBILE VERSION ================= */}
      <div className="relative block lg:hidden px-4 py-16 bg-[#F2F2F2]">
        <div className="text-center md:mb-28 mb-10">
          <h2 className="text-5xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D]">
            How <span className="text-[#51367e]">Growwin Capital</span>
          </h2>
          <h2 className="text-5xl font-[var(--font-poppins)]  font-medium text-[#2D2D2D]">
            work&apos;s
          </h2>
        </div>
        {/* VERTICAL DOTTED PATH */}
        {/* <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-0"
          width="360"
          height="2500"
          viewBox="0 0 360 900"
          fill="none"
        >
          <path
            d="
      M 180 -230
      H 300
      V -100
      H 180
      V 75
      H 300
      V 240
      H 60
      V 530
      H 300
      V 995
      H 60
      V 1100
      H 180
      V 1300
    "
            stroke="#51367e"
            strokeWidth="2"
            strokeDasharray="6 6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg> */}

        <div className="relative z-10 space-y-20">
          {/* ===== STEP 1 (LEFT) ===== */}

          <div className="flex flex-col items-center gap-4">
            <img src={signupSvg} className="w-[300px] rounded-xl" />

            <div className="text-center relative">
              {/* STEP BADGE */}
              <span className="relative inline-block bg-[#51367e] text-white text-sm px-5 py-2 rounded-md mb-2">
                Step 1{/* HORIZONTAL DOTTED LINE */}
                <span
                  className="
          absolute
          top-1/2
          left-full
          ml-2
          w-17
          border-t-2
          border-dashed
          border-[#51367e]
        "
                />
              </span>
              <span
                className="
          absolute
          top-[34%]
          -right-6
          mt-0
          h-21
          border-l-2
          border-dashed
          border-[#51367e]
        "
              />
              <span
  className="
    pointer-events-none
    absolute
    top-[20%]
    -right-6
    w-4
    h-4
    border-t-2
    border-r-2
    border-dashed
    border-[#51367e]
    rounded-tr-full
  "
/>

              <span
                className="
          absolute
          top-[130%]
          left-[46%]
          ml-2
          w-34
          border-t-2
          border-dashed
          border-[#51367e]
        "
              />
              <span
                className="
          absolute
          top-[130%]
          left-[48%]
          mt-0
          h-15
          border-l-2
          border-dashed
          border-[#51367e]
        "
              />
              <h4 className="text-lg font-medium">Create an Account</h4>
              <p className="text-sm text-gray-500">
                Sign up and complete your KYC.
              </p>
            </div>
          </div>

          {/* ===== STEP 2 (RIGHT) ===== */}
          <div className="flex flex-col items-center gap-4 text-right z-10">
            <img src={addFundsSvg} className="w-[300px] rounded-xl" />

            <div className="text-center md:w-full w-[40%]">
              <span className="relative inline-block bg-[#51367e] text-white text-sm px-5 py-2 rounded-md mb-2">
                Step 2{/* HORIZONTAL DOTTED LINE */}
                <span
                  className="
          absolute
          top-1/2
          left-full
          ml-2
          w-22
          border-t-2
          border-dashed
          border-[#51367e]
        "
                />
                <span
                className="
          absolute
          top-[50%]
          -right-24
          mt-0
          h-50
          border-l-2
          border-dashed
          border-[#51367e]
        "
              />
               <span
                className="
          absolute
          top-[600%]
          -right-[110%]
          ml-2
          w-60
          border-t-2
          border-dashed
          border-[#51367e]
        "
              />
              <span
                className="
          absolute
          top-[600%]
          -left-[80%]
          mt-0
          h-70
          border-l-2
          border-dashed
          border-[#51367e]
        "
              />
              <span
                  className="
          absolute
          top-[1370%]
          right-[100%]
          ml-2
          w-16
          border-t-2
          border-dashed
          border-[#51367e]
        "
                />
              </span>

              <h4 className="text-lg font-medium">Add Funds</h4>
              <p className="text-sm text-gray-500">
                Choose a plan and deposit your investment.
              </p>
            </div>
          </div>

          {/* ===== STEP 3 (CENTER) ===== */}
          <div className="flex flex-col items-center text-center ">
            <img src={manageFundsSvg} className="w-[250px] mt-4 rounded-xl" />
            <div className="text-center w-[60%]">
              <span className="inline-block bg-[#51367e] text-white text-sm px-5 py-2 rounded-md mb-2">
                Step 3
              </span>
              <h4 className="text-lg font-medium">We Manage Your Funds</h4>
              <p className="text-sm text-gray-500">
                Our experts manage your money across global markets.
              </p>
            </div>
          </div>

          {/* ===== STEP 4 (LEFT) ===== */}
          <div className="flex flex-col items-center gap-4">
            <img src={profitsSvg} className="w-[220px]" />
            <div
              className="pointer-events-none absolute top-0 left-0 w-full h-[80px]
                  bg-gradient-to-b from-white/20 to-transparent"
            />

            {/* BOTTOM FADE */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 w-full h-[140px]
                  bg-gradient-to-t from-white/20 to-transparent"
            />
            <div className="text-center w-[60%]">
              <span className="inline-block bg-[#51367e] text-white text-sm px-5 py-2 rounded-md mb-2">
                Step 4
              </span>
              <h4 className="text-lg font-medium">Receive Monthly Profits</h4>
              <p className="text-sm text-gray-500">
                Fixed monthly returns credited automatically.
              </p>
            </div>
          </div>

          {/* ===== STEP 5 (RIGHT) ===== */}
          <div className="flex flex-col items-center gap-4 text-right">
            <img src={withdrawSvg} className="w-[300px] rounded-xl" />

            <div className="text-center">
              <span className="inline-block bg-[#51367e] text-white text-sm px-5 py-2 rounded-md mb-2">
                Step 5
              </span>
              <h4 className="text-lg font-medium">Withdraw Anytime</h4>
              <p className="text-sm text-gray-500">
                Withdraw your profits or capital anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
