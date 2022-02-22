import React, { useState } from "react";
import {Link, Element} from 'react-scroll'
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Programs from "components/features/TwoColWithTwoHorizontalFeaturesAndButton"
import pic1 from "images/private1.jpeg"
import history from "images/history.jpeg"
import bio from "images/bio.jpeg"
import lang from "images/languages.jpeg"

const subjects = ["English & Math", "History & Social Studies", "Biology, Chemistry & Physics", "Languages"]


const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row px-12`;
const Header1 = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base sm:w-auto text-center`}
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
            <Header1> Private Tutoring </Header1>
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
        <Intro> All subject private tutoring for k-12th. 1on1 & 1on2 setting based on the needs of the students. Personalized and customized courses. Class schedules are flexible, can start at any time.</Intro>

        <Element name="English & Math">
            <Programs
                subheading = {''}
                heading = {(
                    <>
                    <span tw="text-primary-400">English & Math</span>
                    </>
                )}
                features = {[[]]}
                imageSrc={pic1} 
                description="English and Math tutoring for k-12th students at different levels. Tailored course content based on student’s results of the evaluation test, ensures that both academic and individual needs are satisfied alongside aid to school work. "                        
            />
        </Element>

        <Element name="History & Social Studies">
            <Programs
                subheading = {''}
                heading = {(
                    <>
                    <span tw="text-primary-400"> History & Social Studies </span>
                    </>
                )}
                features = {[[]]}
                imageSrc={history}
                textOnLeft = {false}
                description="Homework related tutoring and test preparations for subjects of history and social sciences for 6-12th graders.  "                        
            />
        </Element>

        <Element name="Biology, Chemistry & Physics">
            <Programs
                subheading = {''}
                heading = {(
                    <>
                    <span tw="text-primary-400"> Biology, Chemistry & Physics </span>
                    </>
                )}
                features = {[[]]}
                imageSrc={bio}
                description="Homework related tutoring and test preparations for subjects of biology, chemistry and physics for 8-12th graders.  "                        
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
                features = {[[]]}
                imageSrc={lang}
                textOnLeft = {false}
                description="Personalized language tutoring including Spanish, Chinese, Korean, French, etc for k-12th students as well as adults. "                        
            />
        </Element>

         <br></br><br></br><br></br>
        <Footer/>
      </AnimationRevealPage>
    );
  };  