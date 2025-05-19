import React, { useState, useEffect } from "react";

const Header = () => {
  const [regId, setRegId] = useState("");
  const [name, setName] = useState("");
  const [repeat, setRepeat] = useState("");
  const [data, setData] = useState([]);
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("users"));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== repeat) {
      alert("Passwords do not match");
      return;
    }

    const newUser = {
      id: regId,
      fullname: name,
      email,
      number,
    };

    const updatedData = [...data, newUser];
    setData(updatedData);
    localStorage.setItem("users", JSON.stringify(updatedData));

    setName("");
    setEmail("");
    setRegId("");
    setNumber("");
    setPassword("");
    setRepeat("");
  };

  return (
    <>
    <div className="backraund  from-cyan-500/30">

    
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-slate-900/80 p-10 rounded-3xl shadow-2xl max-w-2xl w-full mx-auto border-4 border-slate-800 backdrop-blur-xl mt-10"
      >
       
        <div className="pointer-events-none select-none">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-radial from-cyan-500/30 via-transparent to-transparent rounded-full blur-2xl opacity-40"></div>
          <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-radial from-fuchsia-500/30 via-transparent to-transparent rounded-full blur-2xl opacity-40"></div>
        </div>
        <h2 className="text-3xl font-extrabold mb-8 text-center border-b-2 border-slate-800 pb-4 text-cyan-300 tracking-wide">
          Registration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block mb-2 font-semibold text-cyan-300">Full Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 bg-blue-950/70 border-2 border-blue-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 transition"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-cyan-300">Email</label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-blue-950/70 border-2 border-blue-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 transition"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-cyan-300">Register Id</label>
            <input
              required
              value={regId}
              onChange={(e) => setRegId(e.target.value)}
              type="number"
              placeholder="Enter your Id"
              className="w-full p-3 bg-blue-950/70 border-2 border-blue-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 transition"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-cyan-300">Phone Number</label>
            <input
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="number"
              placeholder="Enter your number"
              className="w-full p-3 bg-blue-950/70 border-2 border-blue-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 transition"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-cyan-300">Password</label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 bg-blue-950/70 border-2 border-blue-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500 transition"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-cyan-300">Confirm Password</label>
            <input
              required
              value={repeat}
              onChange={(e) => setRepeat(e.target.value)}
              type="password"
              placeholder="Confirm your password"
              className="w-full p-3 bg-blue-950/70 border-2 border-blue-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500 transition"
            />
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="
              w-full
              bg-gradient-to-r from-cyan-400 via-blue-700 to-fuchsia-500
              text-white py-3 rounded-2xl font-bold shadow-xl
              hover:opacity-90 hover:scale-[1.02]
              transition-all duration-300 tracking-wide text-lg
              border-none outline-none
              ring-2 ring-transparent hover:ring-cyan-400 focus:ring-fuchsia-400
            "
          >
            Register
          </button>
        </div>
      </form>
      </div>
      <div className="backraund">

      <div className="min-h-screen flex items-center justify-center py-12 px-2 relative overflow-hidden">

        <div className="absolute inset-0 z-0"></div>

        <div className="absolute -top-10 -left-10 w-[600px] h-[600px] bg-gradient-radial from-cyan-400/50 via-transparent to-transparent animate-pulse-slow rounded-full opacity-30 z-0"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-fuchsia-400/40 via-transparent to-transparent animate-pulse-slow rounded-full opacity-30 z-0"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full p-8 rounded-3xl shadow-2xl border-4 border-slate-800 bg-slate-900/70 backdrop-blur-xl">
          {data.map((user) => (
            <div
              key={user.id}
              className="
                relative
                bg-blue-950/90
                p-6
                rounded-2xl
                shadow-xl
                text-center
                space-y-4
                border-2
                border-blue-800
                transition-all
                duration-300
                hover:border-cyan-400
                hover:scale-105
                group
              "
              style={{
                boxShadow: '0 4px 24px 0 #00f2fe22, 0 1.5px 6px #fc00ff22'
              }}
            >
              <div className="flex justify-center">
                <span className="inline-block rounded-full p-1 bg-gradient-to-br from-slate-900 to-cyan-400">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-slate-900 shadow-sm group-hover:border-cyan-400 transition-all duration-300"
                  />
                </span>
              </div>
              <h2 className="text-xl font-bold text-cyan-400 group-hover:text-fuchsia-400 transition-colors duration-300">Name: {user.fullname}</h2>
              <p className="text-gray-300">
                <span className="font-semibold text-cyan-300">Email:</span> {user.email}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-cyan-300">Phone:</span> {user.number}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-cyan-300">Id:</span> {user.id}
              </p>
            </div>
          ))}
        </div>
      
        <style>
          {`
            @keyframes pulse-slow {
              0%, 100% { opacity: 0.25; }
              50% { opacity: 0.5; }
            }
            .animate-pulse-slow {
              animation: pulse-slow 6s ease-in-out infinite;
            }
          `}
        </style>
      </div>
      </div>
    </>
  );
};

export default React.memo(Header);