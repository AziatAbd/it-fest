import { lazy } from "react";
import Layout from "../components/Layout/Layout";
import { Hero } from "../components/Sections/Hero/Hero";

const MainSection = lazy(() =>
  import("../components/Sections/MainSection/MainSection")
);
const SecondSection = lazy(() =>
  import("../components/Sections/SecondSection/SecondSection")
);
const PartnerSection = lazy(() =>
  import("../components/Sections/PartnerSection/PartnerSection")
);
const AboutSection = lazy(() =>
  import("../components/Sections/AboutSection/AboutSection")
);
const TournamentsSection = lazy(() =>
  import("../components/Sections/TournamentsSection/TournamentsSection")
);
const PacketSection = lazy(() =>
  import("../components/Sections/PacketSection/PacketSection")
);
const ExpoSection = lazy(() =>
  import("../components/Sections/ExpoSection/ExpoSection")
);
const WorkSection = lazy(() =>
  import("../components/Sections/WorkSection/WorkSection")
);

const HomePage = () => {
  return (
    <div style={{ color: "white" }}>
      <Layout>
        <Hero />
        <MainSection />
        <TournamentsSection />
        <SecondSection />
        <PartnerSection />
        <AboutSection />
        <PacketSection />
        <ExpoSection />
        <WorkSection />
      </Layout>
    </div>
  );
};

export default HomePage;
