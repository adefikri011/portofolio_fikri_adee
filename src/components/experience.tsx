import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EXPERIENCES, ORGANIZATIONS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

// Experience Card Props
type ExperienceCardProps = {
  experience: (typeof EXPERIENCES)[number];
};

// Organization Card Props
type OrganizationCardProps = {
  experience: (typeof ORGANIZATIONS)[number];
};

// Experience Card
const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    {/* Title */}
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    {/* Experience Points */}
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, i) => (
        <li
          key={`experience-point-${i}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// Organization Card
const OrganizationCard = ({ experience }: OrganizationCardProps) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.name}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.role}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, i) => (
        <li
          key={`org-point-${i}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// Experience Component
export const Experience = () => {
  return (
    <SectionWrapper idName="work">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Pengalaman Saya</p>
          <h2 className={styles.sectionHeadText}>Pendidikan</h2>
        </motion.div>

        {/* Experience Card */}
        <div className="empty-20 flex flex-col">
          <VerticalTimeline>
            {EXPERIENCES.map((experience, i) => (
              <ExperienceCard key={i} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};

// Organization Component
export const Organization = () => {
  return (
    <SectionWrapper idName="organization">
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Kegiatan Saya</p>
          <h2 className={styles.sectionHeadText}>Pengalaman Organisasi</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {ORGANIZATIONS.map((org, i) => (
              <OrganizationCard key={i} experience={org} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};

const ExperienceAndOrganization = { Experience, Organization };
export default ExperienceAndOrganization;
