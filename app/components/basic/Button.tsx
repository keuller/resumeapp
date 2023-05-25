
export type ButtonKind = "primary" | "secondary" | "inverted";

export interface ButtonProps {
    label: string;
    kind: ButtonKind;
    click?: Function;
}

export function Button({ label, kind, click }: ButtonProps) {
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

export interface CircleButtonProps {
    icon: string;
    click?: Function;
}

export function CircleButton({ icon, click }: CircleButtonProps) {
    return (
        <a href="#"
            onClick={(ev) => {
                ev.preventDefault();
                click && click();
            }}
            className="outline-none">
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center bg-white w-12 h-12 rounded-full shadow-lg">
                    <img src={icon} width={28} height={28} alt="icon" />
                </div>
            </div>
        </a>
    )
}
