import { skills } from "../data"
import { CircularProgressbar } from "react-circular-progressbar";

const Skills = () => {
  return (
   <>
   {
    skills.map(({title,percentage},index)=>{
        return(
            <div className="progress__box"key={index}>
                <div className="progress__circle">
                <CircularProgressbar 
                strokeWidth={6.5}
                text={`${percentage}%`}
                value={percentage}
                styles={{
                    text: {
                      fill: 'var(--title-color)',
                    },
                    path: {
                      stroke: 'var(--title-color)',
                    },
                  }}
                />
                </div>
                <h3 className="skills__title">{title}</h3>
            </div>
        )
    })
   }
   </>
  )
}

export default Skills