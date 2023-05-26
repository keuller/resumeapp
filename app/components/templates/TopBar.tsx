import { Icons } from "~/components/basic/Icons";

export interface TopBarProps {
    showLogin?: boolean
}

export default function TopBar({ showLogin }: TopBarProps): JSX.Element {
    return (
        <header className="bg-white flex items-center justify-between h-14 px-4 lg:px-8 w-full">
            <a href="/">
                <img src="/img/getrez-logo.png" alt="logo" width={175} height={59} />
            </a>

            {showLogin && (<a href="/login" className="flex gap-2">
                <img src={Icons.Users} alt="icon" width={24} height={24} />
                <span className="text-base">Log in</span>
            </a>)}
        </header>
    )
}
