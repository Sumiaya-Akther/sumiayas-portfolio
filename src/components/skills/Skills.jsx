import { motion } from "framer-motion";

const progressData = [
    { skill: "HTML", value: 95 },
    { skill: "CSS", value: 91 },
    { skill: "JavaScript", value: 85 },
    { skill: "React JS", value: 79 },
];

const circleData = [
    { skill: "Tailwind CSS", value: 85 },
    { skill: "Bootstrap", value: 85 },
    { skill: "Figma", value: 65 },
    { skill: "Express JS", value: 45 },
];

const Skills = () => {
    return (
        <section id="skills" className="text-center max-w-7xl mx-auto py-20">
            <h2 className="text-[2rem] mb-[70px] text-[#2c3a4f] font-bold">My Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10 text-[#345783] text-[1rem] px-4">
                {/* Left Column */}
                <div className="flex-1 space-y-5">
                    {progressData.map(({ skill, value }, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center justify-between"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <span className="w-[70px] text-left">{skill}</span>
                            <div className="flex-1 mx-2 h-2 bg-[#345783] rounded-[5px] overflow-hidden">
                                <div
                                    className="h-full bg-[#2c3a4f]"
                                    style={{ width: `${value}%` }}
                                ></div>
                            </div>
                            <span className="text-[0.9rem]">{value}%</span>
                        </motion.div>
                    ))}
                </div>

                {/* Right Column */}
                <div className="flex-1 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {circleData.map(({ skill, value }, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            className="w-[120px] h-[120px] relative rounded-full flex items-center justify-center text-white text-[0.9rem] transition-all duration-300 hover:shadow-xl hover:border-cyan-500"
                            style={{
                                background: `conic-gradient(#2c3a4f ${value}%, #345783 ${value}%)`,
                                border: "4px solid #444",
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="absolute w-[90px] h-[90px] bg-white rounded-full"
                                style={{ zIndex: 1 }}
                            ></div>
                            <div className="z-10 text-[#2c3a4f] font-semibold text-center px-2">
                                <p className="text-sm">{skill}</p>
                                <p className="text-xs">{value}%</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
