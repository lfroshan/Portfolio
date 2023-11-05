import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { socials } from "../constants";

const SocalMedia = () => {
  console.log(socials);
  return (
    <>
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        <motion.div>
          <p className={styles.sectionSubText}>Connect with me on</p>
        </motion.div>
      </div>
      <div className="mt-20 flex flex-wrap justify-center gap-4">
        {socials.map((social, index) => (
          <a href={social.link} target="_blank" rel="noreferrer" key={`social-${index}`}>
            <img
              src={social.icon}
              alt={social.name}
              key={`social-${index}`}
              className="w-16 h-16 object-contain gap-10 hover:scale-105"
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(SocalMedia, "social");
