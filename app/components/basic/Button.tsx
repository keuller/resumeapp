
export type ButtonKind = "primary" | "secondary" | "inverted";

export interface ButtonProps {
    label: string;
    kind: ButtonKind;
    click?: Function;
}

export default function Button({ label, kind, click }: ButtonProps) {
    const styles = {
        'primary': 'text-white text-sm min-w-[100px] font-semibold px-4 py-3 rounded-md bg-primary outline-none hover:bg-primary-light hover:text-primary',
        'secondary': 'text-blue-400 text-sm min-w-[100px] font-bold px-4 py-3 border-[#10A9FF] rounded-md outline-none hover:bg-primary-light hover:text-primary',
        'inverted': 'text-white text-sm min-w-[100px] font-semibold px-4 py-3 border-inverted bg-inverted rounded-md outline-none hover:bg-inverted-dark'
    }

    return (
        <button type="button"
            className={styles[kind]}
            onClick={(ev) => {
                ev.preventDefault();
                click && click();
            }}>
            <span>{label}</span>
        </button>
    )
}
