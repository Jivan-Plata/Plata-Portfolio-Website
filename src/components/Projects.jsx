import arcanePage from '../assets/arcanePage.png'
import portfolioPage from '../assets/portfolioPage.png'
import git from '../assets/GitHub.png'
import cardWebsite from '../assets/card-website.png'

const projects = [
    {
        name: 'Arcane Beauty Lounge',
        description: 'A promotional website created for Arcane Beauty Lounge. Implemented multi-section layouts based on Figma designs (services, branches, products, contacts, etc.). Worked with other interns using GitHub for version control and was originally deployed via GoDaddy.',
        source: arcanePage,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        livePreview: 'https://arcanebeautylounge.netlify.app/',
        code: 'https://github.com/Jivan-Plata/arcane-beauty-lounge-demo',
    },
    {
        name: 'Website Portfolio',
        description: 'This website you are currently viewing. A responsive personal portfolio built with React and Tailwind CSS. Features smooth scrolling, interactive animations, and clean UI to showcase skills, projects, and experience.',
        source: portfolioPage,
        technologies: ['ReactJS', 'Tailwind', 'JavaScript'],
        livePreview: '#',
        code: 'https://github.com/Jivan-Plata/Plata-Portfolio-Website',
    },

    {
        name: 'Personal Profile Card',
        description: 'A static React application focused on component composition, layout, and reusable UI structure. A responsive personal business card styled using Tailwind CSS for ease.',
        source: cardWebsite,
        technologies: ['ReactJS', 'HTML', 'Tailwind'],
        livePreview: 'https://plata-card.netlify.app/',
        code: 'https://github.com/Jivan-Plata/personal-profile-card',
    }
];

function Projects() {
    return (
        <section id="Projects" className="py-20 px-6 sm:w-2xl md:w-3xl lg:w-5xl mx-auto ">
            
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-textcolor mb-10">Projects</h2>

            {/* Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-5 gap-y-6 place-items-center ">

                {projects.map((project, index) => (
                    /* Cards */
                    <div
                        key={index}
                        className="bg-cards rounded-xl w-72 h-[27rem] flex flex-col border border-[#2c3e50] hover:border-secondary shadow-[0_0_6px_#1a1a1a] hover:shadow-[0_0_16px_#A1F6FF] hover:-translate-y-2 ease-in-out transition-all duration-300 overflow-hidden"
                    >
                        {/* Image */}
                        <img src={project.source} className="h-40 w-full object-cover object-center" />

                        {/* Text Content */}
                        <div className="flex flex-col items-center justify-between text-center p-4">
                            
                            <h3 className="p-2 text-lg font-bold">{project.name}</h3>

                            {/* Technologies Used */}
                            <div className="flex flex-wrap justify-center gap-2 text-[0.6rem] text-secondary mb-5">
                                {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="bg-[#1A2E3A] rounded-full px-3 py-1">
                                    {tech}
                                </span>
                                ))}
                                
                            </div>


                            <p className="text-xs text-slate-300 font-medium mb-2">{project.description}</p>

                            {/* Buttons */}
                            <div className="flex gap-8 mt-5 text-sm items-center">
                                <a href={project.livePreview} target="_blank" rel="noreferrer" className="text-white hover:underline">
                                    Live Preview
                                </a>
                                <a href={project.code} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:underline">
                                    <img src={git} alt="GitHub" className="h-3 w-3" />
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;