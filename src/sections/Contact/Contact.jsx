import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  // Состояние для хранения значений полей
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Обработчик ввода
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращает перезагрузку страницы

    // Проверка, что все обязательные поля заполнены
    if (!formData.name || !formData.email || !formData.message) {
      alert("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    console.log("Отправка данных:", formData);
    
    // ТУТ можно добавить отправку данных на сервер
  };

  return (
    <section className={styles.contact}>
      <div className={styles.left}>
        <h2 className={styles.title}>СВЯЗАТЬСЯ</h2>
        <p className={styles.text}>
          Передайте привет{" "}
          <a href="mailto:gleb17102000@gmail.com" className={styles.email}>
            gleb17102000@gmail.com
          </a>
        </p>
        <p className={styles.text}>
          Дополнительная информация,{" "}
          <a href="/public/resume.pdf" className={styles.resume} download>
            мое резюме
          </a>
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} aria-labelledby="contact-form">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Gleb Pavlov" required value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Your email" required value={formData.email} onChange={handleChange} />

        <label htmlFor="subject">Subject</label>
        <input id="subject" type="text" placeholder="Subject" value={formData.subject} onChange={handleChange} />

        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Your message" required value={formData.message} onChange={handleChange}></textarea>

        <button type="submit">ОТПРАВИТЬ</button>
      </form>
    </section>
  );
};

export default Contact;