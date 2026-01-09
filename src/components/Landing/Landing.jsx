import '../../App'
import classes from './Landing.module.css'
import moonImage from '../../assets/Moon.png'

function Landing() {
    return (
        <section className = {classes.landing}>
            <div className = {classes['landing-content']}>

                <div className = {classes['moon-container']}>
                    <img alt = "Moon image" src = {moonImage}/>
                </div>
                
                <div className = {classes['landing-information']}>

                    <h1> Hi, I'm Jivan Plata</h1>
                    <p> A junior frontend web-developer, versed in HTML, CSS, JavaScript and React. I am a graduate of De La Salle University - Dasmariñas with a passion for web development. </p>

                    <div className = {classes['buttons']}>

                        <a className = {classes['contacts-btn']}> Contacts </a>
                        <a className = {classes['resume-btn']}> Download Resume </a>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Landing;