import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { degrees } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ degree }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={degree.date}
      iconStyle={{ background: degree.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={degree.icon}
            alt={degree.college_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24] font-bold">{degree.title}</h3>
        <p className="text-secondary text-[16px] font-semibold">
          {degree.college_name}, {degree.location}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Educational BackGround</p>
        <h2 className={styles.sectionHeadText}>Colleges/Universities.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {degrees.sort((prev, next) => next.sequence - prev.sequence).map((degree, index) => (
            <ExperienceCard degree={degree} key={`degree-${index}`}></ExperienceCard>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
