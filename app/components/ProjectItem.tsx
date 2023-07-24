import { Badge } from "./basic/Badge"

export type ProjectItemProps = {
    name: string,
    description: string,
    stack: string[]
}

export default function ProjectItem( {name, description, stack}: ProjectItemProps){
    return(
        <div className="flex flex-col p-3 border-t-2">
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm leading-5 text-slate-500">{description}</p>
        <div className="flex flex-wrap gap-2 py-2">
            {stack.map( (item,index) => (
                <Badge name={item} key={index} />
            ))}
        </div>
    </div>
    )
}