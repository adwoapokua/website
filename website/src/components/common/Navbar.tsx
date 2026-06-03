import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Home, User, FolderOpen, BookOpen, Mail } from "lucide-react";
import { Menu } from "lucide-react";
import { SheetFooter } from "../ui/sheet";

const links = [
  {
    name: "Home",
    link: "#home",
    icon: Home
  },
  {
    name: "About",
    link: "#about",
    icon: User
  },
  {
    name: "Projects",
    link: "#projects",
    icon: FolderOpen
  },
  {
    name: "Blog",
    link: "#blog",
    icon: BookOpen
  },
  {
    name: "Contact",
    link: "#contact",
    icon: Mail
  },
]

function Navbar() {
  return (
    <div className="flex justify-between items-center fixed top-0 h-16 p-3 border-b-2 shadow-sm w-full bg-background z-100">
      <div className="flex gap-2">
        <div className="border-2 border-primary rounded-4xl h-8 w-8 p-1 grid place-items-center">
          <span className="text-secondary font-semibold">AP</span>
        </div>
        <div className="text-secondary grid items-center font-semibold">
          Adwoa Pokua
        </div>
      </div>
      <div>
        <Sheet>
          <SheetTrigger><Menu className="text-primary grid items-center"/></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle><span className="text-secondary font-semibold">Adwoa Pokua</span></SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-5 px-5 text-primary">
              {
                links.map((item) => {
                  const Icon = item.icon
                  return (
                    <a key={item.name} href={item.link} className="flex gap-2">
                       <Icon size={24} className="mt-0.5"/> <span className="text-lg">{item.name}</span>
                    </a>
                  )
                })
              }
            </div>
            <SheetFooter className="text-secondary"> © 2026 Adwoa Pokua. All rights reserved.</SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default Navbar
