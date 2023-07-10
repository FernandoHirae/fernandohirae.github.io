import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const ProjectsPopup = ({ projeto, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fullscreenMode, setFullscreenMode] = useState(false);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projeto.imgs.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + projeto.imgs.length) % projeto.imgs.length);
    };

    const toggleFullscreenMode = () => {
        setFullscreenMode(!fullscreenMode);
    };

    // const handleKeyDown = (e) => {
    //     if (e.key === 'ArrowLeft') {
    //         previousImage();
    //     } else if (e.key === 'ArrowRight') {
    //         nextImage();
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener('keydown', handleKeyDown);

    //     return () => {
    //         document.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, []);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest('.popup-container')) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onClose]);

    return (
        <div className='absolute top-0 left-0 w-full h-full bg-neutral-950/80 z-10 flex items-center justify-center'>
            <div className="fixed w-5/6 h-5/6 bg-zinc-900 rounded-xl p-5 flex flex-col shadow-md popup-container">

                {!fullscreenMode && (
                    <div className='flex justify-between items-center mb-5'>
                        <h2 className='font-bold text-5xl w-max max-w-fit bg-gradient-to-br from-purple-700 to-white bg-clip-text text-transparent'>{projeto.title}</h2>
                        <button className='bg-transparent cursor-pointer self-start' onClick={onClose}>✖️</button>
                    </div>
                )}

                <div className='h-auto relative overflow-hidden mx-0 my-auto rounded-lg flex justify-center'>
                    <Image className={`h-full object-cover cursor-pointer ${fullscreenMode? "w-full z-50":"w-3/4"} `} height={5000} width={5000} onClick={toggleFullscreenMode} src={projeto.imgs[currentImageIndex]} alt="" />
                    <button type="button" onClick={previousImage} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center ml-24 justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/80 group-focus:ring-4 group-focus:ring-white/20 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" onClick={nextImage} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center mr-24 justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/80 group-focus:ring-4 group-focus:ring-white/20 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>

                {!fullscreenMode && (
                    <>
                        <div className='flex flex-col justify-end flex-grow'>
                            <div className='text-center z-20 w-full mt-8 mb-3 text-3xl'>Description</div>
                            <hr className='w-1/2 bg-purple-600 h-1 my-2 mx-auto border-0' />
                            <p className='w-2/3 relative overflow-hidden my-0 mx-auto pt-4 px-0 pb-8 text-justify'>{projeto.longDescription}</p>
                        </div>
                    </>
                )}

            </div>
        </div>
    );

};

export default ProjectsPopup;