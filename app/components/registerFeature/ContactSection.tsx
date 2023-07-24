import { Button } from "../basic/Button";
import { Input } from "../basic/form";


export default function contactSection(){
    return(
        <section id="contact" className="relative flex flex-col w-full bg-white min-h-[560px] gap-9">
        <div className="flex flex-col flex-1 px-5 py-5 gap-4">
            <img className="pb-5" src="/img/breadcrumbs.png" />
            <div className="flex flex-col gap-3 items-center mb-8">
                <img src="/img/phone.png"/>
                <h3 className="font-semibold text-base"> Want to add you phone number? </h3>
            </div>
            <div className="flex flex-col gap-2">
                <div>
                    <label className="font-semibold text-sm text-slate-400">(Optional)</label>
                    <Input id="phone_number" placeholder="Phone number" type="number" kind="primary"/>
                </div>
                <div>
                    <input id="show_phone" type="checkbox"/>
                    <label htmlFor="show_phone" className="text-sm"> Show my number in my resume</label>
                </div>
                <div>
                    <label className="text-slate-500 text-sm"> By sending this form with this box marked, you confirm you
                        are the primary user of the phone number stated and complies to receiving phone calls from
                        companies that use Get Rezume</label>
                </div>
            </div>
        </div>
        <div className="flex w-full items-center px-4 justify-end">        
            <Button label="Skip" kind="link"/>
            <Button label="Next" kind="primary"/>
        </div>
    </section>
    )
}