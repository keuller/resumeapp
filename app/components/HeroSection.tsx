import { Icons } from "~/lib/icons";

import { GrButton, GrCircleButton } from "./basic/GrButton";

export default function HeroSection() {
    return (
        <section id="register" className="relative flex flex-col lg:flex-row items-center justify-around gap-10 bg-gray-100 min-h-[620px] p-10 lg:min-h-[850px] border-b-8 border-b-[#00A3FF]">
            <div className="bg-hero"></div>

            <div className="block z-20 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-6xl leading-[86px] text-black">Easy. Simple. Fast.</h1>
                <p className="text-1xl md:text-2xl text-black">Create and share your resume in few clicks.</p>
            </div>

            <form id="register" className="register-form">
                <h2 className="text-xl text-slate-700 text-center px-3 leading-8 lg:block">Start now and see!</h2>

                <input type="text" name="full_name"
                    placeholder="Full name" maxLength={50}
                    className="border border-gray-200 leading-4 rounded-md px-2 py-3 outline-none focus:border-blue-300" />

                <input id="email" type="email" name="full_name"
                    placeholder="E-mail" maxLength={120}
                    className="border border-gray-200 leading-4 rounded-md px-2 py-3 outline-none focus:border-blue-300" />

                <input id="password" type="password" name="password"
                    placeholder="Password" maxLength={40}
                    className="border border-gray-200 leading-4 rounded-md px-2 py-3 outline-none focus:border-blue-300" />

                <input id="conf_pass" type="password" name="conf_pass"
                    placeholder="Repeat Password" maxLength={40}
                    className="border border-gray-200 leading-4 rounded-md px-2 py-3 outline-none focus:border-blue-300" />

                <div className="flex justify-center mt-2">
                    <GrButton kind="primary" label="Register" />
                </div>

                <div className="relative flex flex-col mt-3 mb-3 px-10">
                    <div className="flex items-center justify-center">
                        <div className="flex-1 border h-0 border-gray-400">&nbsp;</div>
                        <div className="text-sm px-2">OR</div>
                        <div className="flex-1 border h-0 border-gray-400">&nbsp;</div>
                    </div>
                </div>

                <div className="flex gap-4 items-center justify-center">
                    <GrCircleButton url="#">
                        <img src={Icons.GOOGLE} alt="edit" width="23" />
                    </GrCircleButton>

                    <GrCircleButton url="#">
                        <img src={Icons.GITHUB} alt="edit" width="23" />
                    </GrCircleButton>
                </div>
            </form>
        </section>
    )
}