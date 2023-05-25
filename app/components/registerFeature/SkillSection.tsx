import { GrButton } from "../atoms/GrButton"
import GrInput from "../atoms/GrInput"

const skills = [{key:'JAVA', value:'Java'},
{key:'JAVASCRIPT', value:'JavaScript'},
{key:'PHP', value:'PhP'},
{key:'KOTLIN', value:'Kotlin'},
{key:'VS', value:'Visual Studio'}];

export default function SkillSection(){
    return(
        <section id="skills" className="relative flex flex-col w-full bg-white min-h-[560px] px-5 py-5 gap-9">
        <div className="flex flex-col flex-1 gap-4">
            <img className="pb-5" src="/img/breadcrumbs.png" />
            <div className="flex flex-col gap-3 items-center mb-8">
                <img src="/img/skills.png"/>
                <h3 className="font-semibold text-base"> What can you do?</h3>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-2">      
                    <GrInput id="skill" placeholder="Type a skill" type="text"/>            
                    <GrButton kind="add" />                                              
                </div>
                <div className="flex flex-col items-start gap-4">
                    <h3 className="font-semibold">Registered Skills</h3>
                    {skills.map((skill,index) => (
                        <li key={index} className="list-none text-[#00A3FF]">
                            {skill.value}
                        </li> 
                    ))}
                </div>
            </div>
        </div>
        <div className="flex w-full items-center justify-between">  
            <div>
                <GrButton kind="outline" label="Back"/>
            </div>
            <div>
                <GrButton kind="link" label="Skip"/>
                <GrButton kind="primary" label="Next"/>
            </div>                
        </div>
    </section>
    )
}