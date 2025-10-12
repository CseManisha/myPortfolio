import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import { FooterSection } from "../components/FooterSection"
import { HomeSection } from "../components/HomeSection"
import { Navbar } from "../components/Navbar"
import { ProjectSection } from "../components/ProjectSection"
import { SkillSection } from "../components/SkillsSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home =()=>{
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden " >

            {/* theme Toggle */}
            <ThemeToggle />
            {/* Background effects */}
            <StarBackground />
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <HomeSection />
            <AboutSection />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
            {/* footer */}
            <FooterSection />


        </div>
    )
}