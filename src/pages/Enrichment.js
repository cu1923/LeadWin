import React, { useState } from "react";
import {Link, Element} from 'react-scroll'
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Programs from "components/features/TwoColWithTwoHorizontalFeaturesAndButton"
import { ReactComponent as Blobone } from "images/blob1.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import { ReactComponent as Blobthree } from "images/blob3.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import spanishflyer from "images/spanishflyer.jpg"
import icon2 from "images/icon2.png"
import icon3 from "images/icon3.png"
import icon4 from "images/icon4.png"
import icon5 from "images/icon5.png"
import codingflyer from "images/codingflyer.jpg"


const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const Blob1 = styled(Blobone)`
  ${tw`pointer-events-none absolute bottom-0 left-0 w-72 transform -translate-x-16 translate-y-500`}
  opacity: 10%;
`;

const Blob2 = styled(Blobthree)`
  ${tw`pointer-events-none absolute left-0 bottom-0 w-72 opacity-10 transform -translate-x-48 translate-y-128`}
`;

const subjects = ["Coding", "Languages", "Speech & Public Speaking", "Debate", "Art"]
const Header1 = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`;
const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row px-12`;
const TabsControl = styled.div`
    ${tw`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none xl:mt-0`}
`;
const TabControl = styled.div`
  
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;
const Intro = tw.p`mt-4 text-sm md:text-base lg:text-lg mx-12 my-8 font-medium leading-relaxed text-secondary-100 `;

const languages = [
    [ 
        {
            Icon: icon2,
            title: "Spanish",
            description: "Systematic course design with 6 levels ranging from beginner to advanced level conversational Spanish.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        },
        {
            Icon: icon4,
            title: "Chinese",
            description: "Methodical course structure with 6 difficulty levels using Chinese language textbooks《中文》, 《美洲华语》.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        }
    ],
    [
        {
            Icon: icon5,
            title: "French",
            description: "Ordered course system with beginner, intermediate and advanced levels covering introductory French to fluent conversations.  ",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        },
        {
            Icon: icon3,
            title: "Korean",
            description: "Standardized exploration of the Korean language at 3 different proficiency levels with an emphasis on listening, speaking and reading.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        }
    ]
]

export default () => {
    const [activeTab, setActiveTab] = useState(subjects[0]);
    return (
      <>
      <AnimationRevealPage>
        <Header />
        <HeaderRow>
            <Header1> Enrichment Program</Header1>
            <TabsControl>
                {subjects.map((tabName, index) => (
                <Link activeClass="active"
                    to={tabName}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    isDynamic={true}
                    onSetActive={activeTab === tabName}
                    onSetInactive={activeTab === tabName}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                >
                    <TabControl active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                        {tabName}
                    </TabControl>
                </Link>
                ))}
            </TabsControl>
        </HeaderRow>      
        <Intro> Aims to lead students by their interests and to provide rewarding and diverse courses to fill their spare time with fun activities and useful knowledge for future advancements.  </Intro>
        
        <Element name="Coding">
            <Programs
                subheading = {''}
                heading = {(
                    <>
                    <span tw="text-primary-400"> Coding </span>
                    </>
                )}
                features = {[[]]}
                description="Our goals are to build the next generation of technology innovators and encourage them to replenish the fields of programming and entrepreneurship. Our Online Coding Program offers a wide variety of coding curriculums for K-8th graders, including Scratch, Python, Java, JavaScript etc at different levels. "
                imageSrc={codingflyer}
            />
        </Element>

        <Element name="Languages">
            <Programs
                subheading = {''}
                heading = {(
                    <>
                    <span tw="text-primary-400"> Languages </span>
                    </>
                )}
                features = {languages}
                description="A multilingual program open for k-12 students and adults with systematic learning to satisfy various interets and needs of students with/without experience. Languages include Spanish, Chinese, French, Korean, etc offered at different levels."
                imageSrc={spanishflyer}
                textOnLeft = {false}
            />
        </Element>

        <Element name="Speech & Public Speaking">
            <Programs
                subheading = {''}
                heading = {(
                    <>
                    <span tw="text-primary-400"> Speech & Public Speaking </span>
                    </>
                )}
                features = {[[]]}
                description="Designed for k-8th students to establish confidence and control over different aspects of body language (eye contact, voice modjlation, facial expressions) by practicing speech and public speaking. Course content includes the principles and application of valid speech, composition of text and impromtu speech."
                imageSrc=""
            />
        </Element>

        <Element name="Debate">
            <Programs
                subheading = {''}
                heading = {(
                    <>
                    <span tw="text-primary-400"> Debate </span>
                    </>
                )}
                features = {[[]]}
                imageSrc=""
                description="A program for 2-5th graders focusing on fundamental debate skills with emphasis on Research and Critical thinking, logical and analytical skills, organized thoughts and forming an Opinion, as well as basic skill training such as flowing, intonation, delivery of the speech and crossfire, etc. Classes to offer include Lincoln Douglas Debate, Public Forum Debate and Congress Debate."
                textOnLeft = {false}
            />
        </Element>

        <Element name="Art">
            <Programs
                subheading = {''}
                heading = {(
                    <>
                    <span tw="text-primary-400"> Art </span>
                    </>
                )}
                features = {[[]]}
                imageSrc=""
                description="Art classes for the younger kids including Drawing, Creative color painting, Monochromatic or Color Scheme Painting, Pattern Designs, Sketch and Crafts as well."
            />
        </Element>
        <br></br><br></br><br></br>
        <Footer/>
      </AnimationRevealPage>
      <DecoratorBlob></DecoratorBlob>
      <Blob1 />
      <Blob2 />
      </>
    );
  };  