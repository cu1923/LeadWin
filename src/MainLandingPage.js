import React from "react";
import tw from "twin.macro";
import {animateScroll as scroll} from "react-scroll";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Reviews from "components/testimonials/SimplePrimaryBackground.js";
import Programs from "components/features/DashedBorderSixFeatures"
import { PrimaryButton} from "components/misc/Buttons.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/MiniCenteredFooter.js";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import icon1 from "images/icon1.png"
import icon2 from "images/icon2.png"
import icon3 from "images/icon3.png"
import icon4 from "images/icon4.png"
import icon5 from "images/icon5.png"
import icon6 from "images/icon6.png"

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
        subheading={<Subheading> Our Wonderful Teachers </Subheading>}
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
          { imageSrc: "images/icon1.png", title: "Teacher 2", description: "Teacher 2 description" },
          { imageSrc: "images/icon2.png", title: "Customizable", description: "Teacher 3 description" },
          { imageSrc: "images/shield-icon.svg", title: "Customizable", description: "Teacher 4 description" },
          { imageSrc: "images/shield-icon.svg", title: "Customizable", description: "Teacher 5 description" },
          { imageSrc: "images/shield-icon.svg", title: "Customizable", description: "Teacher 6 description" }
        ]}
        button = {"Learn more about our teachers"}
        description= {"Our team of educators originate from across the United States with profound education background, certified capabilities and years of experience. Our professional teachers will provide the highest quality classes, the most creative learning environment and a variety of class materials for your child to prosper on this long road of knowledge seeking!"}
        buttonUrl = "/teachers"
      />
      <Programs
       heading={
        <>
          Our Professional <span tw="text-primary-400"> Programs </span>
        </>
       }
       cards = {[
        {
          imageSrc: icon1,
          title: "Academic Program",
          description: "ELD/ESL for non-natives and adults. \n \n Small size group classes for K-8th graders including English, Math and Science separated based on students’ grade level. \n\nAll subject private tutoring for K-12th graders including English, Math, Science, History, Biology, Chemistry and Physics, etc. up to AP level."
        },
        { imageSrc: icon2, title: "Enrichment Program", description:"Aims to lead students by their interests and to provide rewarding and diverse courses to fill their spare time with fun activities and useful knowledge for future advancements. \n \nEnrichment courses for younger students, including Coding, Speech & Public speaking, Debate, Art and all Languages (Spanish, Chinese, French, Korean, etc.). "},
        { imageSrc: icon3, title: "Summer Camp", description: "Yearly Program of Academic and Enrichment courses with a lot of fun activities of full-day length. Join us and embark on a learning journey full of enjoyment!"},
        { imageSrc: icon4, title: "Private Tutoring", description: "1on1 and 1on2 private tutoring for k-12th for all subjects based on the needs of the students. \n\nPersonalized curriculum and flexible tutoring schedule, sign up for a customized booster program today!" },
        { imageSrc: icon5, title: "Test Prep", description:"Test Prep program designed specifically for standardized testing such as SAT/ACT/PSAT/AP. \n\n Student will be evaluated first, then teachers will strategically construct a learning plan to boost scores. Available as private tutoring only. "},
        { imageSrc: icon6, title: "College Prep", description: "College counseling for 7-12th graders with professional assistance at every step in the application process from preparation to decision.\n\n Services include the application process, GPA management, letters of recommendation, essay writing and interview guiding."}
      ]}
      />
      <MainFeature
        bigheading = {
          <> Check Out A Demo Class!</>
        }
        subheading={<Subheading> Demo Class </Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        description="This is one of our most popular teachers, Ms. Molly’s Spanish Oral class for k-3rd students who already have some experience with the language."
        imageDecoratorBlob={true}
        primaryButtonText = "See more demo classes"
        primaryButtonUrl = "/demo"
      />
      <Reviews 
        subheading = {"Feedback From Parents"}
        heading = {"Parents Love Us!"}
        description = {"Parents’ feedback on the quality of classes and the student’s progress is extremely valuable to us! Your advice and opinions are what motivate us to move forward in the beter direction. "}
        testimonials = {[
          {
            customerName: "name",
            customerProfile: "Aiden's mother",
            imageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.85&w=256&h=256&q=80",
            quote:
              "My son Aiden is enrolled in the third grade English class. The teachers here are fantastic! My child has always hated online classes, but now he is attending every class on time. As a parent, I couldn’t be more grateful. With the systematic learning, my son not only improved his grade in English significantly, but also made so many friends from different regions. A big thank you to LEAD WIN for providing such a wonderful platform for education!"
          },
          {
            customerName: "name",
            customerProfile: "Celine's mother",
            imageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=256&h=256&q=80",
            quote:
              "I am Celine’s parent who’s taking the Spanish Oral class here. It’s been about a year since she has been learning Spanish in school, but she hated speaking the langauge. However, after taking the Spanish class with LEAD WIN, she’s a lot more willing to talk in Spanish now. This is a great leap of progress for Celine, and I am just as happy to have witnessed the change. Thank you Ms.Molly for all the hard work and effort! Your students love you and your classes very much!"
          },
          {
            customerName: "name ",
            customerProfile: "Cherry's mother",
            imageSrc:
              "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=256&h=256&q=80",
            quote:
              "I am Cherry’s mother, my daughter is doing the Math 1 on 1 tutoring. Cherry disliked Math, and her Math grade in school was very unstable, so I signed her up for a couple of classes just to try it out. She loved it, the teacher seemed professional, too, this cleared my doubt about online school. Now my child has been learning with LEAD WIN for a semester already, her grade in Math was increased a great deal too. I would like to sincerely thank Cherry’s Math teacher Yujun, and LEAD WIN for being a responsible site for online education. "
          },
          {
            customerName: "name ",
            customerProfile: "Cherry's mother",
            imageSrc:
              "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=256&h=256&q=80",
            quote:
              "I am the mother of blank who has been learning coding for over a year now with LEAD WIN. From learning Scratch to advancing into Python, I can tell that my son really likes the teacher and the class atmosphere here. What an accomplishment for him to finish so many different projects along with the other kids here! Aside from coding, my little one also signed up for Math and English. I am more than satisfied with what LEAD WIN has to offer, many thanks!"
          },
          {
            customerName: "name ",
            customerProfile: "Cherry's mother",
            imageSrc:
              "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=256&h=256&q=80",
            quote:
              "I am Cherry’s mother, my daughter is doing the Math 1 on 1 tutoring. Cherry disliked Math, and her Math grade in school was very unstable, so I signed her up for a couple of classes just to try it out. She loved it, the teacher seemed professional, too, this cleared my doubt about online school. Now my child has been learning with LEAD WIN for a semester already, her grade in Math was increased a great deal too. I would like to sincerely thank Cherry’s Math teacher Yujun, and LEAD WIN for being a responsible site for online education. "
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
        description="Here are some frequently asked questions from parents for your reference!"
        faqs={[
          {
            question: "Where are the teacher of your tutoring center from?",
            answer:
              "Our educating team consists of professional teachers from regions across the US."
          },
          {
            question: "Are the teachers qualified to teach?",
            answer:
              "All of our teachers are carefully selected with many years of teaching experiences and distinguished education background. It’s required that they possess relevant qualifications such as teaching certificates, licenses, credentials, TEFL, TESOL"
          },
          {
            question: "How many students are there usually in a group class setting?",
            answer:
              "We set limits on our class size to ensure quality teaching via online classes. The maximum number of students is 6 per class. "
          },
          {
            question: "Is it possible to try a class out? ",
            answer:
              "Clients are welcomed to read about our teachers’ background as well as their teaching style under the “teachers” tab and watch a few demo videos before signing up for the trial class for the teachers. Trial classes will be charged individually."
          },
          {
            question: "How long is each class?",
            answer:
              "1 hour."
          },
          {
            question: "How often is payment due and in what form?",
            answer:
              "Two types of payment: by semester or half a semester. We accept check, Zelle or Venmo."
          }
        ]}
      />
      <div style={{textAlign: `right`}}>
        <PrimaryButton buttonRounded={true} as="a" onClick={() => scroll.scrollToTop()}>
            Back to the top
        </PrimaryButton>
      </div>
      <br></br> <br></br> <br></br>
      <Footer />
    </AnimationRevealPage>
  );
}
