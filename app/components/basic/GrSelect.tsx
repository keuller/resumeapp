export type GrSelectProps = {
    id: string,
    placeholder: string,
    list:  Record<string, string>[],
}

export default function GrSelect({id, placeholder, list}: GrSelectProps){
    return (
        <select id={id} className="gr-select">
            <option  value="" disabled selected hidden>{placeholder}</option>
            {list.map( (item, index) => (
                <option value={item.key} key={index}>{item.value}</option>
            ))}
        </select>
    )
}