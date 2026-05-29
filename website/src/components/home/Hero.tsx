import { Hand, MoveDown } from "lucide-react"
import { Button } from "../ui/button"

function Hero() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center min-h-screen" id="#home">
      <img src="./moi.png" alt="" className="rounded-2xl w-55 h-60 object-cover border-5 border-primary"/>
      <div className="flex flex-col gap-3 justify-center items-center">
        <p className="text-muted-foreground flex gap-2">HEY, I'M ADWOA <Hand  fill="gold" stroke="gold" size={24}/></p>
        <p className="text-secondary text-4xl font-bold" >Student <span className="text-primary">Dev</span>eloper</p>
        <p className="text-muted-foreground text-lg  text-center"> Computer Science & Mathematics <br /> AI/ML · Problem Solver </p>
      </div>
      <div className="flex gap-2">
        <Button>View Work <MoveDown/> </Button>
        <Button variant="outline">Say Hello 👋</Button>
      </div>
    </div>
  )
}

export default Hero
