import { Button } from "../basic/Button"
import Select, { Input } from "../basic/form"

const data = [{key: "BR", value: "Brazil"},{key: "Us", value: "United States"}]

export default function LocationSection(){
    return (
        <section id="location" className="relative flex flex-col w-full bg-white min-h-[560px] gap-9">
            <div className="flex flex-col flex-1 px-5 py-5 gap-4">
                <img className="pb-5" src="/img/breadcrumbs.png" />
                <div className="flex flex-col gap-3 items-center mb-8">
                    <img src="/img/earth.png"/>
                    <h3 className="font-semibold text-base"> Where are you? :)</h3>
                </div>
                <div className="flex flex-col gap-4">
                    <div>      
                        <Select id="country" placeholder="Select a country" list={data} />                                           
                    </div>
                    <div className="flex flex-col">
                        <Input id="city" kind="primary" type="text" placeholder="City" />                                      
                    </div>
                </div>
            </div>
            <div className="flex w-full items-center px-4 justify-between">        
                <Button kind="secondary" label="Back" />
                <Button kind="primary" label="Next" /> 
            </div>
        </section>
    )
}