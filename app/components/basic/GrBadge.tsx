export type GrBadgeProps = {
    name: string
}

export default function GrBadge({name}: GrBadgeProps) {
    return (
        <span className="text-xs tracking-wide rounded-xl bg-indigo-200 px-3 py-1">
            {name}
        </span>
    )
}