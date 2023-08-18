import React from "react";
import classes from "./App.module.css";
import img1 from "./Assets/Gallary/Image1.jpeg";
import img2 from "./Assets/Gallary/Image2.jpeg";
import img3 from "./Assets/Gallary/Image3.jpeg";
import img4 from "./Assets/Gallary/Image4.jpeg";
import img5 from "./Assets/Gallary/Image5.jpeg";
import img6 from "./Assets/Gallary/Image6.jpeg";
import img7 from "./Assets/Gallary/Image7.jpeg";
import img8 from "./Assets/Gallary/Image8.jpeg";
import img9 from "./Assets/Gallary/Image9.jpeg";
import img10 from "./Assets/Gallary/Image10.jpeg";
import img11 from "./Assets/Gallary/Image11.jpeg";
import img12 from "./Assets/Gallary/Image12.jpeg";
import img13 from "./Assets/Gallary/Image13.jpeg";
import img14 from "./Assets/Gallary/Image14.jpeg";
import img15 from "./Assets/Gallary/Image15.jpeg";
import Routing from "./Routing/Routing";

const ABOUT_CONTENT = [
  {
    id: Math.random(),
    src: "https://tezsrifoundation.org/images/about-page.png",
    alt: "This is a picture",
    description: `TEZAS FOUNDATION FOR DISABLED, a TRUST established in the year 2014 and officially got registered under the Indian Trust Act in 1961. TEZAS FOUNDATION FOR DISABLED works for the empowerment of children with disabilities and underserved children in rural areas across India.
    TEZAS FOUNDATION FOR DISABLED serves people in need by providing services including quality education, accommodation, food, vocational training, and jobs for qualified disabled persons with specialized training. As develompment, NGO's a have become main service providers in India, all NGO's is unable to fulfil its traditional role in rural areas across India. To serve rural and underserved areas of the country. Tezas move beyond gap filling intiatives into capacity building activities across India`,
  },
];

const SERVICES_CONTENT = [
  {
    id: Math.random(),
    title: "Education",
    src: "https://cdn.givind.org/static/images/program/w1080/educate-a-visually-impaired-child.jpg",
    alt: "Education",
    description: `Education is a basic necessity for everyone in society. Education has to be implemented through special books called Braille Books and voice-enabled training digital recordings for visually challenged students.
    To provide formal education from school level upto University level particularly for poor individuals with visual impairment and other physical disabilities, either through financial assistance or
    establishing specific institutions. 
    As we are teaching advanced computer training government certification course with the help of special screen reading software’s like (JAWS and NVDA).TEZAS believes that unless members of the society get involved personally in the process of greater change and development, sustainable change will not happen.`,
  },
  {
    id: Math.random(),
    title: "Health",
    src: "https://www.csrmandate.org/wp-content/uploads/2020/03/https___s3-ap-southeast-1.amazonaws.com_as.files_.orbis_.org_ind_images_Orbis-Sadguru-Bugbee-Pinki-03.jpg",
    alt: "This is a picture",
    description: `To help free treatment of eye diseases with the help of donors. Providing medical assistance who are economically poor with the help of donors.`,
  },

  {
    id: Math.random(),
    title: "Other Services",
    src: "https://cdn.givind.org/static/images/program/w1080/sponsor-living-expenses-of-a-visually-challenged-student.jpg",
    alt: "This is a picture",
    description: `To help to different artists generating income source for their family support, as from our foundation Organizing musical orchestra events by challenged PEOPLE performing musical programmes in various
    places paying them remuneration to present their skills, which will help
    them in their future employment Conducting vocational training programs such as candle making, screen printing, file making, cups and
    leaf plates etc. Financial assistance in education who are economically poor,Meritorious, deserved and under privileged students with the help
    of donors.TEZAS Foundation took this as a challenge in helping orphan and economically backward visually challenged students to complete their education by providing them free hostel facilities . Also, providing job placement support for visually impaired people, who are graduates, as they should never lose their hope in finding the appropriate job for themselves.
    `,
  },
];

const GALLARY_CONTENT = [
  {
    id: Math.random(),
    src: img1,
    alt: "Image",
  },
  {
    id: Math.random(),
    src: img2,
    alt: "Image",
  },
  {
    id: Math.random(),
    src: img3,
    alt: "Image",
  },
  {
    id: Math.random(),
    src: img4,
    alt: "Image",
  },
  {
    id: Math.random(),
    src: img5,
    alt: "Image",
  },
  {
    id: Math.random(),
    src: img6,
    alt: "Image",
  },
  {
    id: Math.random(),
    src: img7,
    alt: "Image",
  },
  {
    id: Math.random(),
    src: img8,
    alt: "Image",
  },
  {
    id: Math.random(),
    src: img9,
    alt: "Image",
  },
  {
    id: Math.random(),
    src: img10,
    alt: "Image",
  },
  {
    id: Math.random(),
    src: img11,
    alt: "Image",
  },
  {
    id: Math.random(),
    src: img12,
    alt: "Image",
  },
  {
    id: Math.random(),
    src: img13,
    alt: "Image",
  },
  {
    id: Math.random(),
    src: img14,
    alt: "Image",
  },
  {
    id: Math.random(),
    src: img15,
    alt: "Image",
  },
];

function App() {
  return (
    <div className={classes.app}>
      <Routing
        aboutData={ABOUT_CONTENT}
        servicesContent={SERVICES_CONTENT}
        gallaryData={GALLARY_CONTENT}
      />
    </div>
  );
}

export default App;
