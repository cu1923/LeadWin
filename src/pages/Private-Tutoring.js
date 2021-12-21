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

const subjects = []


const HeaderRow = tw.div`flex justify-end items-center flex-col xl:flex-row px-32`;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
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
        <Element name="">
            <Programs
                subheading = {''}
                heading = {(
                    <>
                    <span tw="text-primary-400"> </span>
                    </>
                )}
                features = {[[]]}
                imageSrc=""
            />
        </Element>
        <Footer/>
      </AnimationRevealPage>
    );
  };  