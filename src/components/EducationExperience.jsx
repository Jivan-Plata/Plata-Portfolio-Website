import dlsudLogo from '../assets/DLSU-D.png';
import seapps from '../assets/Seapps.png';
import servscale from '../assets/Servscale.png'
import creotec from '../assets/Creotec.png'

function EducationExperience() {
  return (
    <section id="EducAndExpi" className="py-20 px-6 max-w-6xl mx-auto ">

      <h2 className="text-3xl sm:text-4xl font-bold text-textcolor mb-12 text-center ">
        Education & Experience
      </h2>

      <div className="grid gap-8 md:grid-cols-2 items-start ">

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
            <p className="text-sm text-slate-300 pt-2 leading-relaxed">
            Developed a promotional website for Arcane Beauty Lounge requested by Arcane Beauty Official. Collaborated in a 3-member Agile development team, using Scrum practices such as daily stand-ups, sprints, sprint reviews and a Kanban board (Trello) to deliver incremental website features.
            </p>
            
          </div>
        </div>

        {/* Creotec */}
        <div className="bg-cards border border-[#2c3e50] rounded-xl shadow-lg p-6 flex gap-5 items-start self-start ">

          <div className="w-20 h-20 bg-[#1A2E3A] rounded-lg flex items-center justify-center shrink-0">
            <img src={creotec} alt="Company Logo" className="w-12 h-12 object-contain" />
          </div>

          <div className="text-textcolor space-y-1 ">

            <p className="text-xs uppercase tracking-widest text-slate-300">Experience</p>
            <h3 className="text-lg font-bold text-white">Junior Application Developer (Student Program)</h3>
            <p className="text-sm text-slate-400">January 2021 - February 2021</p>
            <p className="text-md font-medium text-white">Creotec Philippines, Inc.</p>
            <p className="text-sm text-slate-300 pt-2 leading-relaxed">
              Participated in a work immersion program focused on basic mobile application development. Built simple mobile applications using MIT App Inventor and collaborated remotely with a small team during the pandemic.
            </p>
            
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
            <p className="text-sm font-medium text-slate-400">GPA: 3.65/4.00</p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default EducationExperience;