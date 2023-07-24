import { Button } from "../basic/Button"
import { Radio } from "../basic/form"

export default function AvailabilitySection(){
    return(
        <section id="availability" className="relative flex flex-col w-full bg-white min-h-[560px] gap-9 lg:justify-center">
        <div className="flex flex-col flex-1 px-5 py-5 gap-4 lg:flex-auto">
            <img className="pb-5" src="/img/breadcrumbs.png" />
            <div className="flex flex-col gap-3 items-center mb-8">
                <img src="/img/suitcase.png"/>
                <h3 className="font-semibold text-base"> Are you on the hunt?</h3>
            </div>
            <div className="flex flex-col gap-4 px-5">
                <div className="flex items-start gap-2">
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <Radio label="Open to work" name="availability" value="available"/>
                            <img src="/img/task_checked.png" className="w-5 h-5"/>
                        </div>
                        <p className="text-xs text-slate-400 font-normal pl-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque, finibus a condimentum eu, aliquam sit amet sapien. Fusce vel sapien molestie, sagittis enim non, luctus purus.
                        </p>                        
                    </div>            
                </div>

                <div className="flex items-start gap-2">
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <Radio label="Unavailable" name="availability" value="unavailable"/>
                            <img src="/img/task_unchecked.png"/>
                        </div>                        
                        <p className="text-xs text-slate-400 font-normal pl-6">
                        Fusce vel sapien molestie, sagittis enim non, luctus purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque, finibus a condimentum.
                        </p>
                    </div>                    
                </div>

            </div>
        </div>
        <div className="flex w-full items-center px-4 justify-between">
            <div>
                <Button kind="secondary" label="Back"/>
            </div>
            <div>
                <Button kind="link" label="Skip for later"/>
                <Button kind="primary" label="Next"/>
            </div>
        </div>
    </section>
    )
}