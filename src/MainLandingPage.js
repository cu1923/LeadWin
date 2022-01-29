import React from "react";
import tw from "twin.macro";
import {animateScroll as scroll} from "react-scroll";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithVideo.js";
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
import morgan from "images/morgan.jpg"
import cici from "images/cici.jpg"
import molly from "images/molly.jpg"
import brenda from "images/brenda.jpg"
import marsh from "images/marsh.jpg"
import heather from "images/heather.jpg"
import frances from "images/frances.jpg"
import female from "images/female-user.png"

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
          { imageSrc: molly, title: "Molly", description: "Certified English and Spanish teacher" },
          {
            imageSrc: morgan,
            title: "Morgan",
            description: "Certified English teacher "
          },
          { imageSrc: brenda, title: "Brenda", description: "Certified Math and English teacher" },
          { imageSrc: heather, title: "Heather", description: "Certified English teacher" },
          { imageSrc: marsh, title: "Brittany", description: "Certified Math and Spanish teacher" },
          { imageSrc: frances, title: "Frances", description: "Certified English teacher" },
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
          description: "Professional and comprehensive academic courses for k-12th students to fulfill individual needs and facilitate learning. \n \n Small size group classes for K-8th graders separated based on students’ grade level."
        },
        { imageSrc: icon6, title: "Enrichment Program", description:"Aims to lead students by their interests and to provide diverse courses to fill their spare time tactically for future advancements. \n \nCourses include Coding, Public speaking, Debate, Art and all Languages (Spanish, Chinese, French, Korean, etc.). "},
        { imageSrc: icon4, title: "Summer Camp", description: "\nYearly Program of Academic and Enrichment courses with a lot of fun activities of full-day length. Join us and embark on a learning journey full of enjoyment!"},
        { imageSrc: icon3, title: "Private Tutoring", description: "1on1 and 1on2 private tutoring for k-12th for all subjects based on the needs of the students. \n\nPersonalized curriculum and flexible tutoring schedule, sign up for a customized booster program today!" },
        { imageSrc: icon2, title: "Test Prep", description:"Test Prep program designed specifically for standardized testing such as SAT/ACT/PSAT/AP. \n\n Student will be evaluated first for teachers to strategically construct a learning plan to boost scores. Available as private tutoring only. "},
        { imageSrc: icon5, title: "College Prep", description: "College counseling for 7-12th graders with professional assistance from preparation to decision.\n\n Services include the application process, GPA management, letters of recommendation, essay writing and interview guiding."}
      ]}
      />
      <MainFeature
        heading = {<>Check Out a <span tw="text-primary-400"> Demo</span></>}
        subheading={<Subheading> Demo Class </Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        description="This is one of our most popular teachers, Ms. Molly’s Spanish Oral class for k-3rd students who already have some experience with the Spanish language."
        imageDecoratorBlob={true}
        primaryButtonText = "See more demo classes"
        primaryButtonUrl = "/demo"
        embed="https://www.youtube.com/embed/LzaSVRNI4GQ"
      />
      <Reviews 
        subheading = {"Feedback From Parents"}
        heading = {"Parents Love Us!"}
        description = {"Parents’ feedback on the quality of classes and the student’s progress is extremely valuable to us! Your advice and opinions are what motivate us to move forward in the better direction. "}
        testimonials = {[
          {
            customerName: "Parent",
            customerProfile: "Aiden's mother",
            imageSrc: female,
            quote:
              "My son Aiden is enrolled in the third grade English class. The teachers here are fantastic! My child has always hated online classes, but now he is attending every class on time. As a parent, I couldn’t be more grateful. With the systematic learning, my son not only improved his grade in English significantly, but also made so many friends from different regions. A big thank you to YoumeCan for providing such a wonderful platform for education!"
          },
          {
            customerName: "Parent",
            customerProfile: "Celine's mother",
            imageSrc: female,
            quote:
              "I am Celine’s parent who’s taking the Spanish Oral class here. It’s been about a year since she has been learning Spanish in school, but she hated speaking the langauge. However, after taking the Spanish class with YoumeCan, she’s a lot more willing to talk in Spanish now. This is a great leap of progress for Celine, and I am just as happy to have witnessed the change. Thank you Ms.Molly for all the hard work and effort! Your students love you and your classes very much!"
          },
          {
            customerName: "Parent",
            customerProfile: "Cherry's mother",
            imageSrc: female,
            quote:
              "I am Cherry’s mother, my daughter is doing the Math 1 on 1 tutoring. Cherry disliked Math, and her Math grade in school was very unstable, so I signed her up for a couple of classes just to try it out. She loved it, the teacher seemed professional, too, this cleared my doubt about online school. Now my child has been learning with YoumeCan for a semester already, her grade in Math was increased a great deal too. I would like to sincerely thank Cherry’s Math teacher Yujun, and YoumeCan for being a responsible site for online education. "
          },
          {
            customerName: "Parent",
            customerProfile: "Jeremy's mother",
            imageSrc:female,
            quote:
              "I am the mother of Jeremy who has been learning coding for over a year now with YoumeCan. From learning Scratch to advancing into Python, I can tell that my son really likes the teacher and the class atmosphere here. What an accomplishment for him to finish so many different projects along with the other kids here! Aside from coding, my little one also signed up for Math and English. I am more than satisfied with what YoumeCan has to offer, many thanks!"
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
              "All of our teachers are carefully selected with many years of teaching experiences and distinguished education background. It’s required that they possess relevant qualifications such as teaching certificates, licenses, credentials, TEFL, TESOL, etc."
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
