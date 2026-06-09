import { MoveDown } from "lucide-react"
import { Button } from "../ui/button"
import { NavLink } from "react-router"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

function Hero() {
  return (
    <div className="flex flex-col gap-10 lg:gap-70 justify-center items-center min-h-screen lg:flex-row-reverse" id="home">
      <img src="./moi.png" alt="" className="rounded-2xl w-55 h-60 lg:w-90 lg:h-90 object-cover border-5 border-primary"/>
      <div className="flex flex-col lg:items-start gap-10 lg:gap-15">
        <div className="flex flex-col gap-3 justify-center lg:items-start items-center lg:gap-5">
          <p className="text-muted-foreground flex gap-2">HEY, I'M ADWOA </p>
          <p className="text-secondary text-4xl font-bold lg:w-10 lg:text-5xl" >Student <span className="text-primary">Dev</span>eloper</p>
          <p className="text-muted-foreground text-lg text-center  lg:hidden"> Computer Science & Mathematics <br /> AI/ML · Problem Solver </p>
        </div>
        <div className="flex gap-2 justify-center items-center lg:items-start">
          <a href="#projects"><Button size="lg">View Work <MoveDown/> </Button></a>
          <a href="#contact"><Button variant="outline" size="lg">Say Hello 👋</Button></a>
        </div>
        <div className="flex gap-6 mt-8">
            <NavLink to="https://github.com/Adwoa-p">
              <FaGithub size="28" className="text-secondary-foreground hover:text-primary-foreground transition-colors" />
            </NavLink>
            <NavLink to="https://www.instagram.com/adwoaa_p/">
              <FaInstagram size="28" className="text-secondary-foreground hover:text-primary-foreground transition-colors" />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/adwoa-pokua-aboagye-a22293298/">
              <FaLinkedin size="28" className="text-secondary-foreground hover:text-primary-foreground transition-colors" />
            </NavLink>
          </div>
        </div> 
    </div>
  )
}

export default Hero
