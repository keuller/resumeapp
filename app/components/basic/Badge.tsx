
export interface BadgeProps {
    name: string
}

export function Badge({ name }: BadgeProps) {
    return (
        <span v-once className="text-xs tracking-wide rounded-xl bg-primary-light px-3 py-1">
            {name}
        </span>
    )
}
