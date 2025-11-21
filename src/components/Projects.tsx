import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ExternalLink, Github} from "lucide-react";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const projects = [
        {
            period: "Nov 2024 – Apr 2025",
            title: "Bricks Learning Management System",
            tech: "Spring Boot • Java • Maven • MySQL • React Native",
            description: [
                "Production-ready LMS for schools and coaching centers",
                "RESTful APIs with Spring Security and JWT authentication",
                "Normalized MySQL database schema",
            ],
            links: {
                github: "https://github.com/yamiSukehiro2907/Bricks-Ai-LMS",
                demo: "https://bricks.org.in",
            },
        },
        {
            period: "Aug 2025 – Oct 2025",
            title: "Studi.io - Real-Time Collaborative Platform",
            tech: "MERN • Socket.IO • Fabric.js • Redux Toolkit • Cloudinary",
            description: [
                "Real-time chat and interactive whiteboard",
                "Deployed on Render, Netlify, MongoDB Atlas",
                "Solved CORS and httpOnly cookie authentication",
            ],
            links: {
                github: "https://github.com/yamiSukehiro2907/studi.io",
                demo: "https://studiio.netlify.app/",
            },
        },
        {
            period: "May 2025 – Jun 2025",
            title: "devStreak - Open-Source Activity Tracker",
            tech: "Spring Boot • React • Tailwind CSS • PostgreSQL",
            description: [
                "Plugin-based architecture for platform integrations",
                "Comprehensive developer documentation",
                "Open-source with community contributions",
            ],
            links: {
                github: "https://github.com/yamiSukehiro2907/devStreak",
            },
        },
    ];

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 50}}
                                animate={isInView ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.6, delay: index * 0.2}}
                            >
                                <Card
                                    className="p-6 h-full flex flex-col hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
                                    <p className="text-primary text-sm font-semibold mb-3">{project.period}</p>
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{project.tech}</p>
                                    <ul className="space-y-2 mb-6 flex-1">
                                        {project.description.map((item, i) => (
                                            <li key={i} className="text-muted-foreground text-sm flex items-start">
                                                <span className="text-primary mr-2">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex gap-3">
                                        {project.links.github && (
                                            <Button variant="outline" size="sm" className="flex-1" asChild>
                                                <a href={project.links.github} target="_blank"
                                                   rel="noopener noreferrer">
                                                    <Github size={16} className="mr-2"/>
                                                    GitHub
                                                </a>
                                            </Button>
                                        )}
                                        {project.links.demo && (
                                            <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90" asChild>
                                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink size={16} className="mr-2"/>
                                                    Demo
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
