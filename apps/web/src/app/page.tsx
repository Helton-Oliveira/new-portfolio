import CustomCursor from "@/shared/components/CustomCursor";
import ScrollRevealInit from "@/shared/components/ScrollRevealInt";
import NavBar from "@/features/navbar/components/NavBar";
import HeroSection from "@/features/heroSection/components/HeroSection";
import AboutSection from "@/features/about/components/AboutSection";
import SkillsSection from "@/features/Skills/components/SkillsSection";
import ProjectsSection from "@/features/project/components/ProjectSection";

export default function Home() {

    return (
        <>
            {/* Google Fonts */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&display=swap');`,
                }}
            />

            <CustomCursor/>

            <ScrollRevealInit/>

            <NavBar/>

            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectsSection/>
            </main>
        </>
    );
}
