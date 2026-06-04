import { Button } from "../ui/button"

function Contact() {

  return (
    <section id="#contact" className="min-h-screen flex flex-col gap-10 px-8 mb-30">
      <div className="text-secondary font-bold text-4xl">
        <p>Say Hi <span className="text-primary">&</span> tell me about your idea</p>
      </div>
      <form action="" className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 text-accent">
            <label htmlFor="name" className=" text-primary">Full Name</label>
            <input type="text" name="name" id="name" className="border-b border-secondary focus:outline-none" placeholder="Adwoa Pokua"/>
        </div>
        <div className="flex flex-col gap-2 text-accent">
            <label htmlFor="email" className=" text-primary">Email</label>
            <input type="email" name="email" id="email" className="border-b border-secondary focus:outline-none" placeholder="aboagyeadwoapokua@gmail.com"/>
        </div>
        <div className="flex flex-col gap-2 text-accent">
            <label htmlFor="message" className=" text-primary">Message</label>
            <textarea  name="message" id="message" className="border-b border-secondary focus:outline-none" placeholder="Say something..."/>
        </div>
        <Button variant="secondary" size="lg">Send Message</Button>
      </form>

      <div className="mt-10">
        <p className="text-lg text-secondary">Contact Me</p>
        <p className="text-primary">aboagyeadwoapokua@gmail.com</p>
      </div>
    </section>
  )
}

export default Contact
