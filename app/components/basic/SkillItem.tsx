export type SkillItemProps = {
    name: string,
    value: number
}

const SkillsLevels: Record<number, string> = {
    1: 'Beginner',
    2: 'Intermediate',
    3: 'Advanced',
    4: 'Expert',
    5: 'N/A'
}

export default function SkillsItem({ name, value }: SkillItemProps) {
    return (
        <li className="flex px-1 item">
            <div className="flex flex-col w-full">
                <span className="text-sm tracking-wider text-gray-800">{name}</span>
                <span className="text-sm tracking-wider text-slate-500">{SkillsLevels[value]}</span>
            </div>
        </li>
    )
}