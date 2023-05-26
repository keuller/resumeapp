import { Button } from "~/components/basic/Button";
import { CheckBox } from "~/components/basic/form";
import FooterApp from "~/components/templates/FooterApp";
import TopBar from "~/components/templates/TopBar";

export default function LoginPage(): JSX.Element {
    return (
        <div className="flex flex-col items-center h-screen">
            <TopBar />

            <div className="flex-1 w-full px-4 md:w-[468px]">
                <div className="flex items-center justify-center mt-8">
                    <img src="/icons/logo.svg" alt="logo" width={52} height={52} />
                </div>

                <div className="flex flex-col gap-3 mt-12">
                    <input type="email" name="email"
                        placeholder="E-mail"
                        className="input" />

                    <input type="password" name="password"
                        placeholder="Password"
                        className="input" />

                    <div className="flex justify-between">
                        <CheckBox label="Remember me" name="remember" />

                        <a href="#" className="link">
                            Forgot password
                        </a>
                    </div>

                    <div className="flex flex-col mt-6">
                        <Button label="Log in" kind="primary" />
                    </div>
                </div>
            </div>

            <FooterApp />
        </div>
    )
}
