export type LangItemProps = {
    name: string,
    value: number
}

const LangLevels: Record<number, string> = {
    1: 'Beginner',
    2: 'Intermediate',
    3: 'Advanced',
    4: 'Fluent',
    5: 'Native'
}

export default function LangItem({ name, value }: LangItemProps) {
    return (
        <li className="flex item">
            <div className="flex flex-col">
                <span className="text-sm text-gray-800">{name}</span>
                <span className="text-sm text-slate-500">{LangLevels[value]}</span>
            </div>
        </li>
    )
}



