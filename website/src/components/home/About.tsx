  import {
  FaReact,
  FaJava,
  FaJs,
  FaSitemap,
  FaPython,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiDjango,
  SiTypescript,
} from "react-icons/si";

  
  const skills= [
  FaJava,
  SiSpringboot,
  FaReact,
  FaPython,
  SiDjango,
  FaJs,
  SiTypescript,
  FaSitemap,
];


function About() {
  return (
    <section className="min-h-screen flex flex-col gap-8 px-10" id="#about" >
      <div className="text-primary ">ABOUT ME</div>

      <div className="flex flex-col gap-5">
        <p className="text-2xl font-semibold text-secondary">Designing digital spaces with simplicity, rhythm, and attention to detail.</p>
        <p className="text-xl text-secondary">Adwoa is a software engineer and student in Accra, 
            exploring the meeting point between mathematics, 
            technology, and modern web design.
        </p>
        <img src="./about.jpg" alt="about me" className="w-80 h-50"/>
      </div>

      <div className="flex flex-col gap-5">
        <p className="text-primary text-lg">TOOLKIT</p>
            <div className="relative flex overflow-hidden py-4 gap-10">
              <div className="flex shrink-0 animate-marquee gap-10 min-w-max items-center">
                {skills.map((icon, index) => {
                  const Icon = icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 whitespace-nowrap text-secondary"
                    >
                      <Icon size={40} />
                    </div>
                  );
                })}
              </div>
              <div
                aria-hidden="true"
                className="flex shrink-0 animate-marquee gap-10 min-w-max items-center z-1"
              >
                {skills.map((icon, index) => {
                  const Icon = icon;

                  return (
                    <div
                      key={`duplicate-${index}`}
                      className="flex items-center gap-2 whitespace-nowrap text-secondary"
                    >
                      <Icon size={40} />
                    </div>
                  );
                })}
              </div>
            </div>  
      </div>
    </section>
  )
}

export default About
