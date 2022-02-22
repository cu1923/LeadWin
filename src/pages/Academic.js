import React, { useState } from "react";
import {Link, Element} from 'react-scroll'
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Programs from "components/features/TwoColWithTwoHorizontalFeaturesAndButton"
import icon1 from "images/icon1.png"
import icon2 from "images/icon2.png"
import icon3 from "images/icon3.png"
import icon4 from "images/icon4.png"
import icon5 from "images/icon5.png"
import icon6 from "images/icon6.png"
import literature from "images/literature.png"
import international from "images/international.png"
import eld from "images/eld.png"
import eng from "images/English-purple.jpg"
import m from "images/Math.jpg"
import common from "images/common.png"
import ap from "images/ap.png"
import olympiad from "images/olympiad.png"
import sing from "images/sing.png"
import privatepic from "images/private2.jpeg"

const subjects = ["English", "Math", "Private Tutoring"]
const Header1 = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`;
const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row px-12`;
const Intro = tw.p`mt-4 text-sm md:text-base lg:text-lg mx-12 my-8 font-medium leading-relaxed text-secondary-100 `;

const english = [[
    {
        Icon: icon1,
        title: "K-3rd Phonics \nAR Reading",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    },
    {
        Icon: icon2,
        title: "K-6th Reading Comprehension",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    }],[
    {
        Icon: icon3,
        title: "3rd-12th Critical Writing \nEssay Writing",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    },
    {
        Icon: literature,
        title: "6-12th Literature Appreciation & Analysis",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    }],[
    {
        Icon: eld,
        title: "ELD/ESL",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    },
    {
        Icon: international,
        title: "International Students",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    }]
]

const math = [
    [ 
        {
            Icon: common,
            title: "Common Core Math \n (K-8th)",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        },
        {
            Icon: sing,
            title: "Singapore Math (k-6th)",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        }
    ],
    [
        {
            Icon: ap,
            title: "Accelerated/\nAdvanced Placement",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        },
        {
            Icon: olympiad,
            title: "Maths Olympiad/AMC",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        } 
    ]
]

const tutoring = [
    [
        {
            Icon: icon5,
            title: "English",
            description: "Create an account with us using Google or Facebook.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        },
        {
            Icon: icon6,
            title: "Math",
            description: "Browse and Download the template that you like from the marketplace.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        }
    ],
    [
        {
            Icon: icon3,
            title: "History",
            description: "Create an account with us using Google or Facebook.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        },
        {
            Icon: icon2,
            title: "Bio",
            description: "Browse and Download the template that you like from the marketplace.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        }
    ],
    [
        {
            Icon: icon1,
            title: "Physics",
            description: "Create an account with us using Google or Facebook.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        }
    ]
]

const TabsControl = styled.div`
    ${tw`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`}
`;
const TabControl = styled.div`
  
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

export default () => {
    const [activeTab, setActiveTab] = useState(subjects[0]);
    return (
      <AnimationRevealPage>
        <Header />
        <HeaderRow>
            <Header1> Academic Program</Header1>
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
        <Intro>Professional and comprehensive academic courses for k-12th students to fulfill individual needs and facilitate learning. </Intro>
        
        <Element name="English">
            <Programs
                subheading = {''}
                heading = {(
                    <>
                    <span tw="text-primary-400">English</span>
                    </>
                )}
                features = {english}
                imageSrc={eng}
                description="Designed for public and private school students from k-12th based on Common Core State Standards. The program aims to improve students' grades in school and also best accomodate each individual need."
            />
        </Element>

        <Element name="Math" className="element">
            <Programs
            subheading = {''}
            heading = {(
                <>
                <span tw="text-primary-400">Math</span>
                </>
            )}
            features = {math}
            imageSrc={m}
            textOnLeft = {false}
            description="Created for private and public school k-12th students. The program contains four components, Common Core (aligned to school progress), Singapore Math (more challenging than school work), Advanced classes (Accelerated Math or AP) and Math Olympiad/AMC."
            />
        </Element>

        <Element name="Private Tutoring" className="element">
            <Programs
            subheading = {''}
            heading = {(
                <>
                <span tw="text-primary-400">Private Tutoring for All Subjects</span>
                </>
            )}
            imageSrc={privatepic}
            button = "learn more"
            buttonUrl = "/privatetutor"
            description="All subject private tutoring for k-12th. 1on1 and 1on2 setting based on the needs of the students. Personalized and customized courses. Class schedules are flexible, can start at any time."
            />
        </Element>
        <br></br><br></br><br></br>
        <Footer/>
      </AnimationRevealPage>
    );
  };  