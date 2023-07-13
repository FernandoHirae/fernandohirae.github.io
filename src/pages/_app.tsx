import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import "~/styles/globals.css";
import "tailwind.config"
import { AnimatePresence } from 'framer-motion';


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </SessionProvider>
  );
};

export default MyApp;
