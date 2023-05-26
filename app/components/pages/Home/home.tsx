import AboutUs from "./AboutUs";
import BannerCta from "./BannerCta";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Register from "./Register";

export default function Home(): JSX.Element {
    return (
        <>
            <Hero />

            <Register />

            <HowItWorks />

            <AboutUs />

            <BannerCta />
        </>
    )
}
