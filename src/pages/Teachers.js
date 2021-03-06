import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import morgan from "images/morgan.jpg"
import cici from "images/cici.jpg"
import molly from "images/molly.jpg"
import brenda from "images/brenda.jpg"
import marsh from "images/marsh.jpg"
import heather from "images/heather.jpg"
import frances from "images/frances.jpg"
import gen from "images/gen.jpg"
import uriyah from "images/uriyah.jpg"
import yujun from "images/yujun.jpg"
import nina from "images/nina.jpg"
import johanna from "images/johanna.png"
import wilder from "images/wilder.png"
import kimberly from "images/kimberly.png"
import adriana from "images/adriana.png"
import natalie from "images/natalie.png"
import rebecca from "images/rebecca.png"
import samantha from "images/samantha.png"
import nelly from "images/nelly.png"

const teachers = [[
    {
      imageSrc: morgan,
      quote:
        "I am an AVID trained English teacher with an undergraduate degree from UCR in English literature in 2018 and received my Masters in education with General and Special Education Teaching Credentials from USC in 2021.",
      customerName: "Morgan",
      embed:"jGN65MCEHlE"
    },
    
    {
      imageSrc: molly,
      quote:
        "I am a TEFL certified teacher with a degree in Spanish and a minor in Linguistics. I have been teaching for over 5 years and have lived long term in 4 Spanish speaking countries. Learning Spanish with me is fun and interactive!",
      customerName: "Molly",
      embed:"LzaSVRNI4GQ",
      bi :true
    },
    {
      imageSrc: brenda,
      quote:
        "I have been an elementary bilingual teacher and an AVID certified trainer with an Masters degree for 13 years. I won Teacher of the Year twice for closing gaps in reading, math, science and coached elementary robotics as well. ",
      customerName: "Brenda",
      embed:"vRJg1ovWzZQ",
      bi: true
    },
  ],[
    {
      imageSrc:marsh,
      quote:
        "I am Brittany Marsh, a TESOL certified teacher. I graduated from UW Eu Claire with a Bachelors of Sociology and a minor in Spanish. I am experienced with teaching English reading & creative writing for 2nd, 4th, 7th graders and now teach high school English!",
      customerName: "Brittany",
      embed:"gUO5myi13G",
      bi: true
    },
    {
      imageSrc: gen,
      quote:
        "I???m Genevieve. I???ve obtained my B.S from CSULA and Associates of Liberal Arts. I have been teaching English, Science and Spanish with children of all ages for around 4 years now. I have a passion for working with children and watching them grow and learn!",
      customerName: "Gen",
      embed:"BthDQ5dnTeE",
      bi: true
    }, 
    {
      imageSrc: adriana,
      quote:
        "I am currently an English and social studies 6th grade teacher with teaching experience for K-8th. I graduated from Eastern University with a Middle Level Education degree in Mathematics and English. I also use my TEFL certification to tutor.",
      customerName: "Adriana",
    }
  ], [
    {
      imageSrc: heather,
      quote:
        "I???m Heather, dedicated and student-focused educator with six years of teaching experience. Area of specialty includes language arts and literacy. In addition to a Bachelor of Science in Elementary Education, I also hold a (TEFL) certification. ",
      customerName: "Heather",
      embed:"hEqUqxER8HQ"
    },
    {
      imageSrc:uriyah,
      quote:
        "My name is Uriyah. I have studied at Stanford University through their Intensive Study Program in Electrical Engineering and have 3 years of teaching computer science to students of all ages with content including Python, Scratch, Web Design, and Robotics with C++.",
      customerName: "Uriyah",
      embed:"J-pq3Onb9r8"
    },
    {
      imageSrc:johanna,
      quote:
        "I'm Johanna, I currently hold a valid TEFL certificate and have a Bachelor's Degree in Arts, with 13 years of experience teaching students in English grammar, phonics, reading, and writing. I help create a fun environment tailored to the students' specific needs!",
      customerName: "Johanna",
      embed:"F_4W7nAphbk"
    }
  ],[
    {
      imageSrc:yujun,
      quote:
        "I???m Yujun. Gained my master???s degree in Mathematics Education at Ohio State University with 4 years of teaching experience with both Chinese and American students and coached for the Math Olympiad competition in China. ",
      customerName: "Yujun"
    },
    {
      imageSrc:cici,
      quote:
        "??????????????????????????????????????????????????????????????????????????????ESL5 ??????????????????????????????3??????????????????????????????2????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
      customerName: "Cici",
      embed:"H1Lo9JzC_SU"
    },
    {
      imageSrc:nina,
      quote:
        "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????20????????????????????????????????????????????????????????????????????????????????????, ????????????????????????????????????????????????????????????",
      customerName: "Nina"
    }
  ],[
    {
      imageSrc:wilder,
      quote:
        "I am Wilder, a native Spanish speaker with a Bachelor & Masters degree in Music and Literature. I bring forth a unique teaching style that incorporates music into Spanish lessons to facilitate student learning.",
      customerName: "Wilder",
      embed:"7OVZDnVhboY"
    },
    {
      imageSrc:kimberly,
      quote:
        "I am an art teacher with my BA in Secondary Art Education from BYU-I. I've been an online art teacher for over three years now and enjoy inspiring and motivating my students to explore diverse art techniques and styles! ",
      customerName: "Kimberly",
      embed:"88r1uRB_x8Q"
    },
    {
      imageSrc: frances,
      quote:
        "I???m a TEFL certified teacher with a Bachelor of Arts in International Studies and over 5 years of experience teaching. I am proficient in teaching speaking and reading fluency and comprehension, vocabulary, and many other skills. ",
      customerName: "Frances",
      embed:"2pUcEx8EOdA",
      bi: true
    }
  ],
  [{
      imageSrc: natalie,
      quote:
        "Hola! Spanish is my first language and I absolutely love teaching. I have been working as a teacher for more than 5 years now. I currently have a teacher associates permit and my major is in Child Development. I make my classroom interactive to encourage participation!",
      customerName: "Natalie",
      bi: true
    },
    {
      imageSrc: rebecca,
      quote:
        "I am a certified teacher with a Bachelor of Science degree in Elementary Education from Grand Canyon University. I have started working in the childcare industry and education since 2015 and have accumulated online teaching experience for two years now!",
      customerName: "Rebecca",
      embed:"KaHqlMclBJM",
    },
    {
      imageSrc: samantha,
      quote:
        "My name is Samantha. I hold a B.A degree in Elementary Education and on-going Master.  I have been a teacher for 3 years with both valid Teaching certificate and TESOL Certification. I am very excited to be part of your children???s learning journey!",
      customerName: "Samantha",
      embed:"veOXrqlN0K0",
    }
  ],
  [{
    imageSrc: nelly,
    quote:
      "Hola! I am a native Spanish speaker. I have taught elementary grades for three years in Oklahoma. My education and prior teaching experiences have allowed me to teach and connect with my students in very critical ways. I love teaching and seeing the students make connections and enjoy what they learn!",
    customerName: "Nelly",
    bi: true
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
