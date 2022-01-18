import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import morgan from "images/morgan.jpg"
import cici from "images/cici.jpg"
import molly from "images/molly.jpg"

const teachers = [[
    {
      imageSrc: morgan,
      quote:
        "My name is Morgan, an AVID trained English teacher. I graduated with an undergraduate degree from UCR in English literature in 2018. I then received my Masters in education and two teaching credentials (General and Special Education) from USC in 2021.",
      customerName: "Morgan"
    },
    {
      imageSrc:cici,
      quote:
        " 西北大学本科新闻专业。普通话等级一级乙等。英文水平：ESL5 。中国幼儿园教师任职3年。美国中文老师任职2年。具有丰富的教学经验，活泼生动的授课风格。非常擅长与学生们沟通，让孩子们在互动有趣的学习氛围中轻松学会中文的听说读写！",
      customerName: "Cici"
    },
    {
      imageSrc: molly,
      quote:
        "I am Molly Gibbs, a TEFL certified teacher with a degree in Spanish and a minor in Linguistics. I have been teaching for over 5 years and have lived long term in 4 Spanish speaking countries. Learning Spanish with me is fun and interactive!",
      customerName: "Molly"
    }
  ],[
    {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Charlotte Hale"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      quote:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate",
      customerName: "Adam Cuppy"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Steven Marcetti"
    }
  ]
]

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Testimonial
        heading="Our Wonderful Teachers"
        testimonials = {teachers}
        description="Our team of educators originate from across the United States with profound education background, certified capabilities and years of experience. We offer the most professional skills, the most creative learning environment and a variety of class materials for your child to prosper on this long road of knowledge seeking!"
      />
      <Footer/>
    </AnimationRevealPage>
  );
};
