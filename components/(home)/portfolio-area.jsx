import { portfolioArea } from "../../data/site";
import PortfolioLine from "./ui/portfolio-line";
import PortfolioMarquee from "./ui/portfolio-marquee";
import PortfolioLineModal from "./ui/portfolio-line-modal";

export default function PortfolioArea() {
    return (
        <div id="works" className="portfolio-area over-hidden pb-135">
            {/* marquee start */}
            <PortfolioMarquee />
            {/* marquee end */}
            <div className="portfolio-wrapper position-relative mt--5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="title text-center">
                                <span className="theme-color text-uppercase d-block mb-6">
                                    Portfolio
                                </span>
                                <h2>My Recent Works</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row portfolio mt-80">
                        {/* portfolio line start */}
                        {portfolioArea?.slice(0, 4).map((item, i) => (
                            <div key={i} className="col-12">
                                <PortfolioLine data={item} />
                            </div>
                        ))}
                        {/* portfolio line end */}
                    </div>
                    {/* portfolio line modal start */}
                    <PortfolioLineModal />
                    {/* portfolio line modal end */}
                </div>
            </div>
        </div>
    );
}
