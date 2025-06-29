import React from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import myPic from "../../assets/myPic.jpg";


const Banner = () => {
    return (
        <section id="home" className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row justify-between items-center gap-10">

                {/* Left Side: Text Content */}
                <motion.div
                    className=" text-center md:text-left"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl lg:text-4xl font-semibold text-[#2c3a4f] mb-3">
                        Assalamu Alaikum,
                    </h1>
                    <h2 className="text-4xl lg:text-5xl font-semibold text-[#345783] mb-3">
                        I'm Sumiaya Akther
                    </h2>
                    <h4 className="text-xl text-[#2c3a4f] font-medium mb-5">
                        A Creative Frontend Developer
                    </h4>
                    <p className="text-[#345783] md:text-[1.2rem] mb-7 leading-relaxed">
                        I'm a passionate front-end developer. Passionate about creating beautiful
                        <br className="hidden md:inline" /> and functional web applications.
                        I create user-centered websites that are both beautiful  <br className="hidden md:inline" />
                        and functional. Let's build something amazing together. Explore my portfolio.
                    </p>
                    <div className="flex justify-center md:justify-start md:flex-row items-center gap-4 mb-6">
                        <a
                            href="#contact"
                            className="px-6 py-2 bg-[#2c3a4f] text-white rounded-lg shadow hover:bg-[#345783] transition"
                        >
                            Hire Me
                        </a>
                        <a
                            href="/public/resume.pdf"
                            download="Sumiaya-Akther-Resume.pdf"
                            className="px-6 py-2 border border-[#2c3a4f] text-#2c3a4f rounded-lg hover:bg-cyan-50 transition"
                        >
                            Download CV
                        </a>
                    </div>

                    <div className="flex gap-6 justify-center md:justify-start text-2xl text-[#2c3a4f]">
                        <a href="https://github.com/Sumiaya-Akther" target="_blank" rel="noreferrer">
                            <FaGithub className="hover:text-gray-800 transition" />
                        </a>
                        <a href="https://www.linkedin.com/in/sumiaya-akther/" target="_blank" rel="noreferrer">
                            <FaLinkedin className=" transition" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <FaTwitter className=" transition" />
                        </a>
                    </div>
                </motion.div>

                {/* Right Side: Image */}
                <motion.div
                    className=""
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={myPic}
                        alt="Sumiaya Akther"
                        className="w-70 md:w-78 lg:w-86 max-w-md mx-auto rounded-full md:rounded-xl shadow-xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;