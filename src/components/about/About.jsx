import { motion } from "framer-motion";
import myPic from "../../assets/myPic.jpg";

const About = () => {
    return (
        <section id="about" className="py-20">
            <motion.div
                className="flex flex-col items-center text-center gap-8 px-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <img
                    src={myPic}
                    alt="Sumiaya Akther"
                    className="w-[140px] h-[140px] object-cover rounded-full shadow-md"
                />
                <h4 className="text-[1.8rem] font-semibold text-[#2c3a4f]">
                    Hi, I'm Sumiaya Akther, nice to meet you!
                </h4>
                <p className=" md:text-[1.2rem] text-[#345783] leading-[25px] max-w-3xl">
                    I'm a web developer with a strong foundation in HTML, CSS, JavaScript, and React. <br />
                    I'm driven by a desire to create user-friendly and visually appealing websites that deliver exceptional user experiences. <br />
                    I have a proven track record of successful project delivery, prioritizing clear communication and client satisfaction throughout the entire development process. <br />
                    I'm always eager to learn and grow, and I'm excited to contribute my skills to your next web project. Let's connect and discuss how I can help you achieve your online goals.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
