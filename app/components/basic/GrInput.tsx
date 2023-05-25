const primaryStyle = "border border-[#C1C1C1] leading-4 rounded-md px-2 py-3 outline-none focus:border-blue-300 w-full h-[40px]"
const underlinedStyle = "px-2 py-0 outline-none border-b border-b-black focus:border-b-[#00A3FF] w-full h-[40px]"
const radioStyle = "h-[20px] w-[20px] mt-1"

function getStyle(value?: string){
    switch(value) {
        case "underlined": return underlinedStyle;
        case "radio": return radioStyle;
        default: return primaryStyle;
    }
}

export type GrInputProps = {
    id: string,
    placeholder?: string,
    type: string,
    kind?: string
}

export type GrRadioInputProps = {
    id: string,
    name: string,
    value: string,
}

export  function GrInput({id, placeholder, kind, type}: GrInputProps) {
    const clazz = getStyle(kind);
    return (
        <input id={id} placeholder={placeholder} type={type} className={clazz}/>
    )
}

export  function GrRadioInput({id, name, value}: GrRadioInputProps) {
    return (
        <input id={id} name={name} value={value} type="radio"/>
    )
}

