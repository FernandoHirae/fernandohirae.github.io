import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { contacts } from "~/const/contacts";
import { motion } from "framer-motion";
import ContactForm from "~/components/ContactForm";

function Contact() {
    return (
        <motion.div className="bg-zinc-900 bg-cover bg-no-repeat bg-center bg-clip-border text-white min-h-screen"
            initial={{ x: 1000, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -1000, opacity: 1 }}
            transition={{
                duration: 0.5,
                bounce: 0
            }}>
            <Header />
            <div className="flex flex-row justify-center leading-loose lg:mt-10">
                <ContactForm />

                <div className="w-full lg:w-1/2 max-w-xl flex-grow m-4 p-6 sm:p-10">
                    <h2 className="font-general-medium text-2xl text-primary-light mb-8 text-center">
                        Contact details
                    </h2>
                    <ul className="font-general-regular ">
                        {contacts.map((contact) => (
                            contact.id === 4 ? (
                                <li className="flex items-start" key={contact.id}>
                                    <i className="text-xl text-gray-500 mr-4">
                                        {contact.icon}
                                    </i>
                                    <a href={contact.link} target="_blank" className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                                        {contact.name}
                                    </a>
                                </li>) : (
                                <li className="flex items-start" key={contact.id}>
                                    <i className="text-xl text-gray-500 mr-4">
                                        {contact.icon}
                                    </i>
                                    <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                                        {contact.name}
                                    </span>
                                </li>
                            )
                        ))}
                    </ul>

                </div>
            </div>
            <Footer />
        </motion.div>
    );
}

export default Contact;