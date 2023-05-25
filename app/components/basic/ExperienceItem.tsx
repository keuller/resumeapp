export type ExperienceItemProps = {
    company: string,
    job: string,
    startDate?: string,
    endDate?: string,
    mode: number
}

function modeType(value: number): string {
    switch(value) {
        case 1: return 'Full-time';
        case 2: return 'Part-Time';
        case 3: return 'Freelancer';
        default: return 'Contract';
    }
}

export default function ExperienceItem(props: ExperienceItemProps) {
    return (
        <div className="flex flex-col p-3 border-t-2 leading-6">
            <h3 className="font-bold tracking-wide">{ props.company }</h3>
            <h4 className="text-sm tracking-wide">{props.job }</h4>
            <div className="text-sm text-slate-500 tracking-wide"> {props.startDate} - {props.endDate} | { modeType(props.mode) }</div>
            <div></div>
        </div>
    )
}