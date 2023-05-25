import { GrButton } from "../atoms/GrButton";
import GrInput from "../atoms/GrInput"
import GrSelect from "../atoms/GrSelect";

const workSchedules = [{key:'FT', value:'Full-time'},
{key:'PT', value:'Part-time'},
{key:'IT', value:'Internship'},
{key:'FL', value:'Freelancer'}];

export default function ExperienceSection(){
    return(
        <section id="experience" className="relative flex flex-col w-full bg-white min-h-[560px] gap-9">
            <div className="flex flex-col flex-1 px-5 py-5 gap-4">
                <img className="pb-5" src="/img/breadcrumbs.png" />
                <div className="flex flex-col gap-3 items-center mb-8">
                    <img src="/img/experience.png" />
                    <h3 className="font-semibold text-base"> Tell us your story *-*</h3>
                </div>
                <div className="flex flex-col gap-4">
                    <GrInput id="company" placeholder="Company" type="text"/>
                    <GrInput id="job_title" placeholder="Job title" type="text"/>
                    <div className="flex gap-4 items-center">
                        <div className="min-w-0 flex-1">
                            <label htmlFor="start_date" className="font-semibold text-xs text-slate-400">Start date</label>
                            <GrInput id="start_date" type="month"/>
                        </div>
                        <div className="min-w-0 flex-1">
                            <label htmlFor= "end_date" className="font-semibold text-xs text-slate-400">End date</label>
                            <GrInput id="end_date" type="month"/>
                        </div>  
                    </div>
                    <div className=" flex flex-1 gap-2">
                            <input id="education_ongoing" type="checkbox"/>
                            <label htmlFor="education_ongoing" className="text-sm ">Present Job</label>
                    </div>    
                    <GrSelect id="work_schedule" placeholder="Select a work schedule" list={workSchedules}/>
                    <textarea className="border border-gray-200 leading-4 rounded-md px-2 py-3 outline-none focus:border-blue-300 w-full h-40 resize-none" placeholder="Description"></textarea>
                    <GrButton kind="add" label="SAVE AND ADD NEW EXPERIENCE"/>
                </div>
            </div>
            <div className="flex w-full items-center px-4 pb-4 justify-between">  
                <div>
                    <GrButton kind="outline" label="Back"/>
                </div>
                <div>
                    <GrButton kind="link" label="Skip" />
                    <GrButton kind="primary" label="Next" /> 
                </div>                
            </div>
        </section>
    )
}