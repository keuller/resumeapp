import { GrButton } from "../basic/GrButton"
import { GrRadioInput } from "../basic/GrInput"

export default function PrivacySection() {
    return (
        <section id="privacy" className="relative flex flex-col w-full bg-white min-h-[560px] gap-9">
            <div className="flex flex-col flex-1 px-5 py-5 gap-4">
                <img className="pb-5" src="/img/breadcrumbs.png" />
                <div className="flex flex-col gap-3 items-center mb-8">
                    <img src="/img/quiet.png"/>
                        <h3 className="font-semibold text-base"> We won't tell if you won't</h3>
                </div>
                <div className="flex flex-col gap-4 px-5">
                    <div className="flex items-start gap-2">
                        <GrRadioInput id="public" name="privacy" value="public"/>
                        <div className="flex flex-col">
                            <div className="flex gap-2">
                                <label htmlFor="public">Public</label>
                                <img src="/img/lock_open.png" className="w-5 h-5"/>
                            </div>
                            <p className="text-xs text-slate-400 font-normal">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque, finibus a
                                condimentum eu, aliquam sit amet sapien. Fusce vel sapien molestie, sagittis enim non, luctus
                                purus.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2">
                        <GrRadioInput id="private" name="privacy" value="private"/>
                        <div className="flex flex-col">
                            <div className="flex gap-2">
                                <label htmlFor="private">Private</label>
                                <img src="/img/lock_closed.png" className="w-5 h-5"/>
                            </div>
                            <p className="text-xs text-slate-400 font-normal">
                                Fusce vel sapien molestie, sagittis enim non, luctus purus. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Phasellus tortor neque, finibus a condimentum.
                            </p>
                        </div>
                    </div>
                    <a className="text-xs text-[#00A3FF] underline" href="/privacy/en">Privacy Policy</a>
                </div>
            </div>
            <div className="flex w-full items-center px-4 justify-between">
                <div>
                    <GrButton kind="outline" label="Back"/>
            </div>
            <div>
                <GrButton kind="link" label="Skip"/>
                <GrButton kind="primary" label="Next"/>
        </div>
        </div >
    </section >
    )
}