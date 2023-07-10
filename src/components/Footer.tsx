
function Footer() {

    return (
        <div className="bottom-0 w-full h-16">
            <div className="font-general-regular flex justify-center items-center text-center">
                <div className="text-lg text-ternary-dark dark:text-ternary-light">
                    &copy; {new Date().getFullYear()}
                    <a
                        href="https://github.com/FernandoHirae"
                        target="__blank"
                        className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
                    >
                        Fernando Hirae
                    </a>
                </div>
            </div>
        </div>
  );
}

export default Footer;