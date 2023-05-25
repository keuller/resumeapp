export type InterestItemProps = {
    name: string,
}

export default function InterestItem({ name }: InterestItemProps) {
    return (
        <li className="flex items-center gap-1 item">
            <span className="pl-2 text-sm text-gray-700">{name}</span>
        </li>
    )
}