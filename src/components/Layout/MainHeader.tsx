import storage from "@/utils/storage";
import { useNavigate } from "react-router";

export const MainHeader = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    if (storage.getToken()) {
      navigate("dashboard");
    } else {
      navigate("auth/login");
    }
    navigate("dashboard");
  };

  return (
    <div>
      <nav className="z-10 w-full absolute font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
            <input
              aria-hidden="true"
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="hidden peer"
            />
            <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
              <a
                href="/"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <svg
                  width="270"
                  height="56"
                  viewBox="0 0 354 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M63.2812 8.89062H71.9531L81.3281 29.2812V8.89062H89.4531V43.8906H80.7812L71.4062 24.6719V43.8906H63.2812V8.89062ZM95.8594 18.0312H103.984V34.6719C103.984 36.1823 104.219 37.224 104.688 37.7969C105.208 38.3698 105.911 38.6562 106.797 38.6562C107.839 38.6562 108.906 38.0312 110 36.7812C111.094 35.5312 111.641 34.0469 111.641 32.3281V18.0312H119.766V43.8906H111.641V41.0781C110.703 42.0677 109.531 42.849 108.125 43.4219C106.771 43.9948 105.417 44.2812 104.062 44.2812C101.667 44.2812 99.6875 43.4479 98.125 41.7812C96.6146 40.1667 95.8594 37.8229 95.8594 34.75V18.0312ZM134.297 22.4844C135.13 21.1302 136.276 20.0625 137.734 19.2812C139.193 18.5 140.964 18.0833 143.047 18.0312V24.125C140.651 24.1771 138.594 25.2188 136.875 27.25C135.156 29.2812 134.297 31.7552 134.297 34.6719V43.8906H126.172V18.0312H134.297V22.4844ZM158.75 17.6406C162.396 17.6406 165.156 18.4219 167.031 19.9844C168.906 21.5469 169.974 23.6823 170.234 26.3906H162.109C162.109 25.4531 161.771 24.6979 161.094 24.125C160.469 23.5521 159.74 23.2656 158.906 23.2656C157.917 23.2656 157.161 23.5781 156.641 24.2031C156.12 24.776 155.859 25.349 155.859 25.9219C155.859 26.7031 156.354 27.3802 157.344 27.9531C158.385 28.526 160.026 29.0469 162.266 29.5156C164.818 30.0365 166.797 30.9479 168.203 32.25C169.661 33.5 170.391 34.9062 170.391 36.4688C170.391 38.7604 169.375 40.6094 167.344 42.0156C165.365 43.474 162.604 44.2031 159.062 44.2031C155.729 44.2031 153.099 43.4479 151.172 41.9375C149.245 40.4792 148.073 38.3438 147.656 35.5312H155.781C155.781 36.5729 156.094 37.3542 156.719 37.875C157.344 38.3438 158.073 38.5781 158.906 38.5781C159.948 38.5781 160.755 38.3958 161.328 38.0312C161.953 37.6146 162.266 37.1198 162.266 36.5469C162.266 35.9219 161.849 35.375 161.016 34.9062C160.234 34.3854 158.828 33.9167 156.797 33.5C153.932 32.875 151.693 31.8854 150.078 30.5312C148.516 29.125 147.734 27.4323 147.734 25.4531C147.734 23.1615 148.724 21.2865 150.703 19.8281C152.682 18.3698 155.365 17.6406 158.75 17.6406ZM186.875 17.7188C190.885 17.7188 194.01 19.2292 196.25 22.25C198.542 25.2188 199.557 28.9948 199.297 33.5781H182.422C182.37 35.0365 182.76 36.2344 183.594 37.1719C184.479 38.1094 185.495 38.5781 186.641 38.5781C187.734 38.5781 188.698 38.2917 189.531 37.7188C190.365 37.1458 190.885 36.5208 191.094 35.8438H199.219C198.229 38.1875 196.693 40.1667 194.609 41.7812C192.526 43.3958 189.87 44.2031 186.641 44.2031C182.839 44.2031 179.818 43.0312 177.578 40.6875C175.391 38.3438 174.297 35.1667 174.297 31.1562C174.297 27.1458 175.443 23.9167 177.734 21.4688C180.026 18.9688 183.073 17.7188 186.875 17.7188ZM186.719 23.3438C185.417 23.3438 184.375 23.7865 183.594 24.6719C182.812 25.5573 182.422 26.651 182.422 27.9531H191.172C191.12 26.4948 190.703 25.375 189.922 24.5938C189.193 23.7604 188.125 23.3438 186.719 23.3438ZM235.234 8.42188C239.141 8.42188 242.135 9.46354 244.219 11.5469C246.354 13.6302 247.422 16.0521 247.422 18.8125H239.297C239.297 17.5625 238.88 16.5208 238.047 15.6875C237.266 14.8021 236.302 14.3594 235.156 14.3594C234.167 14.3594 233.307 14.6719 232.578 15.2969C231.901 15.9219 231.562 16.7031 231.562 17.6406C231.562 18.7865 232.005 19.8021 232.891 20.6875C233.828 21.5729 235.182 22.3021 236.953 22.875C240.495 24.0208 243.255 25.5833 245.234 27.5625C247.214 29.4896 248.203 31.8333 248.203 34.5938C248.203 37.3021 247.109 39.5938 244.922 41.4688C242.786 43.3958 239.714 44.3594 235.703 44.3594C231.589 44.3594 228.464 43.3698 226.328 41.3906C224.193 39.4115 222.995 36.7031 222.734 33.2656H230.859C230.859 34.8802 231.276 36.1562 232.109 37.0938C232.995 37.9792 234.167 38.4219 235.625 38.4219C236.979 38.4219 237.995 38.0573 238.672 37.3281C239.401 36.599 239.766 35.7396 239.766 34.75C239.766 33.5521 239.271 32.4583 238.281 31.4688C237.292 30.4792 235.885 29.6458 234.062 28.9688C230.365 27.5625 227.604 26 225.781 24.2812C224.01 22.5625 223.125 20.4271 223.125 17.875C223.125 15.4271 224.141 13.2396 226.172 11.3125C228.203 9.38542 231.224 8.42188 235.234 8.42188ZM253.359 8.89062H261.484V21.0781C262.266 20.0885 263.385 19.2812 264.844 18.6562C266.302 17.9792 267.734 17.6406 269.141 17.6406C271.38 17.6406 273.177 18.3438 274.531 19.75C275.938 21.1042 276.641 22.9792 276.641 25.375V43.8906H268.516V26.7812C268.516 25.7917 268.281 25.0104 267.812 24.4375C267.396 23.8646 266.745 23.5781 265.859 23.5781C264.818 23.5781 263.828 24.151 262.891 25.2969C261.953 26.4427 261.484 27.6927 261.484 29.0469V43.8906H253.359V8.89062ZM283.047 8.1875H291.172V15.6875H283.047V8.1875ZM283.047 18.0312H291.172V43.8906H283.047V18.0312ZM308.984 8.89062H315.547V14.5156H311.328C310.599 14.5156 310 14.776 309.531 15.2969C309.062 15.7656 308.828 16.4427 308.828 17.3281V19.5156H315.391V25.1406H308.828V43.8906H300.703V25.1406H296.641V19.5156H300.703V16.4688C300.703 14.2812 301.432 12.4844 302.891 11.0781C304.401 9.61979 306.432 8.89062 308.984 8.89062ZM325.156 10.6094H333.281V18.0312H339.766V23.6562H333.281V34.3594C333.281 35.7135 333.75 36.7031 334.688 37.3281C335.677 37.9531 337.37 38.2656 339.766 38.2656V43.8906C333.776 43.9427 329.844 43.3438 327.969 42.0938C326.094 40.8958 325.156 38.7083 325.156 35.5312V23.6562H320V18.0312H325.156V10.6094Z"
                    fill="url(#paint0_linear_1_53)"
                  />
                  <path
                    d="M27.69 13.845C34.4764 13.845 40.8081 15.7995 46.15 19.1753L41.535 41.535H13.845L9.23001 19.173C14.7536 15.6824 21.1559 13.8345 27.69 13.845Z"
                    stroke="#6B68F5"
                    stroke-width="4.615"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.075 27.69H32.305"
                    stroke="#6B68F5"
                    stroke-width="4.615"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27.69 23.075V32.305"
                    stroke="#6B68F5"
                    stroke-width="4.615"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_53"
                      x1="56.9949"
                      y1="22.2778"
                      x2="210.796"
                      y2="24.0075"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#6B68F5" />
                      <stop offset="0.371703" stop-color="#4389D9" />
                      <stop offset="1" stop-color="#5797F8" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>

              <div className="relative flex items-center lg:hidden max-h-10">
                <label
                  role="button"
                  htmlFor="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  className="relative  p-6 -mr-6"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                </label>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"
            ></div>
            <div
              className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                            dark:shadow-none dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                  <li>
                    <a
                      href="https://github.com/nurse-planner"
                      className="block md:px-4 transition hover:text-primary hover:font-bold"
                    >
                      <span>Github</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-12 lg:mt-0">
                <div
                  onClick={handleStart}
                  className="relative flex h-9 w-full items-center justify-center cursor-pointer px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-sm font-semibold text-white">
                    Get Started
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
