export type EmptyContentProps = {
    text: string
}

export default function EmptyContent({text}: EmptyContentProps) {
    return (
        <div className="flex flex-col items-center gap-2 py-4">
            <img src={'/assets/empty-folder.svg'} alt="empty" width="48" height="48"/>
            <span className="text-sm text-slate-400">{text}</span>
        </div>
    )
}