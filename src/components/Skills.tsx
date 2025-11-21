import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";
import {Badge} from "@/components/ui/badge";

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Java", "JavaScript", "TypeScript", "Python"],
        },
        {
            title: "Backend",
            skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Node.js", "Express.js"],
        },
        {
            title: "Frontend",
            skills: ["React", "React Router", "Next.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
        },
        {
            title: "Databases",
            skills: ["MySQL (Advanced)", "MongoDB", "PostgreSQL"],
        },
        {
            title: "APIs & Web",
            skills: ["RESTful APIs", "WebSocket", "JWT Authentication", "SOAP APIs", "Socket.IO"],
        },
        {
            title: "Tools",
            skills: ["Maven", "Git", "Postman", "OAuth2", "Redux Toolkit", "Mongoose"],
        },
        {
            title: "Cloud & DevOps",
            skills: ["Render", "Netlify", "MongoDB Atlas", "GCP", "CORS Configuration"],
        },
        {
            title: "Concepts",
            skills: ["OOPS", "DSA", "DBMS", "Operating Systems", "SDLC"],
        },
    ];

    return (
        <section id="skills" className="py-24 bg-card/50">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                animate={isInView ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                            >
                                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <Badge
                                            key={i}
                                            variant="secondary"
                                            className="px-4 py-2 text-sm bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
