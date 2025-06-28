import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-[#2c3a4f] shadow-sm sticky top-0 z-50 px-4">
            <div className='w-10/12 mx-auto flex justify-between'>
                {/* Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl text-cyan-600 font-bold">Sumiaya.</a>
                </div>

                {/* Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-[16px] text-white px-1">
                        <li><a href="#home" className="hover:text-cyan-500 transition">Home</a></li>
                        <li><a href="#about" className="hover:text-cyan-500 transition">About</a></li>
                        <li><a href="#skills" className="hover:text-cyan-500 transition">Skills</a></li>
                        <li><a href="#projects" className="hover:text-cyan-500 transition">Projects</a></li>
                        <li><a href="#contact" className="hover:text-cyan-500 transition">Contact</a></li>
                    </ul>
                </div>

                {/* End */}
                <div className="navbar-end">
                    <a
                        href="https://drive.google.com/file/d/1B9BONUqIlZHS0U4mJIlGqGgBHR2bLX-L/view?usp=sharing"
                        className="btn bg-[#345783] text-white hover:bg-cyan-700 transition"
                    >
                        My Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;