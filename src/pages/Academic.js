import React, { useState } from "react";
import {Link, Element} from 'react-scroll'
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Programs from "components/features/TwoColWithTwoHorizontalFeaturesAndButton"

import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

const subjects = ["English", "Math", "Private Tutoring"]
const Header1 = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`;
const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row px-12`;
const Intro = tw.p`mt-4 text-sm md:text-base lg:text-lg mx-12 my-8 font-medium leading-relaxed text-secondary-100 `;

const english = [[
    {
        Icon: BriefcaseIcon,
        title: "K-3rd Phonics and AR Reading",
        description: "Open to k-3rd students with an emphasis on spelling, vocabulary building, reading fluency, AR leveling, and ultimately the development of genuine interest in reading and good reading habits.",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    },
    {
        Icon: SvgDotPattern,
        title: "K-6th Reading Comprehension",
        description: "Reading fluency, Vocabulary building, Reading Comprehension combined with some grammar.",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    }],[
    {
        Icon: MoneyIcon,
        title: "3rd-12th Critical Writing/Essay Writing",
        description: "Focusing on different types of writing training. Grammar and vocabulary expansion are the important part of this course, critical thinking and logic training as an important addition makes the course more difficult and challenging. ",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    },
    {
        Icon: MoneyIcon,
        title: "6-12th Literature Appreciation and Analysis",
        description: "Intended for 6-12th stduents with a focus on literacy, literary appreciation and analysis, especially for those enrolled in English Honors in need of academic assistance.",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    }],[
    {
        Icon: MoneyIcon,
        title: "ELD/ESL",
        description: "Made for non-native speakers of English, perfect for those who haven’t been in the US for a long time or are currently part of the ELD//ESL program in school.",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    },
    {
        Icon: MoneyIcon,
        title: "International Students",
        description: "Personalizeid English tutoring tailored for foreign students outside of the US. Offered along with supplemental lessons subjected to American public school standards.",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    }]
]

const math = [
    [ 
        {
            Icon: BriefcaseIcon,
            title: "Common Core Math \n (K-8th)",
            description: "Update to date instructions on the student’s homework with abundant practice on the side in accordance with the Common Core State Standards to effectively boost his or her grade in Math.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        },
        {
            Icon: SvgDotPattern,
            title: "Singapore Math (k-6th)",
            description: "Employs the Singapore Math Intensive Practice to train students with challenging Math problems, suitable for those who are beyond the school’s level. ",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        }
    ],
    [
        {
            Icon: BriefcaseIcon,
            title: "Maths Olypiad/AMC",
            description: "Curriculum based on Singaporean Math Olympiad and sample competition problems. Designed for students interested in Math Olympiad competitions such as the American Mathematics Competition. ",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        },
        {
            Icon: SvgDotPattern,
            title: "Accelerated/\nAdvanced Placement",
            description: "Tailored for students going into the honors program. Course content varies depending on the school district. \n The Advanced Placement Test Program provides tutoring specific for AP tests.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        }
    ]
]

const tutoring = [
    [
        {
            Icon: BriefcaseIcon,
            title: "English",
            description: "Create an account with us using Google or Facebook.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        },
        {
            Icon: SvgDotPattern,
            title: "Math",
            description: "Browse and Download the template that you like from the marketplace.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        }
    ],
    [
        {
            Icon: BriefcaseIcon,
            title: "History",
            description: "Create an account with us using Google or Facebook.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        },
        {
            Icon: SvgDotPattern,
            title: "Bio",
            description: "Browse and Download the template that you like from the marketplace.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        }
    ],
    [
        {
            Icon: BriefcaseIcon,
            title: "Physics",
            description: "Create an account with us using Google or Facebook.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        }
    ]
]

const TabsControl = styled.div`
    ${tw`flex flex-wrap bg-gray-200 px-2 rounded leading-none xl:mt-0`}
`;
const TabControl = styled.div`
  
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
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
                imageSrc=""
                description="Designed for public and private school students from k-12th based on Common Core State Standards. On top of classwork, the program covers external content to further enrich the student’s knowledge while improving his or her current grades in school. In addition, there will be private tutoring available for ELD and ESL students to best accomodate each individual need. "
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
            imageSrc=""
            textOnLeft = {false}
            description="Created for private and public school k-12 students. The program contains four components, Common Core (aligned to school progress), Singapore Math (more challenging than school work), Math Olympiad, and Advanced classes (Accelerated Math or AP). "
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
            imageSrc=""
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