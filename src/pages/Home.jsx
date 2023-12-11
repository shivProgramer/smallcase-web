import React from "react";
const Home = () => {
  return (
    <>
      <div
        className="container mx-auto px-4 pt-8"
        style={{
          backgroundImage: 'url("../assets/back.png")',
          backgroundSize: "cover",
          height: "100vh"
        }}
      >
        <h1 className=" xs:text-[2rem] lg:text-[3rem] sm:text-[3.5rem] md:text-[3.5rem] font-bold">
          Invest in ideas <br /> with smallcases
        </h1>
        <p className="text-[1.4rem]">
          Get simple smart investment portfolios <br />
          curated by experts{" "}
        </p>
        <div className=" flex py-6 lg:gap-16 xs:gap-5 ">
          <button className="bg-blue-600 rounded font-bold text-white sm:py-1 sm:px-7 xs:py-1 xs:px-5  py-3 px-7 hover:bg-blue-500">
            {" "}
            Login{" "}
          </button>
          <button className="bg-slate-200 rounded font-bold text-blue-500 border border-blue-400 lg:py-3 lg:px-7  sm:py-1 sm:px-7 xs:py-1 xs:px-5  hover:bg-slate-100">
            {" "}
            See samllcase{" "}
          </button>
        </div>
        <p className="text-[1.2rem]"> Supported on India's largest brokers </p>

        <div className="py-5 flex gap-5">
          <div className="p-2  rounded-[100%] bg-slate-300 inline-block hover:bg-slate-200 shadow self-center ">
            <button>
              <img
                class=" "
                src="https://assets.smallcase.com/smallcase/assets/brokerLogo/small/angelbroking.svg"
                alt="Angel One"
              />
            </button>
          </div>
          <div className="p-2 rounded-[100%] bg-slate-300 inline-block hover:bg-slate-200 shadow self-center">
            <button>
              <img
                class=""
                src="https://assets.smallcase.com/smallcase/assets/brokerLogo/small/groww.svg"
                alt="Groww"
              />
            </button>
          </div>
          <div className="p-2  rounded-[100%] bg-slate-300 inline-block hover:bg-slate-200 shadow self-center">
            <button>
              <img
                class=""
                src="https://assets.smallcase.com/smallcase/assets/brokerLogo/small/upstox.svg"
                alt="Upstox"
              />
            </button>
          </div>
          <div className="p-2  rounded-[100%] bg-slate-300 inline-block hover:bg-slate-200 shadow self-center">
            <button>
              <img
                class=""
                src="https://assets.smallcase.com/smallcase/assets/brokerLogo/small/kite.svg"
                alt="Zerodha"
              />
            </button>
          </div>
          <div className="p-2  rounded-[100%] bg-slate-300 inline-block hover:bg-slate-200 shadow self-center ">
            <button>
              <img
                src="https://assets.smallcase.com/smallcase/assets/brokerLogo/small/dhan.svg"
                alt=""
                class="BrokerPartnersModal__broker-logo__iv7vC block img-24 mr12"
              />
            </button>
          </div>
          <div className="p-2  rounded-[100%] bg-slate-300 inline-block hover:bg-slate-200 shadow self-center">
            <button>
              <img
                src="https://assets.smallcase.com/smallcase/assets/brokerLogo/small/dhan.svg"
                alt=""
                class="BrokerPartnersModal__broker-logo__iv7vC block img-24 mr12"
              />
            </button>
          </div>
        </div>
        <p>
          <span> Don't have a broker account? </span>
          <button className="cursor-pointer text-blue-700">
            Open Broker Account
          </button>
        </p>
      </div>
    </>
  );
};

export default Home;
