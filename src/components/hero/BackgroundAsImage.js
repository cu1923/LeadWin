import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import image from "../../images/bg8.jpeg";

const NavbarDropdownContent = styled.div`
    display: none;
    position: absolute;
    min-width: 200px;
    background: linear-gradient(0deg, rgba(100, 21, 255, 0.8) 97%, rgba(0, 0, 0, 0) 3%);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
    padding: 12px 6px;
    padding-left: 15px;
    z-index: 1;  
    line-height: 2.5;
  `;

const NavbarDropdown = styled.div`
    position: relative;
    display: inline-block;
    &:hover ${NavbarDropdownContent} {
      display: block;
    }
  `;

const DropdownLink = tw.a`
    text-lg my-2 lg:text-xs lg:my-0
    font-semibold tracking-wide transition duration-300
    pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-400
`;

const StyledHeader = styled(Header)`
  ${tw`pt-10 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-400`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url(${image});
  opacity:0.8;
`;
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-400 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-400 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
    <NavLink href="/about">About</NavLink>
    <NavLink>
      <NavbarDropdown>
        Programs
        <NavbarDropdownContent>
          <DropdownLink href="/academic"> Academic Program </DropdownLink>  <br></br>
          <DropdownLink href="/enrichment">Enrichment Program</DropdownLink> <br></br>
          <DropdownLink href="/summercamp">Summer Camp</DropdownLink> <br></br>
          <DropdownLink href="/privatetutor">Private Tutoring</DropdownLink> <br></br>
          <DropdownLink href="/pretest">Pre-test</DropdownLink> <br></br>
          <DropdownLink href="/collegeprep">College Prep</DropdownLink> <br></br>
        </NavbarDropdownContent>
      </NavbarDropdown>
    </NavLink>
    <NavLink href="/teachers"> Teachers </NavLink>
    <NavLink href="/demo"> Demo Classes</NavLink>
    <NavLink href="/contact-us"> Contact Us</NavLink>
    {/* <NavLink href="/login" tw="lg:ml-12!">
      Login
    </NavLink>
    <PrimaryLink css={roundedHeaderButton && tw`rounded-full`}href="/#">Sign Up</PrimaryLink> */}
  </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>We have now launched operations in Europe.</Notification>
            <Heading>
              <span>Hire the best</span>
              <br />
              <SlantedBackground>Marketing</SlantedBackground>
            </Heading>
            <PrimaryAction>Read Customer Stories</PrimaryAction>
          </LeftColumn>
          <RightColumn>
            <StyledResponsiveVideoEmbed
              url="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
              background="transparent"
            />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
