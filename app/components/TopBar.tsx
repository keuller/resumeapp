import { Link } from '@remix-run/react';
import { Icons } from '~/lib/icons';


export default function TopBar() {
    return (
        <header id="topbar" className="flex bg-white sticky -top-1 py-2 z-50">
            <div className="flex flex-1 items-center px-3 lg:px-16 justify-between">
                <Link to="/">
                    <img src={Icons.LOGO} alt="logo" />
                </Link>

                <a href="#" className="flex items-center gap-1 w-[70px]">
                    <img src={Icons.USER} alt="user" width="24" height="24" />
                    <span className="text-sm">Log in</span>
                </a>
            </div>
        </header>
    )
}