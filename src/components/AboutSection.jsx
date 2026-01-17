import { Briefcase, Code, User } from "lucide-react"
import { useEffect, useState } from "react"

export const AboutSection = () => {

    const [cvLink,setCvLink] = useState("");

    useEffect(()  =>{
        fetch("http://localhost:3000/api/cv")
        .then((res)=>res.json())
        .then((data) => setCvLink(data.url))
        .catch((err) => console.error("Error fetching CV link:", err));
    },[]);

    return (

        <section id="about" className="py-24 px-4 relative " >
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center  ">
                    <div className="space-y-6">
                        <h3> Passionate Web Developer &  Tech Creator</h3>

                        <p className="text-muted-foreground"> 
                            Full Stack Developer, passionate about creating modern, responsive, and user-centric web interfaces.
                        </p>

                        <p className="text-muted-foreground">
                           Passionate Full Stack Developer developer skilled in building responsive and user-friendly web applications.
                           Strong foundation in React, JavaScript, HTML, Tailwind CSS, Node.js , Express, MongoDb.
                           Focused on clean UI/UX design and seamless user experiences.
                           Enjoy solving problems and continuously learning new web technologies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button" >
                                {" "}
                                Get In Touch
                            </a>
                            {cvLink &&(

                           

                            <a
                             href={cvLink}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="px-6 py-2 rounded-full border border-primary text-primary  hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                             )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover bg-primary/15">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/20">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Frontend Development</h4>
                                    <p className="text-muted-foreground">
                                        Build responsive and interactive web interfaces using modern frontend technologies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover bg-primary/15">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/20">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Backend Development</h4>
                                    <p className="text-muted-foreground">
                                        Build secure and scalable server-side applications using Node.js, Express, and MongoDB.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover bg-primary/15">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/20">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        
                                    </p>Design intuitive, user-friendly interfaces focused on usability and visual consistency.
                                </div>

                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover bg-primary/15">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/20">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Problem Solving</h4>
                                    <p className="text-muted-foreground">
                                        Analyze problems logically and implement efficient, scalable solutions.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>




                </div>
            </div>
        </section>
    )
}