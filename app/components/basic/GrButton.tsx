const primaryStyle = "text-white text-sm min-w-[85px] font-bold px-4 py-3 rounded-md bg-[#10A9FF] outline-none hover:bg-[#0D81C2]"
const outlineStyle = "text-blue-400 text-sm min-w-[85px] font-bold px-4 py-3 border border-[#10A9FF] rounded-md outline-none hover:bg-[#0D81C2]"
const linkStyle = "text-blue-400 text-sm font-bold px-5 py-3 outline-none underline"

function getStyle(value: string) {
    switch (value) {
        case "outline": return outlineStyle;
        case "link": return linkStyle;
        default: return primaryStyle;
    }
}

export type GrButtonProps = {
    kind: string,
    label?: string
}

export type GrCircleButtonProps = {
    children: React.ReactElement,
    url: string
}

export function GrButton(props: GrButtonProps) {
    const clazz = getStyle(props.kind);
    return (
        <button type="button" className={clazz} {...props}>
            <span>{props.label}</span>
        </button>
    )
}

export function GrCircleButton({ url, children }: GrCircleButtonProps) {
    return (
        <a href={url} className="outline-none">
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center bg-white w-12 h-12 rounded-full shadow-lg">
                    {children}
                </div>
            </div>
        </a>
    )
}