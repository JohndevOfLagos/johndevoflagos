
import Hero from "../../components/(home)/hero";
import Header1 from "../../components/header/header-1";
import IntroFeature from "../../components/(home)/intro-feature";
import About from "../../components/(home)/about";
import PortfolioArea from "../../components/(home)/portfolio-area";
import FunFact from "../../components/(home)/fun-fact";
import AwardArea from "../../components/(home)/award-area";
import Experience from "../../components/(home)/experience";
import Education from "../../components/(home)/education";
import SkillArea from "../../components/(home)/skill-area";
import ServiceArea from "../../components/(home)/service-area";
import SupportMe from "../../components/(home)/support-me";
import Pricing from "../../components/(home)/pricing";
import Testimonial from "../../components/(home)/testimonial";
import dynamic from "next/dynamic";
import BlogArea from "../../components/(home)/blog-area";
import Footer from "../../components/footer/footer";

const Contact = dynamic(() => import("../../components/(home)/contact"), {
    ssr: false,
});



export default function Home() {
    return (
        <>
            <Header1 />
            <Hero />
            <IntroFeature />
            <About />
            <PortfolioArea />
            <SupportMe/>
            <FunFact />
            <AwardArea />
            <Experience />
            <Education />
            <SkillArea />
            <ServiceArea />
            <Pricing />
            <Testimonial />
            <Contact />
            <BlogArea />
            <Footer />
        </>
    );
}




