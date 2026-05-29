function About() {
  return (
    <section className="min-h-screen flex flex-col gap-10 px-10" id="#about" >
      <div className="text-primary ">ABOUT ME</div>

      <div className="flex flex-col gap-5">
        <p className="text-2xl font-semibold text-secondary">Designing digital spaces with simplicity, rhythm, and attention to detail.</p>
        <p className="text-xl text-secondary">Adwoa is a software engineer and student in Accra, 
            exploring the meeting point between mathematics, 
            technology, and modern web design.
        </p>
        <div>
            <img src="./about.jpg" alt="about me" className="w-10 h-40"/>
        </div>
      </div>
    </section>
  )
}

export default About
