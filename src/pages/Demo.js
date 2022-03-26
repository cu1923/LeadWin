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
        textOnLeft={false}
        embed="https://www.youtube.com/embed/LzaSVRNI4GQ?rel=0"
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
        subheading={<Subheading>Ms. Morgan</Subheading>}
        heading={ <Heading> English  <Subheading tw="text-primary-700 text-xl">Clip from Class</Subheading> </Heading>}
        description="This is Ms. Morgan's 7th English class which mainly focuses on Literature Appreciation & Analysis. The class clip discusses reasons against the death penalty which the students have been debating about in class."
        buttonRounded={false}
        primaryButtonText="Sign Up"
        textOnLeft={false}
        embed="https://www.youtube.com/embed/jGN65MCEHlE?rel=0"
      />
      <MainFeature1
        subheading={<Subheading>Ms. Johanna</Subheading>}
        heading={ <Heading> English  <Subheading tw="text-primary-700 text-xl">Clip from Class</Subheading> </Heading>}
        description="This is Ms. Johanna's 3rd grade English class, mainly focusing on reading comprehension and writing. The class is to learn about Drama and use role-playing to strengthen reading comprehension."
        buttonRounded={false}
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/F_4W7nAphbk?rel=0"
      />
      <MainFeature1
        subheading={<Subheading>Ms. Uriyah</Subheading>}
        heading={ <Heading> Coding <Subheading tw="text-primary-700 text-xl">Clip from Class</Subheading> </Heading>}
        description="This is Ms. Uriyah's beginning level Python class for students who already have some experience with coding or Scratch and are aiming to advance further into a more difficult language.  "
        buttonRounded={false}
        primaryButtonText="Sign Up"
        textOnLeft={false}
        embed="https://www.youtube.com/embed/J-pq3Onb9r8?rel=0"
      />
      <MainFeature1
        subheading={<Subheading>Ms. Genevieve</Subheading>}
        heading={ <Heading> Spanish <Subheading tw="text-primary-700 text-xl">Clip from Class</Subheading> </Heading>}
        description="This is Ms. Gen's beginning level Spanish class for upperclass students who have no prior experience with the Spanish language and are aiming to learn about not only speaking but also reading and writing in Spanish. "
        buttonRounded={false}
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/BthDQ5dnTeE?rel=0"
      />
       <MainFeature1
        subheading={<Subheading>Ms. Heather</Subheading>}
        heading={ <Heading> English <Subheading tw="text-primary-700 text-xl">Clip from Class</Subheading> </Heading>}
        description="This is one on one English private tutoring for 4th grader, the tutoring session focuses on overcoming student's weaknesses based on both in class assessment and the progress report from school."
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/hEqUqxER8HQ?rel=0"
      />
      <MainFeature1
        subheading={<Subheading>Mr. Wilder</Subheading>}
        heading={ <Heading> Spanish  <Subheading tw="text-primary-700 text-xl">Clip from Class</Subheading> </Heading>}
        description="This is Mr.Wilder's Advanced Spanish class Level 3 (Grammar & Conversational Spanish) where students learn about spanish used in everyday life with a native speaker."
        buttonRounded={false}
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/7OVZDnVhboY?rel=0"
      />
      <MainFeature1
        subheading={<Subheading>Ms. Brittany</Subheading>}
        heading={ <Heading> Math </Heading>}
        description="This is Ms. Brittany's Singapore Math for 2nd graders. This demo class demonstrates the principle of multiplication and how numbers are computed in the times table. "
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/gUO5myi13G0?rel=0"
      />
      <MainFeature1
        subheading={<Subheading>Ms. Rebecca</Subheading>}
        heading={ <Heading> English </Heading>}
        description="This is the demo class for 1st Grade English, let’s read a fine story and learn some new words together!"
        buttonRounded={false}
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/KaHqlMclBJM?rel=0"
      />
      <MainFeature1
        subheading={<Subheading>Ms. Frances</Subheading>}
        heading="English"
        description="This is Ms. Frannie's English class aiming to enhance students' English listening, writing and speaking skills with both professionalism and approachablility.  "
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/2pUcEx8EOdA?rel=0"
      />
      <MainFeature1
        subheading={<Subheading>Ms. Cici</Subheading>}
        heading={ <Heading> Chinese <Subheading tw="text-primary-700 text-xl">Clip from Class</Subheading> </Heading>}
        description="This is Ms. Cici's second level Chinese class in the 6-level Chinese language course system with a prerequisite of level 1. Students will focus on listening, reading and speaking the Chinese language."
        buttonRounded={false}
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/H1Lo9JzC_SU?rel=0"
      />
      <MainFeature1
        subheading={<Subheading> Ms. Molly</Subheading>}
        heading={ <Heading> Spanish <Subheading tw="text-primary-700 text-xl">Clip from Class</Subheading> </Heading>}
        buttonRounded={false}
        description="This is Ms. Molly’s beginning level Spanish Oral class for k-1st graders with no prior experience with the Spanish language. "
        primaryButtonText="Sign Up"
        textOnLeft={false}
        embed="https://www.youtube.com/embed/0frqTuyUEyA?rel=0"
      />
      <MainFeature1
        subheading={<Subheading>Ms. Genevieve</Subheading>}
        heading={ <Heading> Spanish <Subheading tw="text-primary-700 text-xl">Clip from Class</Subheading> </Heading>}
        description="This is Ms. Gen's beginning level Spanish class for lowerclass students who have some prior experience with Spanish and are hoping to expand vocabulary and understanding."
        buttonRounded={false}
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/jZ1jvT3ulfI?rel=0"
      />
      <MainFeature1
        subheading={<Subheading>Ms. Uriyah</Subheading>}
        heading={ <Heading> Coding <Subheading tw="text-primary-700 text-xl">Clip from Class</Subheading> </Heading>}
        description="This is Ms. Uriyah's beginning level Coding class using Scratch. Scratch is a block-based coding language for younger kids with basic Math skills that can serve as an introduction to language-based coding."
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/m2yttejKF4k?rel=0"
      />
      <MainFeature1
        subheading={<Subheading>Ms. Brittany</Subheading>}
        heading={ <Heading> Spanish  <Subheading tw="text-primary-700 text-xl">Clip from Class</Subheading> </Heading>}
        description="This is Ms. Brittany's Intermediate Level Spanish class, the kids have already finished the Beginning level. The class is to go over and review some recently learned vocabulary. "
        buttonRounded={false}
        primaryButtonText="Sign Up"
        embed="https://www.youtube.com/embed/FYAKZ-Tuthg?rel=0"
      />
      <Footer />
    </AnimationRevealPage>
  );
};

<iframe width="1424" height="620" src="https://www.youtube.com/embed/2pUcEx8EOdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>