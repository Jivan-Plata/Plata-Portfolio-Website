import '../../App'
import classes from './NavBar.module.css'

export default function NavBar() {
    return (
        <header>
            <div className = {classes['navbar-content']}>
                <p>Jivan Plata</p>

                <div className = {classes['navbar-links']}>

                    <p>Expertise</p>
                    <p>Tech Stack</p>
                    <p>Projects</p>
                    <p>Education & Experience</p>
                    <p>Contacts</p>
                
                </div>

            </div>
        </header>
    )
}