import { motion } from "framer-motion";
import { BsEnvelope, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function SocialIcons({ black } : { black?: boolean }) {

    return (
        <div className="flex items-center gap-5">
            <motion.a whileHover={{y: -5}} href="" className={black ? 'text-black' : 'text-white'}>
                <BsGithub className="h-6 w-6" />
            </motion.a>
            <motion.a whileHover={{y: -5}} href="" className={black ? 'text-black' : 'text-white'}>
                <BsLinkedin className="h-6 w-6" />
            </motion.a>
            <motion.a whileHover={{y: -5}} href="" className={black ? 'text-black' : 'text-white'} >
                <BsInstagram className="h-6 w-6" />
            </motion.a>
            <motion.a whileHover={{y: -5}} href="" className={black ? 'text-black' : 'text-white'} >
                <BsEnvelope className="h-6 w-6" />
            </motion.a>
        </div>
    )
}