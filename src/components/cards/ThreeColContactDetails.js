import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import image from "../../images/contact.png"

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import { ReactComponent as Blobone } from "images/svg-decorator-blob-6.svg";
import { ReactComponent as Blobtwo } from "images/blob2.svg";
import { ReactComponent as Blobthree } from "images/blob3.svg";


const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto pt-4 pb-20 md:pb-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;


const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 pb-8`}
  position: relative;
  z-index: 4;
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2 text-center`}
    img {
      ${tw`w-48`}
    }
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }

  .img {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 transform translate-x-32 translate-y-48 `}
  opacity: 20%;
`;

const Blob1 = styled(Blobone)`
  ${tw`pointer-events-none absolute top-0 left-0 w-72 transform -translate-x-32 translate-y-4`}
  opacity: 20%;
`;

const Blob2 = styled(Blobtwo)`
  ${tw`pointer-events-none absolute right-0 top-0 w-72 transform translate-x-48 -translate-y-24`}
  opacity: 50%;
`;

const Blob3 = styled(Blobtwo)`
  ${tw`pointer-events-none absolute left-0 top-0 w-80 transform -translate-x-48 -translate-y-24`}
  opacity: 50%;
`;


export default ({ cards = null, heading = "Our Offices", subheading = "", description = "", second="", secondDescription=""}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) title - the title of the card
   *  2) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      title: "Secure",
      description: "We strictly only deal with vendors that provide top notch security."
    },
    { 
      title: "24/7 Support",
      description: "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."
    },
    { 
      title: "Reliable",
      description: "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."
    },
    { 
      title: "Easy",
      description: "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."
    },
    { 
      title: "Customizable",
      description: "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."
    },
    { 
      title: "Fast",
      description: "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>{heading}</Heading>
        {subheading && <Subheading>{subheading}</Subheading>}
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                {card.image && <img src={card.image} alt="qrcode" />}
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
                {card.second && 
                <>
                <br></br><br></br>
                <span className="title">{card.second || "Fully Secure"}</span> 
                <p className="description">
                  {card.secondDescription || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p></>}
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
      <Blob3 />
    </Container>
  );
};
