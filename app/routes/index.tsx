import type { V2_MetaFunction } from "@remix-run/node";
import { Badge } from "~/components/basic/Badge";
import { Button, CircleButton } from "~/components/basic/Button";
import { Loader } from "~/components/basic/Loader";

export const meta: V2_MetaFunction = () => {
    return [{ title: "GetRezume" }];
};

export default function Index() {
    return (
        <div className="flex flex-col gap-2">
            <h1>Welcome to Remix</h1>

            <div className="flex gap-2">
                <Button label="Primary"
                    kind="primary"
                    click={() => console.log('click primary')}/>
                <Button label="Secondary" kind="secondary" />
                <Button label="Inverted" kind="inverted" />

                <CircleButton icon="/img/linkedin.svg"
                    click={() => console.log('circle click')}/>
            </div>

            <div className="flex gap-2">
                <Badge name="React" />
                <Badge name="Remix" />
                <Badge name="TailwindCSS" />
            </div>

            <Loader />

            <div className="flex flex-col gap-2 px-8">
                <input type="text" className="input" placeholder="Full name"/>

                <select className="select">
                    <option value="1">Opcao 1</option>
                    <option value="2">Opcao 2</option>
                    <option value="3">Opcao 3</option>
                </select>
            </div>
        </div>
    );
}
