import Header from "../components/Header";
import { motion } from "framer-motion";

function Home() {
    return (
        <motion.div className="bg-[url('/imgs/grayleaf-alancabello.jpg')] bg-cover bg-no-repeat bg-center bg-clip-border text-white min-h-screen"
            initial={{ x: 1000, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -1000, opacity: 1 }}
            transition={{
                duration: 0.5,
                bounce: 0
            }}>
            <Header />
            <div className="container h-full mx-auto my-auto px-12 pt-[15rem] pb-[19rem] sm:pt-[17.1rem] xl:pb-[22.95rem]">
                <h1 className="text-lg mb-2 lg:text-4xl lg:mb-4">Hi, I&apos;m Fernando Hirae</h1>
                <h2 className="text-lg lg:text-6xl">I&apos;m a <span className="text-purple-500 font-semibold">Full-stack Developer</span></h2>
                {/* <a download="" href="/" className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-white dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg focus:ring-1 focus:ring-indigo-900 hover:bg-purple-500 text-white hover:text-white duration-500" aria-label="Download Resume"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg><span class="text-sm sm:text-lg font-general-medium duration-100">Download CV</span></a> */}
            </div>
        </motion.div>
    );
}

export default Home;