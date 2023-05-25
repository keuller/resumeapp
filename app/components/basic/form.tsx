
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
