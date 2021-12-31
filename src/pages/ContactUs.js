import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import qrcode from "images/QRcode.jpg"
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactDetails
        heading = "Contact Information"
        subheading= "Our operating hours are 9am to 6pm, Monday to Saturday."
        cards={[
          {
            title: "Registration",
            description: (
              <>
                <Address>
                  <AddressLine>youmecanedu@gmail.com</AddressLine>
                </Address>
              </>
            ),
            second: "LinkedIn",
            secondDescription: (
              <>
                <Address>
                  <AddressLine>link</AddressLine>
                </Address>
              </>
            )
          },
          {
            title: "Feedback",
            description: (
              <>
                <Address>
                  <AddressLine>leadwinedu01@gmail.com</AddressLine>
                </Address>
              </>
            ),
            second: "Phone Number",
            secondDescription: (
              <>
                <Address>
                  <AddressLine>(818) 428-1661</AddressLine>
                </Address>
              </>
            )
          },
          {
            title: "WeChat ID",
            image: qrcode,
            description: (
              <>
              </>
            )
          }]}
      />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
