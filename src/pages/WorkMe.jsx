import styles from "./WorkMe.module.css";
import { motion } from "framer-motion";

const WorkMe = () => {
  return (
    <motion.div 
      className={styles.work}
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.5 }}
    >
      <h1>Мои работы</h1>
      <p>Здесь будут подробности о моих проектах.</p>
    </motion.div>
  );
};

export default WorkMe;