import { Icons } from "~/components/basic/Icons";

export default function TopBar(): JSX.Element {
    return (
        <header className="bg-white flex items-center justify-between h-14 px-8">
            <div className="">
                <img src="/img/getrez-logo.png" alt="logo" width={175} height={59} />
            </div>

            <a href="#" className="flex gap-2">
                <img src={Icons.Users} alt="icon" width={24} height={24} />
                <span className="text-base">Log in</span>
            </a>
        </header>
    )
}
