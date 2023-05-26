import type { V2_MetaFunction } from "@remix-run/node";
import Home from "~/components/pages/Home/home";
import FooterApp from "~/components/templates/FooterApp";
import TopBar from "~/components/templates/TopBar";

export const meta: V2_MetaFunction = () => {
    return [{ title: "GetRezume" }];
};

export default function Index() {
    return (
        <div className="flex flex-col gap-4 h-screen">
            <TopBar showLogin />

            <div className="flex-1">
                <Home />
            </div>

            <FooterApp />
        </div>
    );
}
