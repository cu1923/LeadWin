import React, { useState } from "react";
import {Link, Element} from 'react-scroll'
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import pic from "images/collegeprep.jpeg"

const subjects = []


const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row px-12`;
const Header1 = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`;
const Flyer = tw.div`flex flex-col md:flex-row max-w-screen-xl mx-auto items-center`;
const Image = styled.img`
  ${tw`px-72`}
`;

const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;
const Intro = tw.p`mt-4 text-sm md:text-base lg:text-lg mx-12 my-8 font-medium leading-relaxed text-secondary-100 `;

export default () => {
    const [activeTab, setActiveTab] = useState(subjects[0]);
    return (
      <AnimationRevealPage>
        <Header />
        <HeaderRow>
            <Header1> College Planning </Header1>
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
        <Intro> College planning for 7-12th graders starting from self discovery to college application, all to prepare students to brace a future of individual fulfillment with confidence. Service is provided at every step of the application process, including class planning, GPA management, letters of recommendation, essay writing and interview guiding.</Intro>

        <Flyer>
              <Image src={pic} alt="flyer1" />
        </Flyer>
         <br></br><br></br><br></br>
        <Footer/>
      </AnimationRevealPage>
    );
  };  