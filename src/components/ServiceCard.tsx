import { useState } from "react";
import "./ServiceCards.css";
import { AnimatePresence, motion } from "motion/react";

const ServiceCard = ({
  title,
  description,
  icon,
  services,
}: {
  title: string;
  description: string;
  icon: string;
  services: { title: string; description: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="service-card">
      <div className="icon">
        <img src={icon} alt="Service Icon" />
      </div>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -20,
              transition: { duration: 0.15, ease: "easeInOut" },
            }}
            className="more-info"
          >
            {services.map((service) => (
              <ul>
                <li key={service.title}>
                  <b>{service.title}</b>: {service.description}
                </li>
              </ul>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="service-card-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "CERRAR" : "CONOCE MÁS"}
      </button>
    </article>
  );
};

export default ServiceCard;
