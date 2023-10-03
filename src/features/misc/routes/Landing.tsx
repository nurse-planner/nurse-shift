import { useNavigate } from "react-router";

import { MainHeader } from "@/components/Layout/MainHeader";
import storage from "@/utils/storage";

// import { useAuth } from "@/lib/auth";

export const Landing = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    if (storage.getToken()) {
      navigate("/dashboard");
    } else {
      navigate("/nurse-shift/auth/login");
    }
  };

  return (
    <div className="relative font-sans" id="home">
      <MainHeader />
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 "
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative pt-52 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              Nurse Shift Management with{" "}
              <span className="text-primary dark:text-white">Automation.</span>
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              현대의 바쁜 병원 환경에서 수간호사들은 수기로 간호사들의 근무표를
              작성하는 어려운 임무에 직면하고 있습니다. 자동화 시스템은 이를
              해결하여, 편안한 간호 생활을 할 수 있도록 도울 수 있습니다.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <div
                onClick={handleStart}
                className="relative flex h-11 w-full items-center cursor-pointer justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white ">
                  Get started
                </span>
              </div>
              <div className="relative flex h-11 w-full items-center justify-center cursor-pointer px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  Learn more
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
