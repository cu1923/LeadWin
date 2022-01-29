import React, { useState } from "react";
import {Link, Element} from 'react-scroll'
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import flyer1 from "images/flyer1.jpg"
import flyer2 from "images/flyer2.jpg"

import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

const subjects = []


const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row px-12`;
const Header1 = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const Image = styled.img`
  ${tw`px-12`}
  height:460px;
`;

const Flyer = tw.div`flex flex-col md:flex-row max-w-screen-xl mx-auto items-center`;

const Intro = tw.p`mt-4 text-sm md:text-base lg:text-lg mx-12 my-8 font-medium leading-relaxed text-secondary-100 `;

export default () => {
    const [activeTab, setActiveTab] = useState(subjects[0]);
    return (
      <AnimationRevealPage>
        <Header />
        <HeaderRow>
            <Header1> Summer Camp </Header1>
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
        <Intro>A full-day program lasting 10 weeks every summer. Content ranges from academic subjects to non-academic, interest-oriented classes. Actual subjects include English, Math, Programming, Spanish, Chinese, Public Speaking, Debate, etc. In the mean time, personalized private tutoring is open in all subjects for students with need as well. </Intro>

        <Flyer>
              <Image src={flyer1} alt="flyer1" />
              <Image src={flyer2} alt="flyer2" />
        </Flyer>
         <br></br><br></br><br></br>
        <Footer/>
      </AnimationRevealPage>
    );
  };  