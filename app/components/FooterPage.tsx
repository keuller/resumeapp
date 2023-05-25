import { Link } from "@remix-run/react";


export default function FooterPage() {
    return (
        <div className="flex items-start justify-between bg-[#00A3FF] w-full mx-auto text-center p-10 border-t-2">
            <div className="flex flex-col items-start gap-4  lg:px-16">
                <span className="text-sm text-white font-semibold">
                    <Link to="/terms-conditions/en">Terms & Conditions</Link>
                </span>

                <span className="text-sm text-white font-semibold">
                    <a href="#">Help</a>
                </span>
            </div>

            <span className="p-3 lg:px-16 text-sm text-white">
                Copyright 2023. &copy;
            </span>
        </div>
    )
}