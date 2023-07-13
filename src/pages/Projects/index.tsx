import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../const/projects"
import { motion } from "framer-motion";

function Projects() {
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
            <div className="container flex flex-col max-h-full mx-auto my-auto pt-12">
                <h1 className="text-center pb-10 text-white text-4xl lg:pb-20 lg:text-6xl"><span className="text-purple-500 font-semibold"> My</span> Projects</h1>
                <div className="grid grid-cols-7 gap-y-10 pb-10">
                    {projects.map((p) =>
                        <div key={p.id} className={`col-span-4  ${p.reverse ? 'col-end-7' : 'col-end-6'}`}>
                            <ProjectCard title={p.title} description={p.description} img={p.image} longDescription={p.longDescription} imgs={p.images} reverse={p.reverse} />
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </motion.div>
    );
}

export default Projects;