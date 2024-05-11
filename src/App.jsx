import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [value, setValue] = useState(0);

  const evalu = (value) => {
    let res = eval(value);
    console.log(value + "=" + res);
    return res;
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container flex gap-5 bg-stone-300 mx-0 md:mx-auto  justify-center items-center flex-col">
        <div className="flex flex-col gap-3 my-10 py-5 px-5  bg-black rounded-2xl">
          <input
            type="text"
            placeholder="0"
            value={value}
            className="w-[17rem] py-3 px-3 outline-none rounded-xl text-right text-2xl"
          />
          <div className="flex gap-3">
            <button
              onClick={(e) => {
                setValue(0);
              }}
              className="rounded-2xl bg-orange-400 text-white text-xl w-[60px] h-[60px] hover:bg-orange-600"
            >
              AC
            </button>
            <button
              onClick={(e) => {
                if (value) {
                  console.log(typeof value);
                  let a = value.toString();
                  a = a.slice(0, a.length - 1);
                  console.log(a);
                  setValue(a);
                } else {
                  setValue(0);
                }
              }}
              className="rounded-2xl bg-orange-400 text-white text-xl px-6 py-4 hover:bg-orange-600"
            >
              C
            </button>
            <button
              onClick={(e) => {
                if (value == 0) {
                  setValue(e.target.name);
                } else {
                  setValue(value + e.target.name);
                }
              }}
              name="/"
              className="rounded-2xl bg-orange-400 text-white text-xl px-6 py-4 hover:bg-orange-600"
            >
              /
            </button>
            <button
              onClick={(e) => {
                if (value == 0) {
                  setValue(e.target.name);
                } else {
                  setValue(value + e.target.name);
                }
              }}
              name="%"
              className="rounded-2xl bg-gray-300 hover:bg-gray-400 text-black text-xl w-[60px] h-[60px]"
            >
              %
            </button>
          </div>
          <div className="flex gap-3">
            <button
              onClick={(e) => {
                if (value == 0) {
                  setValue(e.target.name);
                } else {
                  setValue(value + e.target.name);
                }
              }}
              name={7}
              className="rounded-2xl bg-slate-600 text-white text-xl px-6 py-4 hover:bg-slate-800"
            >
              7
            </button>
            <button
              onClick={(e) => {
                if (value == 0) {
                  setValue(e.target.name);
                } else {
                  setValue(value + e.target.name);
                }
              }}
              name={8}
              className="rounded-2xl bg-slate-600 text-white text-xl px-6 py-4 hover:bg-slate-800"
            >
              8
            </button>
            <button
              onClick={(e) => {
                if (value == 0) {
                  setValue(e.target.name);
                } else {
                  setValue(value + e.target.name);
                }
              }}
              name={9}
              className="rounded-2xl bg-slate-600 text-white text-xl px-6 py-4 hover:bg-slate-800"
            >
              9
            </button>
            <button
              onClick={(e) => {
                if (value == 0) {
                  setValue(e.target.name);
                } else {
                  setValue(value + e.target.name);
                }
              }}
              name="*"
              className="rounded-2xl bg-gray-300 hover:bg-gray-400 text-black text-xl w-[60px] h-[60px]"
            >
              *
            </button>
          </div>
          <div className="flex gap-3">
            <button
              onClick={(e) => {
                if (value == 0) {
                  setValue(e.target.name);
                } else {
                  setValue(value + e.target.name);
                }
              }}
              name={4}
              className="rounded-2xl bg-slate-600 text-white text-xl px-6 py-4 hover:bg-slate-800"
            >
              4
            </button>
            <button
              onClick={(e) => {
                if (value == 0) {
                  setValue(e.target.name);
                } else {
                  setValue(value + e.target.name);
                }
              }}
              name={5}
              className="rounded-2xl bg-slate-600 text-white text-xl px-6 py-4 hover:bg-slate-800"
            >
              5
            </button>
            <button
              onClick={(e) => {
                if (value == 0) {
                  setValue(e.target.name);
                } else {
                  setValue(value + e.target.name);
                }
              }}
              name={6}
              className="rounded-2xl bg-slate-600 text-white text-xl px-6 py-4 hover:bg-slate-800"
            >
              6
            </button>
            <button
              onClick={(e) => {
                if (value == 0) {
                  setValue(e.target.name);
                } else {
                  setValue(value + e.target.name);
                }
              }}
              name="-"
              className="rounded-2xl bg-gray-300 hover:bg-gray-400 text-black text-xl w-[60px] h-[60px]"
            >
              -
            </button>
          </div>
          <div className="flex gap-3">
            <button
              onClick={(e) => {
                if (value == 0) {
                  setValue(e.target.name);
                } else {
                  setValue(value + e.target.name);
                }
              }}
              name={1}
              className="rounded-2xl bg-slate-600 text-white text-xl px-6 py-4 hover:bg-slate-800"
            >
              1
            </button>
            <button
              onClick={(e) => {
                if (value == 0) {
                  setValue(e.target.name);
                } else {
                  setValue(value + e.target.name);
                }
              }}
              name={2}
              className="rounded-2xl bg-slate-600 text-white text-xl px-6 py-4 hover:bg-slate-800"
            >
              2
            </button>
            <button
              onClick={(e) => {
                if (value == 0) {
                  setValue(e.target.name);
                } else {
                  setValue(value + e.target.name);
                }
              }}
              name={3}
              className="rounded-2xl bg-slate-600 text-white text-xl px-6 py-4 hover:bg-slate-800"
            >
              3
            </button>
            <button
              onClick={(e) => {
                if (value == 0) {
                  setValue(e.target.name);
                } else {
                  setValue(value + e.target.name);
                }
              }}
              name="+"
              className="rounded-2xl bg-gray-300 hover:bg-gray-400 text-black text-xl w-[60px] h-[60px]"
            >
              +
            </button>
          </div>
          <div className="flex gap-3 ">
            <button
              onClick={(e) => {
                if (value == 0) {
                  setValue(e.target.name);
                } else {
                  setValue(value + e.target.name);
                }
              }}
              name={0}
              className="rounded-2xl w-1/4 bg-slate-600 text-white text-xl px-6 py-4 hover:bg-slate-800"
            >
              0
            </button>
            <button
              onClick={(e) => {
                if (value == 0) {
                  setValue(e.target.name);
                } else {
                  setValue(value + e.target.name);
                }
              }}
              name="."
              className="rounded-2xl w-1/4 bg-slate-600 text-white text-xl px-6 py-4 hover:bg-slate-800"
            >
              •
            </button>
            <button
              onClick={(e) => {
                setValue(evalu(value));
              }}
              name="="
              className="rounded-2xl w-1/2 bg-orange-400 text-white text-xl px-6 py-4 hover:bg-orange-600"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
