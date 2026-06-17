import { MoveDown } from "lucide-react"
import { Button } from "../ui/button"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

function Hero() {
  return (
    <div className="flex flex-col gap-6 lg:gap-20 justify-center items-center min-h-screen pt-16 px-6 lg:px-20 lg:flex-row-reverse" id="home">

      <div className="relative shrink-0">
        <img
          src="./moi.png"
          alt="Adwoa Pokua"
          className="relative rounded-2xl w-40 h-48 sm:w-56 sm:h-64 lg:w-72 lg:h-80 object-cover border-4 border-primary"
        />
      </div>

      <div className="flex flex-col items-center lg:items-start gap-5 lg:gap-7">
        <span className="inline-flex items-center bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-primary/25">
          Hey, I'm Adwoa
        </span>
        <div className="flex flex-col gap-2 items-center lg:items-start">
          <h1 className="text-secondary text-4xl font-bold lg:text-5xl text-center lg:text-left leading-tight">
            Student <span className="text-primary">Dev</span>eloper
          </h1>
          <p className="text-muted-foreground text-base text-center lg:text-left max-w-sm">
            Computer Science & Mathematics · AI/ML · Problem Solver
          </p>
        </div>

        <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
          <a href="#projects">
            <Button size="lg">View Work <MoveDown className="ml-1" /></Button>
          </a>
          <a href="#contact">
            <Button variant="outline" size="lg">Say Hello 👋</Button>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-5">
            <a href="https://github.com/adwoapokua" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <FaGithub size="30" />
            </a>
            <a href="https://www.instagram.com/adwoaa_p/" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <FaInstagram size="30" />
            </a>
            <a href="https://www.linkedin.com/in/adwoa-pokua-aboagye-a22293298/" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <FaLinkedin size="30" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
