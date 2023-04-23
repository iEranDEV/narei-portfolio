import { BsDownload, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Button from "../Button";
import { motion } from "framer-motion";

export default function AboutSection() {

    return (
        <div className="w-full relative z-20 min-h-screen text-white bg-gradient-to-t from-purple-400 to-purple-500 px-5 md:px-10 lg:px-40 py-10 flex flex-col justify-center gap-10">
            <h1 className="text-5xl font-mono tracking-wide">ABOUT ME</h1>
            
            <p className="text-lg">
                Hi! My name is Olaf and I'm 18-year-old developer from Poland, who has been in contact with programming in various forms since childhood. 
                Currently, I'm focused on Frontend, and I'm excited to continue developing my skills in this area. 
                I worked for few months as a developer in a company creating ERP systems. In my free time, I enjoy working on my personal coding projects and exploring new technologies.
                I'm constantly challenging myself to learn new things and improve my knowledge. 
                I'm always eager to take on new challenges.
                <br /><br />
                Thanks for stopping by my portfolio website, and I hope you enjoy checking out some of my work!
            </p>

            <div className="flex items-center gap-5">
                <motion.a whileHover={{y: -5}} href="">
                    <BsGithub className="h-6 w-6" />
                </motion.a>
                <motion.a whileHover={{y: -5}} href="">
                    <BsLinkedin className="h-6 w-6" />
                </motion.a>
                <motion.a whileHover={{y: -5}} href="">
                    <BsTwitter className="h-6 w-6" />
                </motion.a>
            </div>

            <div className="flex justify-between flex-col md:flex-row gap-5">
                <Button text={'check my work'} white />
                <Button icon={<BsDownload className="h-4 w-4" />} text={'download cv'} white />
            </div>
        </div>
    )
}