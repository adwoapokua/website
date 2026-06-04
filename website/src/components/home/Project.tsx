import { featuredProjects } from "@/data/projects";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";

function Project() {

  return (
    <section id="#projects" className="min-h-screen flex flex-col gap-8 px-8 mb-30">
      <div className="text-primary flex justify-between">
        <p className="text-3xl font-bold">Projects</p>
        <a href="https://github.com/Adwoa-p?tab=repositories" className="flex gap-2 items-center"> <span className="text-lg ">View All</span> <ArrowRight /> </a>
      </div>
      <div className="grid col-span-1 text-secondary gap-8">
        {
            featuredProjects.map((project) => {
            return (
                <div key={project.id} className="flex flex-col w-90 h-150 border shadow-xl">
                    <div><img src={project.image} alt={project.name} className="w-full h-70 mb-2"/></div>
                    <div className="flex flex-col gap-3 p-5">
                        <div className="flex gap-1.5">
                            {
                                project.tools.map((tool) => (
                                    <div className="rounded-2xl px-4 py-2 whitespace-nowrap text-center bg-accent/50 text-primary">{tool}</div>
                                ))
                            }
                        </div>
                        <div className="text-xl font-bold">{project.name}</div>
                        <div>{project.description}</div>
                        <a target="_blank" rel="noopener noreferrer" href={project.link}> <Button variant="outline">Github <FaGithub /></Button> </a>
                    </div>
                </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Project
