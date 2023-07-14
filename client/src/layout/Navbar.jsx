import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const handleLogout = async () => {
    await dispatch(logout());
    alert("logged out successfully!");
    navigate("/");
  };
  return (
    <header className="sticky top-0 z-[100] drop-shadow-md bg-white w-full flex-none text-sm font-semibold leading-6 text-slate-900">
      <nav
        aria-label="Global"
        className="mx-auto max-w-container px-4 sm:px-6 lg:px-8"
      >
        <div className="relative flex items-center py-4">
          <div className="absolute inset-x-0 bottom-0 h-px bg-slate-900/5" />
          <Link
            className="mr-auto flex items-center justify-center  text-slate-900"
            to="/"
          >
            <svg
              className="h-12 w-auto"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {"{"}" "{"}"}
                <path
                  d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35287C10.9563 2.88237 13.0437 2.88237 15.0496 3.35287C17.827 4.00437 19.9956 6.17301 20.6471 8.95043C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z"
                  stroke="#0095FF"
                  strokeWidth="1.5"
                />
                {"{"}" "{"}"}
                <path
                  d="M3.35288 8.95043C2.88237 10.9563 2.88237 13.0437 3.35288 15.0496C4.00437 17.827 6.17301 19.9956 8.95044 20.6471C10.9563 21.1176 13.0437 21.1176 15.0496 20.6471C17.827 19.9956 19.9956 17.827 20.6471 15.0496C21.1176 13.0437 21.1176 10.9563 20.6471 8.95043C19.9956 6.17301 17.827 4.00437 15.0496 3.35287"
                  stroke="#363853"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                {"{"}" "{"}"}
                <path
                  d="M7.84912 8.86907C7.55622 8.57618 7.08135 8.57618 6.78846 8.86907C6.49556 9.16197 6.49556 9.63684 6.78846 9.92973L7.84912 8.86907ZM8.35906 10.4397L7.82873 10.97C7.96938 11.1107 8.16015 11.1897 8.35906 11.1897C8.55797 11.1897 8.74874 11.1107 8.88939 10.97L8.35906 10.4397ZM10.9699 8.88946C11.2628 8.59657 11.2628 8.12169 10.9699 7.8288C10.677 7.53591 10.2022 7.53591 9.90928 7.8288L10.9699 8.88946ZM13.0403 9.16954C12.6261 9.16954 12.2903 9.50533 12.2903 9.91954C12.2903 10.3338 12.6261 10.6695 13.0403 10.6695V9.16954ZM16.6812 10.6695C17.0955 10.6695 17.4312 10.3338 17.4312 9.91954C17.4312 9.50533 17.0955 9.16954 16.6812 9.16954V10.6695ZM7.84912 14.0704C7.55622 13.7775 7.08135 13.7775 6.78846 14.0704C6.49556 14.3633 6.49556 14.8382 6.78846 15.1311L7.84912 14.0704ZM8.35906 15.641L7.82873 16.1714C8.12162 16.4643 8.5965 16.4643 8.88939 16.1714L8.35906 15.641ZM10.9699 14.0908C11.2628 13.7979 11.2628 13.3231 10.9699 13.0302C10.677 12.7373 10.2022 12.7373 9.90928 13.0302L10.9699 14.0908ZM13.0403 14.3709C12.6261 14.3709 12.2903 14.7067 12.2903 15.1209C12.2903 15.5351 12.6261 15.8709 13.0403 15.8709V14.3709ZM16.6812 15.8709C17.0955 15.8709 17.4312 15.5351 17.4312 15.1209C17.4312 14.7067 17.0955 14.3709 16.6812 14.3709V15.8709ZM6.78846 9.92973L7.82873 10.97L8.88939 9.90935L7.84912 8.86907L6.78846 9.92973ZM8.88939 10.97L10.9699 8.88946L9.90928 7.8288L7.82873 9.90935L8.88939 10.97ZM13.0403 10.6695H16.6812V9.16954H13.0403V10.6695ZM6.78846 15.1311L7.82873 16.1714L8.88939 15.1107L7.84912 14.0704L6.78846 15.1311ZM8.88939 16.1714L10.9699 14.0908L9.90928 13.0302L7.82873 15.1107L8.88939 16.1714ZM13.0403 15.8709H16.6812V14.3709H13.0403V15.8709Z"
                  fill="#0095FF"
                />
                {"{"}" "{"}"}
              </g>
            </svg>
            <span className="mx-3 text-3xl font-extrabold tracking-tight text-slate-900">
              TodoList{" "}
            </span>
          </Link>
          {user && user.userName && (
            <div className="text-center mr-auto text-purple-900">
              <h1 className="uppercase">welcome, {user.userName}</h1>
            </div>
          )}
          <div className="hidden lg:flex lg:items-center">
            <Link to="/contact">Contact</Link>
            <Link className="ml-8" to="/templates">
              About
            </Link>

            <Link className="ml-8" to="/documentation">
              Documentation
            </Link>
          </div>

          <button
            type="button"
            className="-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden"
          >
            <span className="sr-only">Open navigation</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-900">
              <path
                d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
            {token ? (
              <button
                onClick={handleLogout}
                className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-5 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login">Sign in</Link>
                <Link
                  className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8"
                  to="/signup"
                >
                  <span>
                    Register Me <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
