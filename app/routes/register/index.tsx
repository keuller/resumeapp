import TopBar from "~/components/TopBar";
import ContactSection from "~/components/registerFeature/ContactSection";
import LocationSection from "~/components/registerFeature/LocationSection";
import EducationSection from "~/components/registerFeature/EducationSection";
import SkillSection from "~/components/registerFeature/SkillSection";
import PrivacySection from "~/components/registerFeature/PrivacySection";
import AvailabilitySection from "~/components/registerFeature/AvailabilitySection";
import ExperienceSection from "~/components/registerFeature/ExperienceSection";

export default function () {
    return (
        <div>
            <TopBar />
            <AvailabilitySection />
            {/* <ContactSection />   */}
            {/* <LocationSection /> */}
            {/* <EducationSection /> */}
            {/* <ExperienceSection /> */}
            {/* <SkillSection />  */}
            {/* <PrivacySection /> */}
        </div>
    )
}