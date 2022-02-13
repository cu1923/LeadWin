import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import icon1 from "images/about1.png"
import icon2 from "images/about2.png"
import icon3 from "images/about3.png"
import Features from "components/features/ThreeColSimple.js";
import one from "images/aboutpic1.png"
import two from "images/aboutpic2.jpg"


const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About YoumeCan</Subheading>}
        heading="The most devoted education platform"
        description="YoumeCan is an online education platform located in South California aiming to provide personalized and comprehensive learning system as well as counseling for k-12th students. Our teachers are talented and professional educators selected from different states across the U.S. with thorough backgrounds in education and affluent experience. "
        imageSrc= {one}
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="Let every child's dream come true"
        description="Our mission statement: let the interests guide and the funs lead. We aim to fully unravel a child’s potential and let them develop effective self-learning and analyzing abilities. In addition, we endeavor to cultivate children’s interest and help them achieve self-management, after which they will be able to set goals in life and plan their very future for themselves with confidence."
        imageSrc= {two}
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Expertise</Subheading>}
        heading="Emphasis on individual development"
        cards={[
          {
            imageSrc: icon1,
            title: "Personalized Learning",
            description: "Facilitated learning by evaluating and customizing a suitable learning plan that fulfills the needs of every student."
          },
          { 
            imageSrc: icon3,
            title: "Quality Small Classes",
            description: "A class of less than 6 students preserves an attentive and orderly learning environment in which students are more willing to participate."
          },
          {
            imageSrc: icon2,
            title: "Skilled Educators",
            description: "Employs a rigorous selection process to ensure that the most qualified and competent teachers are serving every parent and student."
          },
        ]}
        linkText=""
      />
      <br></br> <br></br> <br></br>  <br></br> 
      <Footer />
    </AnimationRevealPage>
  );
};
