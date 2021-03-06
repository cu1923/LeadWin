import React,{useState} from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "components/misc/Layouts.js";
import { SectionHeading as Heading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
import { PrimaryButton } from "components/misc/Buttons";
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const Subheading = tw(SubheadingBase)`text-center`;
const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-40 h-40 rounded-full`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;

const Description = tw.p`mt-4 text-sm md:text-base lg:text-lg mx-24 font-medium leading-relaxed text-secondary-100 `;


export default ({
  subheading = "YoumeCan Presents",
  heading = "Teachers",
  testimonials = [ [] ],
  description= "",
  bi = false,
}) => {
  const [currDemo, setCurrDemo] = useState("none");
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading> 
        {description && <Description>{description}</Description>}
          {testimonials.map(row => {
              return (
              <Testimonials>
              {row.map(teacher => {
                return (
                  <TestimonialContainer key={teacher}>
                    <Testimonial>
                      <Image src={teacher.imageSrc} />
                      <Quote>"{teacher.quote}"</Quote>
                      <CustomerName>- {teacher.customerName} {teacher.bi && <span tw="text-primary-800"> (Bilingual)</span>} </CustomerName><br></br>
                      {((currDemo === teacher.customerName) && (teacher.embed)) && 
                        <React.Fragment>
                          <ModalVideo channel='youtube' autoplay isOpen={true} videoId={teacher.embed} onClose={() => setCurrDemo("none")} />
                        </React.Fragment>}
                      { teacher.embed && <PrimaryButton onClick={()=> setCurrDemo(teacher.customerName)}>VIEW DEMO</PrimaryButton>}
                    </Testimonial>
                  </TestimonialContainer>
                )
              })}
              </Testimonials>)
            })}
      </ContentWithPaddingXl>

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
