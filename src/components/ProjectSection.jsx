import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "portfolio",
        description:" great form fill up ",
        image:"/projects/project1.png",
        tags:["html","CSS",],
        demoUrl: "https://web-portfolio-silk-ten.vercel.app/", // live project
       gitHubUrl: "https://github.com/CseManisha/WebPortfolio.git", // source code
    },

    {
        id: 2,
        title: "register section",
        description:" great view of cart option",
        image:"/projects/project2.png",
        tags:["ejs","css","Express"],
        demoUrl: "#link",
        gitHubUrl: "#link",
    },

    {
        id: 2,
        title: "login section",
        description:" great view of cart option",
        image:"/projects/project3.png",
        tags:["ejs","css","Express"],
        demoUrl: "#link",
        gitHubUrl: "#link",
    },
];


export const ProjectSection =() =>{
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xlfont-bold mb-4 text-center"> Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Here are some of my recent projects. Each project was carefully 
                  Crafted with attention to detail, performance , and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
                    {projects.map((projects,key) => (
                        <div key={key} 
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div> 
                                <img 
                                 src={projects.image} 
                                 alt={projects.title} 
                                 
                                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"  />
                            </div>
                            <div className="p-6">
                             <div className="flex flex-wrap gap-2 mb-4">
                               {projects.tags.map((tag) =>(
                                 <sapn className="px-2 py-1 text-xs font-mediam border rounded-full bg-secondary text-secondary-foreground"> 
                                    {tag}
                                 </sapn>
                               ))}
                             </div>
                            </div>
                            <h3 className="text-xl  font-semibold mb-1 " > {projects.title}</h3>
                           <p className="text-muted-foreground text-sm mb-4">  {projects.description}</p>
                           <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a
                                target="_blank"
                                 href={projects.demoUrl}
                                  className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    {" "}
                                    <ExternalLink size={20} />
                                </a>
                                <a
                                target="_blank"
                                 href={projects.gitHubUrl}
                                  className="text-foreground/80 hover:text-primary  transition-colors duration-300">
                                    {" "}
                                    <Github   size={20}  />
                                </a>
                               
                             </div> 

                           </div>
                        </div>
                    ))}

                </div>
                <div className="tect-center mt-12">
                    <a 
                     target="_blank"
                     href=""
                     className="cosmic-button w-fit flex items-center mx-auto gap-2">
                       
                        Check My Github <ArrowRight  size={16} />
                    </a>
                </div>
            </div>
         
        </section>
    )
}