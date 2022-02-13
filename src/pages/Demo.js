import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithVideo.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Heading = tw(SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading> Ms. Molly</Subheading>}
        heading="Oral Spanish"
        buttonRounded={false}
        description="This is Ms. Molly’s Spanish Oral class for k-3rd students who already have some experience with the Spanish language with lively and passionate teaching. "
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/LzaSVRNI4GQ?rel=0"
      />
      <MainFeature1
        subheading={<Subheading>Ms. Frances</Subheading>}
        heading="English"
        description="This is Ms. Frannie's English class aiming to enhance students' English listening, writing and speaking skills with both professionalism and approachablility.  "
        buttonRounded={false}
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/2pUcEx8EOdA?rel=0"
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>Ms. Brenda</Subheading>}
        heading={ <Heading> Math  <Subheading tw="text-primary-700 text-xl">Clip from Class</Subheading> </Heading>}
        description="This is Ms. Brenda's Singapore Math Intensive Practice for Third Graders where students utilize logic and mathematical knowledge to solve various challenging problems."
        buttonRounded={false}
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/vRJg1ovWzZQ?rel=0"
      />
      <MainFeature1
        subheading={<Subheading>Mr. Wilder</Subheading>}
        heading={ <Heading> Spanish  <Subheading tw="text-primary-700 text-xl">Clip from Class</Subheading> </Heading>}
        description="This is Mr.Wilder's Advanced Spanish class Level 3（Grammar & Conversational Spanish) where students learn about spanish used in everyday life with a native speaker."
        buttonRounded={false}
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/7OVZDnVhboY?rel=0"
        textOnLeft={false}
      />
      <Footer />
    </AnimationRevealPage>
  );
};

<iframe width="1424" height="620" src="https://www.youtube.com/embed/2pUcEx8EOdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>