export type BlogPost = {
  id: number;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featured: boolean;
};

export const blogs: BlogPost[] = [
  {
    id: 1,
    image: "/about.jpg",
    date: "June 2, 2026",
    excerpt: "I once mapped out a future in accounting and economics. Then I didn't get into the program I wanted — and somehow, that detour led me exactly where I needed to be.",
    title: "My Journey into Tech: Thoughts, people and life",
    content: `Growing up, I never imagined that technology would become such a defining part of my life. For years, I saw myself pursuing a path in accounting or economics, ideally working with firms like Deloitte. I was drawn to problem-solving, analysis, and the idea of helping businesses make informed decisions through numbers and strategy. Naturally, when it came time to apply to university, my choices reflected those ambitions.

Things did not go exactly as planned.

When I received admission into the Mathematical Sciences program at the University of Ghana instead of my initial first-choice program, I was uncertain about what to do next. At the same time, I had also gained admission into my preferred field at Kwame Nkrumah University of Science and Technology. It felt like a difficult crossroads. After several conversations with family and a lot of reflection, I decided to remain at UG and embrace Mathematical Sciences, even though I was not fully convinced at the time that it was the direction I truly wanted.

Interestingly, not long after making that decision, I was later offered admission into the program I originally wanted. By then, however, something had already started to shift. I had begun to see possibilities in a path I initially overlooked. Looking back now as a third-year student, staying in Mathematical Sciences was one of the most important decisions I have made.

Although my deeper involvement in tech started later, my first exposure actually began in high school through my school’s ICT club. I learned basic HTML and CSS and became curious about how websites worked. At the time, it felt more like a side interest than something I would seriously pursue. It was only after high school, during the break following WASSCE, that I started spending more time experimenting with web development and learning independently.

One of the major turning points during that period was meeting my mentor, Zenas Awuku. Through his guidance, I was introduced to programming in a much broader sense, particularly Python and problem-solving. Python became an ideal starting point for me because of how approachable it felt, and learning it gradually changed the way I thought about technology. What started as curiosity slowly became genuine passion.

That season of learning was not always easy. At the time, I did not even have consistent access to the tools many learners take for granted, yet I kept experimenting, practicing, and trying to improve with whatever resources I had available. Those small efforts taught me persistence very early. They also helped me realize that growth in tech is often less about starting perfectly and more about staying consistent long enough to improve.

As my interest deepened, I became more involved in tech communities and learning opportunities. I attended a bootcamp called Global Code alongside a few peers, and for the first time, technology began to feel practical and collaborative rather than distant or intimidating. Later, attending PyCon Africa became another defining experience. Participating in the Django Girls session and building a Django-powered website showed me how much progress was possible within a relatively short period of time. 

Over time, my interests began expanding beyond web development into areas like software engineering, AI, and machine learning. What excites me most is not only the technical side of these fields, but also their potential impact, especially within African communities where access, representation, and practical problem-solving matter deeply. Studying Mathematics alongside Computer Science has also shaped the way I approach problems. It has strengthened my analytical thinking and given me a greater appreciation for logic, structure, and abstraction in programming.

Outside the classroom, I have also had the opportunity to contribute to tech education through InnovoTech Lab, where I work as an instructor and program coordinator. Being part of programs that introduce students to technology has been especially meaningful because I understand how transformative early exposure and mentorship can be. Watching students become curious about coding and begin building confidence in themselves often reminds me of my own beginnings.

Balancing academics, programming, leadership responsibilities, and personal growth has not been straightforward. There have been periods of exhaustion, self-doubt, and uncertainty about whether I was doing enough or moving fast enough. Yet those moments have also shaped me the most. The support of mentors, lecturers, friends, and communities around me has continually reminded me that progress does not always happen all at once.

Looking back, I can now see that the path I once considered a detour was actually preparing me for something I had not imagined for myself. The student who once planned for a future strictly in accounting or economics gradually found purpose in technology, education, and problem-solving through code.

I still feel like I am only at the beginning of the road. There is a lot more to learn, more systems to build, more communities to contribute to, and more challenges to overcome. But if there is one thing my experience has taught me so far, it is that unexpected paths can sometimes lead to the most meaningful destinations.

Tech may not have been my first plan, but it has become one of the most rewarding parts of my story.
`,
    category: "System Design",
    tags: ["System Design", "Scalability", "Architecture"],
    featured: true,
  },      
];