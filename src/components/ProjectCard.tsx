import Image from "next/image";
import { motion } from "framer-motion";
import {  useState } from "react";
import ProjectsPopup from "./ProjectPopUp";

type Props = {
    reverse: boolean;
    title: string;
    description: string;
    img: string;
    imgs: string[];
    longDescription: string;
} | null;


function ProjectCard(props: Props) {

    const [selectedProject, setSelectedProject] = useState <Props> ();

    const openPopup = (project : Props) => {
        setSelectedProject(project);
    };

    const closePopup = () => {
        setSelectedProject(null);
    };

    return (
        <div className="">
            <motion.a onClick={() => { openPopup(props) }} className={`flex flex-col items-center rounded-lg shadow max-h-64  ${props?.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                initial={{ backgroundColor: "#080808" }}
                whileHover={{ backgroundColor: "#581c87", scale: 1.1 }}
                transition={{ duration: 0.5 }}>
                <Image height="500" width="500" className={`object-cover rounded-t-lg min-w-[50%] max-w-[50%] md:rounded-none max-h-64 ${props?.reverse ? 'md:rounded-r-lg' : 'md:rounded-l-lg'}`} src={props?.img} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal bg-transparent">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-400">{props?.title}</h5>
                    <p className="mb-3 font-normal text-gray-200">{props?.description}</p>
                </div>
            </motion.a>
            
        {selectedProject && <ProjectsPopup projeto={selectedProject} onClose={closePopup} />}
        </div>
    );
}

export default ProjectCard;