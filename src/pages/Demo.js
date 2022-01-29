import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import Cards from "components/cards/ThreeColSlider.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>Molly</Subheading>}
        heading="Oral Spanish"
        buttonRounded={false}
        description="This is one of our most popular teachers, Ms. Molly’s Spanish Oral class for k-3rd students who already have some experience with the Spanish language."
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/LzaSVRNI4GQ"
      />
      <MainFeature1
        subheading={<Subheading>Frances</Subheading>}
        heading="English"
        description="This is one of our most professional teachers, Ms. Frannie's English class aiming to enhance students' English listening, writing and speaking skills. "
        buttonRounded={false}
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/2pUcEx8EOdA"
        textOnLeft={false}
      />
      <Footer />
    </AnimationRevealPage>
  );
};

<iframe width="1424" height="620" src="https://www.youtube.com/embed/2pUcEx8EOdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>