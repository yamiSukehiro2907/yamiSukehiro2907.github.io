import image from "@/assets/photo.jpg";
import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            {/* Background same as Education Section (clean, minimal) */}

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                >
                    {/* Heading — matched to Education Section */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="text-gradient">Me</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{opacity: 0, x: -40}}
                            animate={isInView ? {opacity: 1, x: 0} : {}}
                            transition={{duration: 0.6}}
                            className="space-y-5"
                        >
                            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                                Backend engineer specializing in building production-grade systems using Spring Boot
                                and the MERN stack. Skilled at designing scalable APIs, real-time features, secure
                                authentication flows, and optimized cloud deployments.
                            </p>

                            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                                Known for fast adaptability, clean engineering mindset, and writing maintainable,
                                scalable codebases. Currently enhancing my expertise in infrastructure design,
                                cloud-native workflows, and high-performance backend architectures.
                            </p>
                        </motion.div>

                        {/* Photo (no hover, no shadow, fixed dimensions & circular) */}
                        <motion.div
                            initial={{opacity: 0, x: 40}}
                            animate={isInView ? {opacity: 1, x: 0} : {}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="flex justify-center md:justify-end"
                        >
                            <div className="relative p-4 rounded-full">
                                <motion.img
                                    src={image}
                                    alt="Profile"
                                    initial={{y: 0}}
                                    animate={{y: [0, -6, 0]}}
                                    transition={{repeat: Infinity, duration: 4}}
                                    className="relative w-80 md:w-94 h-auto md:h-auto
                  max-h-[32rem] max-w-[31.75rem]
                  rounded-full object-contain border-4 border-primary/40
                  -mt-6"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
