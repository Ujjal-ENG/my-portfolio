import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  const items = [
    {
      icon: <BsFillPatchCheckFill />,
      skill: "JavaScript",
      experience: "Experienced",
    },
    {
      icon: <BsFillPatchCheckFill />,
      skill: "Node Js",
      experience: "Experienced",
    },
    {
      icon: <BsFillPatchCheckFill />,
      skill: "MongoDB",
      experience: "Experienced",
    },
    {
      icon: <BsFillPatchCheckFill />,
      skill: "Express Js",
      experience: "Experienced",
    },
    {
      icon: <BsFillPatchCheckFill />,
      skill: "Python",
      experience: "Experienced",
    },
    {
      icon: <BsFillPatchCheckFill />,
      skill: "JAVA",
      experience: "Experienced",
    },
    {
      icon: <BsFillPatchCheckFill />,
      skill: "Django",
      experience: "Experienced",
    },
    {
      icon: <BsFillPatchCheckFill />,
      skill: "Spring Boot",
      experience: "Experienced",
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="experience">
      <div className="container">
        <h2 className="experience__title">Experience</h2>
        <motion.div
          className="experience__backend"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {items.map((item, index) => (
            <motion.article
              key={index}
              className="experience__card"
              variants={itemVariants}
              animate={controls}
            >
              <div className="experience__card-content">
                <div className="experience__card-icon">{item.icon}</div>
                <div className="experience__card-details">
                  <h4 className="experience__card-title">{item.skill}</h4>
                  <small className="experience__card-experience">
                    {item.experience}
                  </small>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
