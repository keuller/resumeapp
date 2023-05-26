
export interface RadioProps {
    label: string;
    name: string;
    checked?: boolean;
}

export function Radio({ label, name, checked }: RadioProps) {
    return (
        <label className="radio">
            <input type="radio" name={name} defaultChecked={checked} />
            {label}
            <span></span>
        </label>
    )
}

export interface CheckBoxProps {
    label: string;
    name: string;
    checked?: boolean;
}

export function CheckBox({ label, name, checked }: CheckBoxProps) {
    return (
        <label className="checkbox">
            <input type="checkbox" name={name} defaultChecked={checked} />
            {label}
        </label>
    )
}
