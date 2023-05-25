import type { V2_MetaFunction } from "@remix-run/node";
import Button from "~/components/basic/Button";

export const meta: V2_MetaFunction = () => {
    return [{ title: "GetRezume" }];
};

export default function Index() {
    return (
        <div className="flex flex-col gap-2">
            <h1>Welcome to Remix</h1>

            <div className="flex gap-2">
                <Button label="Primary"
                    kind="primary" click={() => console.log('click primary')}/>
                <Button label="Secondary" kind="secondary" />
                <Button label="Inverted" kind="inverted" />
            </div>
        </div>
    );
}
