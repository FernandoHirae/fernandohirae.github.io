import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [successful, setSuccessful] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(false);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSending(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name, email, subject, message
                }),
                headers: {
                    'content-type': 'application/json',
                },
            })
            console.log('STATUS', res.status)
            if (res.status === 200) {
                setSending(false);
                setSuccessful(true);
            }
        } catch (err: any) {
            console.error('Err', err);
            setSending(false);
            setError(true);
        }
    }
    return (
        sending ? (<motion.h1
            initial={{ y: 1000, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -1000, opacity: 1 }}
            transition={{
                duration: 0.5
            }} className="max-w-xl flex flex-grow m-4 p-6 sm:p-10 rounded-xl shadow-xl items-center justify-center bg-[#171717]">Sending message...</motion.h1>) : (
            successful ?
                ((<motion.div
                    initial={{ y: 1000, opacity: 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -1000, opacity: 1 }}
                    transition={{
                        duration: 0.5
                    }}
                    className="max-w-xl flex flex-col m-4 p-6 sm:p-10 rounded-xl shadow-xl items-center justify-center bg-[#171717]">
                    <h1>Thank you for getting in touch. I will reply soon.</h1>
                    <h1>You can also contact me in my phone number for a faster reply.</h1>
                </motion.div>))
                : (error ?
                    ((<motion.div
                        initial={{ y: 1000, opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -1000, opacity: 1 }}
                        transition={{
                            duration: 0.5
                        }} className="max-w-xl flex flex-col m-4 p-6 sm:p-10 rounded-xl shadow-xl items-center justify-center bg-[#171717]">
                        <h1>Sorry, something went wrong with my e-mail.</h1>
                        <h1>You can try to contact me in my phone number.</h1>
                    </motion.div>))
                    : (
                        <form className="max-w-xl flex flex-col gap-4 flex-grow m-4 p-6 sm:p-10 rounded-xl shadow-xl text-left bg-[#171717]"
                            onSubmit={onSubmit}
                        >
                            <p className="font-general-medium text-center text-primary-light text-2xl mb-8">
                                Contact Form
                            </p>
                            <input className="text-black rounded-md pl-2"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Name"
                                required
                            />
                            <input className="text-black rounded-md pl-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                placeholder="Email"
                                required
                            />
                            <input className="text-black rounded-md pl-2"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                type="text"
                                placeholder="Subject"
                                required
                            />

                            <div className="mt-3">
                                <label
                                    className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="text-black p-2 w-full border border-gray-300  border-opacity-50 text-primary-dark bg-ternary-light rounded-md text-md"
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    aria-label="Message"
                                    required
                                ></textarea>
                            </div>

                            <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    )))
    )
}
export default ContactForm;