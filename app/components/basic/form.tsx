const primaryStyle = "border border-[#C1C1C1] leading-4 rounded-md px-2 py-3 outline-none focus:border-blue-300 w-full h-[40px]"
const underlinedStyle = "px-2 py-0 outline-none border-b border-b-black focus:border-b-[#00A3FF] w-full h-[40px]"

function getStyle(value?: string){
    switch(value) {
        case "underlined": return underlinedStyle;
        default: return primaryStyle;
    }
}

export interface RadioProps {
    label: string;
    name: string;
    value: string;
    checked?: boolean;
}

export function Radio({ label, name, value, checked }: RadioProps) {
    return (
        <label className="radio">
            <input type="radio" name={name} value={value} defaultChecked={checked} />
            {label}
            <span></span>
        </label>
    )
}

export interface CheckBoxProps {
    label: string;
    name: string;
    value: string;
    checked?: boolean;
}

export function CheckBox({ label, name, value, checked }: CheckBoxProps) {
    return (
        <label className="checkbox">
            <input type="checkbox" name={name} value={value} defaultChecked={checked} />
            {label}
        </label>
    )
}

export type InputProps = {
    id: string,
    placeholder?: string,
    type: string,
    kind?: string
}

export  function Input({id, placeholder, kind, type}: InputProps) {
    const clazz = getStyle(kind);
    return (
        <input id={id} placeholder={placeholder} type={type} className={clazz}/>
    )
}

export type SelectProps = {
    id: string,
    placeholder: string,
    list:  Record<string, string>[],
}

export function Select({id, placeholder, list}: SelectProps){
    return (
        <select id={id} className="gr-select">
            <option  value="" disabled selected hidden>{placeholder}</option>
            {list.map( (item, index) => (
                <option value={item.key} key={index}>{item.value}</option>
            ))}
        </select>
    )
}