import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Home = ({ state: { token } }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/todos");
    }
  }, [token]);

  return (
    <main className="h-full px-6 lg:px-12 bg-purple-900 text-white">
      <section className="flex items-center justify-evenly w-full h-full  ">
        <div className=" ">
          <span className="font-bold uppercase ">
            Get Started with Your Todo List!
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold text-pink-500">
            ToDo
            <br />
            List
          </h1>
          <p className="font-bold mb-1">Start managing your tasks with ease.</p>
          <p>Add, prioritize, and complete tasks effortlessly.</p>
          <Link
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 my-2.5 ml-8"
            to="/signup"
          >
            <span>
              Get Started <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
        <div>
          <img
            className="p-6 w-8/12 m-auto"
            src="https://img.freepik.com/free-vector/check-list-with-businessman-flat-design_79603-145.jpg?w=740&t=st=1688538517~exp=1688539117~hmac=6964d9fdd2d0a42d06f3030b9f3c5ce62a5ae3148f58584b86f2568566e2ac0a"
            alt="Todo List"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
