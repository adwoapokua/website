import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from 'react'
import { client } from '../../lib/sanityClient'
import { urlFor } from '../../lib/urlFor'
import type { Project } from '../../types/sanity'

function Project() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    client.fetch<Project[]>(`*[_type == "project"] | order(_createdAt desc)`)
      .then(data => setProjects(data))
  }, [])

  return (
    <section id="projects" className="min-h-screen flex flex-col gap-8 mx-8 mb-30 lg:mx-20 scroll-mt-24">
      <div className="text-primary flex justify-between">
        <p className="text-3xl font-bold">Projects</p>
        <a href="https://github.com/Adwoa-p?tab=repositories" className="flex gap-2 items-center"> <span className="text-lg ">View All</span> <ArrowRight /> </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 text-secondary gap-8">
        {
            projects.map((p) => {
            return (
                <div key={p._id} className="flex flex-col w-full border shadow-xl">
                    <div><img src={urlFor(p.image).width(600).url()} alt={p.name} className="w-full h-56 object-cover mb-2"/></div>
                    <div className="flex flex-col gap-5 p-5">
                        <div className="flex flex-wrap gap-1.5">
                            {
                                p.tools.map((tool) => (
                                    <div className="rounded-2xl text-xs px-3 py-1 whitespace-nowrap text-center bg-accent/50 text-primary">{tool}</div>
                                ))
                            }
                        </div>
                        <div className="text-xl lg:text-lg font-bold">{p.name}</div>
                        <div className="text-sm ">{p.description}</div>
                        <a target="_blank" rel="noopener noreferrer" href={p.link}> <Button variant="outline">Github <FaGithub /></Button> </a>
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
