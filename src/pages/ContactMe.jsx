import styles from "./ContactMe.module.css";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <motion.div 
      className={styles.contact}
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.5 }}
    >
      <h1>Контакты</h1>
      <p>Свяжитесь со мной через почту или социальные сети.</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>

    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>
    <p>asfasf</p>

    </motion.div>
  );
};

export default ContactMe;