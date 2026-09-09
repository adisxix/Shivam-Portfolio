import SectionHeading from './SectionHeading';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import useReveal from '../hooks/useReveal';

const Contact = () => {
  const ref = useReveal();

  return (
    <section id="contact" className="relative pt-12 pb-4 sm:pt-20 sm:pb-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Get In Touch" id="contact-heading" />

        <div ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
