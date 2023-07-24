import { Button } from "../basic/Button"
import { CheckBox, Input, Select } from "../basic/form"

const educationLevels = [{ key: 'HS', value: 'High School degree' },
                         { key: 'TC', value: 'Technical degree' },
                         { key: 'TC', value: 'Bachelor\'s degree' },
                         { key: 'TC', value: 'Master\'s degree' },
                         { key: 'TC', value: 'Doctorate degree' }]

export default function EducationSection() {
    return (
        <section id="education" className="relative flex flex-col w-full bg-white min-h-[560px]">
            <div className="flex flex-col flex-1 px-5 py-5 gap-4">
                <img className="pb-5" src="/img/breadcrumbs.png" />
                <div className="flex flex-col gap-3 items-center mb-8">
                    <img src="/img/education.png" />
                    <h3 className="font-semibold text-base"> Show us what you've got :D</h3>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <Select id="education_level" placeholder="Education" list={educationLevels} />
                        <Input id="education_country" placeholder="Country" type="text" />
                        <Input id="education_course" placeholder="Course" type="text" />
                    </div>
                    <div className="flex gap-4 items-end">
                        <div className="flex-1">
                            <label htmlFor="education_year" className="font-semibold text-xs text-slate-400">Graduation year</label>
                            <Input id="education_year" type="month" />
                        </div>
                        <div className="flex-1 flex items-center gap-2 pb-3">
                            <CheckBox label= "On going" name="education_ongoing" value="education_ongoing" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full items-center px-4 justify-between">
                <div>
                    <Button kind="secondary" label="Back" />
                </div>
                <div>
                    <Button kind="link" label="Skip" />
                    <Button kind="primary" label="Next" />
                </div>
            </div>
        </section>
    )
}