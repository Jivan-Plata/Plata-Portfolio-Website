import scrimba from "../assets/Scrimba.png"
import cisco from "../assets/Cisco.png"
import sololearn from "../assets/Sololearn.png"

function Certifications() {

    const certifications = [
        {source: scrimba, origin: "Scrimba", title: "Learn React", date: "In progress", link: ""},
        {source: scrimba, origin: "Scrimba", title: "Learn JavaScript", date: "September 2025", link: "https://drive.google.com/file/d/1PSIk2hg7r1af4_CE4z92fzkHIaaDWbPf/view?usp=drive_link"},
        {source: cisco, origin: "Cisco Networking Academy", title: "JavaScript Essentials 1", date: "June 2025", link: "https://www.credly.com/badges/5708845b-166f-4df0-8e17-4c7fc3a1938b/public_url"},
        {source: sololearn, origin: "SoloLearn", title: "Introduction to Python", date: "November 2024", link: "https://www.sololearn.com/certificates/CC-VSUPAJMG"}
    ]
    
    const allCertifications = certifications.map(current => (
        /* Cards */
        <div className = "flex flex-col justify-center items-center">
            
            {/* Image Container */}
            <a href = {current.link} target="_blank">
            <div className = "w-20 h-20 bg-[#1A2E3A] rounded-lg flex items-center justify-center shrink-0 mb-3">

                <img 
                src = {current.source} 
                alt = {current.origin}
                className="w-12 h-12 object-contain"
            />

            </div>
            </a>

            <p className="text-xs uppercase tracking-widest text-slate-300 leading-6">{current.origin}</p>
            <p className="text-md font-bold text-white leading-6"> {current.title}</p>
            <p className="text-sm text-slate-400 leading-6">{current.date}</p>
            

        </div>

    ))

    return (
        <section id = "Certifications" className="py-20 px-6 max-w-6xl mx-auto ">

            <h2 className="font-bold text-3xl sm:text-4xl text-center mb-12">
                Certifications
            </h2>

            {/* Container */}
            <div className="grid grid-cols-2 gap-y-10 text-center py-5 items-start lg:grid-cols-4 ">
                {allCertifications}                
            </div>

        </section>
    )
}

export default Certifications;