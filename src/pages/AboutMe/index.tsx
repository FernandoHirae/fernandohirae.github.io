import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

function AboutMe() {
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
            <div className="container flex flex-col max-h-full mx-auto my-auto px-12 pt-12">
                <h1 className="text-center pb-10 text-white text-4xl lg:pb-20 lg:text-6xl">About<span className="text-purple-500 font-semibold"> Me</span></h1>
                <div className="grid grid-cols-1 justify-center pb-10 lg:grid-cols-2">

                    <p className="flex flex-col gap-6 items-center text-xl lg:text-2xl xl:text-3xl h-full pb-4 lg:pb-0">
                        <span className="text-gray-200 font-semibold lg:text-3xl xl:text-4xl"> I&apos;m Fernando Hirae, a
                            <span className="text-purple-500 font-semibold"> FullStack Developer </span>
                            based in Gravataí, RS - Brazil
                        </span>
                        Passionate about creating innovative and functional solutions. I&apos;m always looking for new challenges allowing me to expand my knowledge and create amazing products.
                    </p>

                    <div className="flex justify-center items-center">
                        <Image className="max-h-96 max-w-4xl rounded-md border-2 border-gray-600 lg:max-h-96"
                            src="/imgs/FernandoHirae2.png"
                            width={300}
                            height={600}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <h2 className="text-center pb-10 text-white text-2xl lg:pb-20 lg:text-4xl"><span className="text-purple-500 font-semibold">My</span> Skills</h2>
                <div className="grid grid-cols-4 gap-4 lg:grid-cols-10 pb-14">
                    <div className="flex flex-col items-center"><svg
                        viewBox="0 0 24 24"
                        fill="#10E2FE"
                        height="50"
                        width="50"
                    >
                        <path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 00-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 00-3.107-.534A23.892 23.892 0 0012.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 00-3.113.538 15.02 15.02 0 01-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 01-4.412.005 26.64 26.64 0 01-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 011.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0112 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 00-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 00-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 00-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 001.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 01-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 01-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                    </svg>
                        <p className="">React</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg fill="none"
                            viewBox="0 0 15 15"
                            height="50"
                            width="50">
                            <path
                                fill="currentColor"
                                d="M4.5 4.5l.405-.293A.5.5 0 004 4.5h.5zm3 9.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM5 12V4.5H4V12h1zm-.905-7.207l6.5 9 .81-.586-6.5-9-.81.586zM10 4v6h1V4h-1z"
                            />
                        </svg>
                        <p className="">NextJS</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg
                            viewBox="0 0 512 512"
                            fill="#FAD000"
                            height="50"
                            width="50"
                        >
                            <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z" />
                        </svg>
                        <p className="">Javascript</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg
                            viewBox="0 0 24 24"
                            fill="#008EFA"
                            height="50"
                            width="50"
                        >
                            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                        </svg>
                        <p className="">Typescript</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg
                            viewBox="0 0 24 24"
                            fill="#CC5C00"
                            height="50"
                            width="50"
                        >
                            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                        </svg>
                        <p className="">HTML</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg
                            viewBox="0 0 512 512"
                            fill="#006EFF"
                            height="50"
                            width="50"
                        >
                            <path d="M64 32l35 403.22L255.77 480 413 435.15 448 32zm290.68 334.9L256.07 395l-98.46-28.24-6.75-77.76h48.26l3.43 39.56 53.59 15.16.13.28 53.47-14.85 5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58z" />
                        </svg>
                        <p className="">CSS</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg
                            viewBox="0 0 24 24"
                            fill="#38bdf8"
                            height="50"
                            width="50"
                        >
                            <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
                        </svg>
                        <p className="">Tailwind CSS</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg
                            viewBox="0 0 448 512"
                            fill="#c3002f"
                            height="50"
                            width="50"
                        >
                            <path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z" />
                        </svg>
                        <p className="">Angular</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg
                            viewBox="0 0 512 512"
                            fill="#41b883"
                            height="50"
                            width="50"
                        >
                            <path d="M256 144.03l-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43L256 144.03z" />
                            <path d="M409.4 47.92L256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92H409.4z" />
                        </svg>
                        <p className="">Vue</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg
                            viewBox="0 0 24 24"
                            fill="#ff3e00"
                            height="50"
                            width="50"
                        >
                            <path d="M10.354 21.125a4.44 4.44 0 01-4.765-1.767 4.109 4.109 0 01-.703-3.107 3.898 3.898 0 01.134-.522l.105-.321.287.21a7.21 7.21 0 002.186 1.092l.208.063-.02.208a1.253 1.253 0 00.226.83 1.337 1.337 0 001.435.533 1.231 1.231 0 00.343-.15l5.59-3.562a1.164 1.164 0 00.524-.778 1.242 1.242 0 00-.211-.937 1.338 1.338 0 00-1.435-.533 1.23 1.23 0 00-.343.15l-2.133 1.36a4.078 4.078 0 01-1.135.499 4.44 4.44 0 01-4.765-1.766 4.108 4.108 0 01-.702-3.108 3.855 3.855 0 011.742-2.582l5.589-3.563a4.072 4.072 0 011.135-.499 4.44 4.44 0 014.765 1.767 4.109 4.109 0 01.703 3.107 3.943 3.943 0 01-.134.522l-.105.321-.286-.21a7.204 7.204 0 00-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 00-.226-.831 1.337 1.337 0 00-1.435-.532 1.231 1.231 0 00-.343.15L8.62 9.368a1.162 1.162 0 00-.524.778 1.24 1.24 0 00.211.937 1.338 1.338 0 001.435.533 1.235 1.235 0 00.344-.151l2.132-1.36a4.067 4.067 0 011.135-.498 4.44 4.44 0 014.765 1.766 4.108 4.108 0 01.702 3.108 3.857 3.857 0 01-1.742 2.583l-5.589 3.562a4.072 4.072 0 01-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 00-2.896 4.295 6.753 6.753 0 00.666 4.336 6.43 6.43 0 00-.96 2.396 6.833 6.833 0 001.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 002.896-4.295 6.756 6.756 0 00-.665-4.336 6.429 6.429 0 00.958-2.396 6.831 6.831 0 00-1.167-5.168z" />
                        </svg>
                        <p className="">Svelte</p>
                    </div>

                </div>
            </div>
            <Footer />
        </motion.div>
    );
}

export default AboutMe;