import type { V2_MetaFunction } from "@remix-run/node";
import { Badge } from "~/components/basic/Badge";
import { Button, CircleButton } from "~/components/basic/Button";
import { Loader } from "~/components/basic/Loader";
import { CheckBox, Radio } from "~/components/basic/form";
import TopBar from "~/components/templates/TopBar";

export const meta: V2_MetaFunction = () => {
    return [{ title: "GetRezume" }];
};

export default function Index() {
    return (
        <div className="flex flex-col gap-4">
            <TopBar />

        </div>
    );
}
