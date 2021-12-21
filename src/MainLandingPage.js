import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Reviews from "components/testimonials/SimplePrimaryBackground.js";
import Programs from "components/features/DashedBorderSixFeatures"
import Card from "components/cards/TabCardGrid"
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-400`;
  const HighlightedText = tw.span`text-primary-400`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true}/>
      <Features
        subheading={<Subheading> Teachers </Subheading>}
        heading={
          <>
            Top Tier<HighlightedText> Educators </HighlightedText>
          </>
        }
        cards = {[
          {
            imageSrc: "images/shield-icon.svg",
            title: "Teacher 1",
            description: "Teacher info "
          },
          { imageSrc: "images/shield-icon.svg", title: "Teacher 2", description: "Teacher 2 description" },
          { imageSrc: "images/shield-icon.svg", title: "Customizable", description: "Teacher 3 description" },
          { imageSrc: "images/shield-icon.svg", title: "Customizable", description: "Teacher 4 description" },
          { imageSrc: "images/shield-icon.svg", title: "Customizable", description: "Teacher 5 description" },
          { imageSrc: "images/shield-icon.svg", title: "Customizable", description: "Teacher 6 description" }
        ]}
        button = "Learn more about our teachers"
        buttonUrl = "/teachers"
      />
      <Programs
       heading={
        <>
          Our Profressional <span tw="text-primary-400"> Programs </span>
        </>
       }
       cards = {[
        {
          imageSrc: ShieldIconImage,
          title: "Academic Program",
          description: "We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou."
        },
        { imageSrc: SupportIconImage, title: "Enrichment Program" },
        { imageSrc: CustomizeIconImage, title: "Summer Camp" },
        { imageSrc: ReliableIconImage, title: "Private Tutoring" },
        { imageSrc: FastIconImage, title: "Pre-test" },
        { imageSrc: SimpleIconImage, title: "College Prep" }
      ]}
      />
      <MainFeature
        bigheading = {
          <> Here Are Our Demo Classes </>
        }
        subheading={<Subheading> Class 1 </Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
        primaryButtonText = "See more demo classes"
        primaryButtonUrl = "/demo"
      />
      <Reviews 
        subheading = {"subheading"}
        heading = {"Parents Love Us!"}
        description = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        testimonials = {[
          {
            customerName: "David Hanson",
            customerProfile: "CEO, Koalify",
            imageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.85&w=256&h=256&q=80",
            quote:
              "We have been using servana for about 2 years. And in that time we have had no problem at all. The user interface is really simple to use. Our services scale automatically and we never have to worry about downtimes. is as described."
          },
          {
            customerName: "Serena Davis",
            customerProfile: "Founder, Travana",
            imageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=256&h=256&q=80",
            quote:
              "We are delighted with the quality and performance of the servers that servana provides. The uptime is amazing and the internet connection is great for the price we are paying."
          },
          {
            customerName: "Timothy Burr",
            customerProfile: "CTO, Coronax",
            imageSrc:
              "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=256&h=256&q=80",
            quote:
              "It has been 8 months since we have switched to servana and it has nothing but an amazing experience. The cost is affordable, support is great, uptime is as described."
          }
        ]}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "Are all the templates easily customizable ?",
            answer:
              "Yes, they all are. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "How long do you usually support an standalone template for ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "What kind of payment methods do you accept ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Is there a subscribption service to get the latest templates ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Are the templates compatible with the React ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Do you really support Internet Explorer 11 ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
