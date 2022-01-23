import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import morgan from "images/morgan.jpg"
import cici from "images/cici.jpg"
import molly from "images/molly.jpg"
import brenda from "images/brenda.jpg"

const teachers = [[
    {
      imageSrc: morgan,
      quote:
        "I am an AVID trained English teacher with an undergraduate degree from UCR in English literature in 2018 and received my Masters in education with General and Special Education Teaching Credentials from USC in 2021.",
      customerName: "Morgan"
    },
    
    {
      imageSrc: molly,
      quote:
        "I am a TEFL certified teacher with a degree in Spanish and a minor in Linguistics. I have been teaching for over 5 years and have lived long term in 4 Spanish speaking countries. Learning Spanish with me is fun and interactive!",
      customerName: "Molly",
      bi :true
    },
    {
      imageSrc: brenda,
      quote:
        "I have been an elementary bilingual teacher for 13 years and an AVID certified teacher trainer. I won Teacher of the Year twice for closing gaps in reading, math, and science. I am a winning elementary robotics coach as well. ",
      customerName: "Brenda",
      bi: true
    },
  ],[
    {
      imageSrc:cici,
      quote:
        " 西北大学本科新闻专业。普通话等级一级乙等。英文水平：ESL5 。中国幼儿园教师任职3年。美国中文老师任职2年。具有丰富的教学经验，活泼生动的授课风格。非常擅长与学生们沟通，让孩子们在互动有趣的学习氛围中轻松学会中文的听说读写！",
      customerName: "Cici"
    },
    
    
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
