import React, { useState } from "react";
import {Link, Element} from 'react-scroll'
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Programs from "components/features/TwoColWithTwoHorizontalFeaturesAndButton"

import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

const subjects = ["English", "Math", "Private Tutoring"]

const english = [[
    {
        Icon: BriefcaseIcon,
        title: "K-6th Common Core",
        description: "Create an account with us using Google or Facebook.",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    },
    {
        Icon: SvgDotPattern,
        title: "Phonics",
        description: "Browse and Download the template that you like from the marketplace.",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    }],[
    {
        Icon: MoneyIcon,
        title: "Reading Comprehension",
        description: "Follow the instructions to setup and customize the template to your needs.",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    },
    {
        Icon: MoneyIcon,
        title: "Writing/Essay Writing",
        description: "Follow the instructions to setup and customize the template to your needs.",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    }],[
    {
        Icon: MoneyIcon,
        title: "ELA",
        description: "Follow the instructions to setup and customize the template to your needs.",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    },
    {
        Icon: MoneyIcon,
        title: "Private Tutoring for ELD",
        description: "Follow the instructions to setup and customize the template to your needs.",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    }],[
    {
        Icon: MoneyIcon,
        title: "ESL/Adult",
        description: "Follow the instructions to setup and customize the template to your needs.",
        iconContainerCss: tw`bg-teal-300 text-teal-800`
    }]
]

const math = [
    [
        {
            Icon: BriefcaseIcon,
            title: "Common Core Math",
            description: "Create an account with us using Google or Facebook.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        },
        {
            Icon: SvgDotPattern,
            title: "Singapore Math k-6th",
            description: "Browse and Download the template that you like from the marketplace.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        }
    ],
    [
        {
            Icon: BriefcaseIcon,
            title: "Maths Olypiad",
            description: "Create an account with us using Google or Facebook.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
        },
        {
            Icon: SvgDotPattern,
            title: "Private tutoring",
            description: "Browse and Download the template that you like from the marketplace.",
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

const HeaderRow = tw.div`flex justify-end items-center flex-col xl:flex-row px-32`;
const TabsControl = styled.div`
    position: sticky;
    top: 0;
    ${tw`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`}
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
            features = {tutoring}
            imageSrc=""
            />
        </Element>
        <Footer/>
      </AnimationRevealPage>
    );
  };  