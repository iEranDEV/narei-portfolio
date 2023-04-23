import { motion } from "framer-motion"
import { BsArrowRightShort } from 'react-icons/bs'

type ButtonProps = {
    text: string
}

const buttonBorderVariants = {
    hover: {
        width: '100%'
    }
}

export default function Button({ text }: ButtonProps) {

    return (
        <motion.div whileHover={'hover'} className="cursor-pointer">
            <div className="w-full flex gap-4 justify-between items-center uppercase font-semibold px-5 py-1">
                <BsArrowRightShort className="h-5 w-5"/>
                <span>{text}</span>
            </div>

            <motion.div initial={{width: '50%'}} variants={buttonBorderVariants} className="h-0.5 bg-black"></motion.div>
        </motion.div>
    )
}