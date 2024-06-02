import styles from './Career.module.css'
import data from './data/careerData.json'

export default function Career() {
    return (
        <div>
            <h4>Previous Education</h4>
            <ul>
                {data.educationExperiences.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <h4>Career</h4>
            <ul>
                {data.workExperiences.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
    )
}