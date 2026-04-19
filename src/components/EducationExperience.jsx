import dlsudLogo from '../assets/DLSU-D.png';
import servscale from '../assets/Servscale.png'
import accenture from '../assets/accenture.png'

function EducationExperience() {
  return (
    <section id="EducAndExpi" className="py-20 px-6 max-w-6xl mx-auto ">

      <h2 className="text-3xl sm:text-4xl font-bold text-textcolor mb-12 text-center ">
        Education & Experience
      </h2>

      <div className="grid gap-8 md:grid-cols-2 items-start ">

        {/* Experience */}

        {/* Servscale */}
        <div className="bg-cards border border-[#2c3e50] rounded-xl shadow-lg p-6 flex gap-5 items-start self-start ">

          <div className="w-20 h-20 bg-[#1A2E3A] rounded-lg flex items-center justify-center shrink-0">
            <img src={servscale} alt="Company Logo" className="w-12 h-12 object-contain" />
          </div>

          <div className="text-textcolor space-y-1 ">

            <p className="text-xs uppercase tracking-widest text-slate-300">Experience</p>
            <h3 className="text-lg font-bold text-white">Frontend Developer Intern</h3>
            <p className="text-sm text-slate-400">July 2024 - August 2024</p>
            <p className="text-md font-medium text-white">Servscale Technologies, Inc.</p>
            
            <ul className="text-sm text-slate-300 pt-2 leading-relaxed flex flex-col gap-2">

              <li> <span className='text-[#a1f6ff]'> ● </span> Engineered a fully responsive, 7-page promotional website for a real business client — Arcane Beauty Lounge — translating Figma designs into production-ready HTML, CSS, and JavaScript</li>

              <li> <span className='text-[#a1f6ff]'> ● </span> Collaborated in a 3-person Agile team with daily standups, sprint reviews, and Trello Kanban board to deliver incremental features on schedule </li>

              <li> <span className='text-[#a1f6ff]'> ● </span>Executed production deployments via GoDaddy and managed version control with Git/GitHub to maintain codebase integrity across the team</li>

            </ul>
            
          </div>
        </div>

        {/* Accenture */}
        <div className="bg-cards border border-[#2c3e50] rounded-xl shadow-lg p-6 flex gap-5 items-start self-start ">

          <div className="w-20 h-20 bg-[#1A2E3A] rounded-lg flex items-center justify-center shrink-0">
            <img src={accenture} alt="Company Logo" className="w-12 h-12 object-contain" />
          </div>

          <div className="text-textcolor space-y-1 ">

            <p className="text-xs uppercase tracking-widest text-slate-300"> Experience </p>
            <h3 className="text-lg font-bold text-white"> Accenture Academy - Full Stack Development Trainee </h3>
            <p className="text-sm text-slate-400"> March 2026 - Present </p>
            <p className="text-md font-medium text-white"> Accenture </p>
            
            <ul className="text-sm text-slate-300 pt-2 leading-relaxed flex flex-col gap-2">

              <li> <span className='text-[#a1f6ff]'> ● </span> Completing a 343-hour full stack training program covering Java, Spring Boot, Hibernate, SQL, and React </li>

              <li> <span className='text-[#a1f6ff]'> ● </span> Preparing for technical assessments including Java fundamentals, microservices, and React development </li>

              <li> <span className='text-[#a1f6ff]'> ● </span> Following structured modules on software engineering practices, REST APIs, and database design </li>

            </ul>
            
          </div>
        </div>

        

        {/* Education */}
        <div className="bg-cards border border-[#2c3e50] rounded-xl shadow-lg p-6 flex gap-5 items-start self-start ">

          <div className="w-20 h-20 bg-[#1A2E3A] rounded-lg flex items-center justify-center shrink-0">
            <img src={dlsudLogo} alt="School Logo" className="w-12 h-12 object-contain" />
          </div>

          <div className="text-textcolor space-y-1 ">

            <p className="text-xs uppercase tracking-widest text-slate-300">Education</p>
            <h3 className="text-lg font-bold text-white">B.S. in Computer Science with Specialization in Game Development</h3>
            <p className="text-sm text-slate-400">2021 – 2025</p>
            <p className="text-md font-medium text-white">De La Salle University – Dasmariñas</p>
            <p className="text-md font-medium text-white">DOST-SEI Undergraduate Scholar (2021-2025)</p>
            <p className="text-sm font-medium text-slate-400">GPA: 3.65/4.00</p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default EducationExperience;