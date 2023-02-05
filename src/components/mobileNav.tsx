import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import classes from '../styles/MobileNav.module.scss'
import {backdropAnimation, navAnimation} from "../animations/animations";
import {FaTimes} from "react-icons/fa";
const MobileNav = ({mobileNav, setMobileNav}: {mobileNav: boolean, setMobileNav: (i: boolean) => void}) => {
    return (
        <AnimatePresence initial={false}>
            {mobileNav &&
                <motion.div className={classes['MobileNav']}
                            initial={'hidden'}
                            animate={'visible'}
                            exit={'hidden'}
                            variants={backdropAnimation}
                >
                    <motion.div className={classes['MobileNav__content']}
                                initial={'hidden'}
                                animate={'visible'}
                                exit={'hidden'}
                                variants={navAnimation}
                    >
                        <div
                            onClick={() => setMobileNav(false)}
                        >
                            <FaTimes/>
                        </div>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
};

export default MobileNav;