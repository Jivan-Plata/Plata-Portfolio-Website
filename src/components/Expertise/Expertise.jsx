import '../../App'
import classes from './Expertise.module.css'

function Expertise() {
    return (
        <section className = {classes.expertise}>

            <div className = {classes['expertise-content']}>
                <h1>Expertise</h1>
                <p>Front-End Development · Game Development · Playing Video Games</p> 
            </div>
            
        </section>
        
    )
}

export default Expertise;