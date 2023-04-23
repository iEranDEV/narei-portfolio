import Image from "next/image";
import messagePic from '@/public/message.png'
import SocialIcons from "../general/SocialIcons";
import { BsEnvelope } from "react-icons/bs";
import FormInput from "../general/FormInput";
import Button from "../general/Button";

export default function ContactSection() {


    return (
        <div className="w-full z-10 relative py-20 h-screen px-5 md:px-10 lg:px-40 flex flex-col justify-center items-center">

            <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-10 md:w-[50rem] md:h-[40rem] mb-10">
                <div className="w-full flex flex-col gap-2 pr-5">
                    {/* Heading */}
                    <div>
                        <span className="text-3xl tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-500 font-mono">CONTACT ME </span>
                    </div>
                    <p className="text-lg text-black/50">
                        Want to ask a question or start working with me? Just fill the form below!
                    </p>

                    {/* Form */}
                    <div className="h-full py-5">
                        <form onSubmit={(e) => e.preventDefault()} className="h-full flex flex-col gap-3">
                            <FormInput text="Your name" />
                            <FormInput text="Email address" />
                            <FormInput text="Message" area />
                            <div className="flex justify-end">
                                <Button text="submit form" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="hidden md:flex w-full flex-col justify-around items-center gap-2">
                    <Image src={messagePic} alt={"Contact illustration"} className="w-2/3 hidden md:block" />

                    <div className="flex flex-col justify-center gap-3 items-center text-red">
                        <span className="mb-1">You can also find me here:</span>
                        <span className="flex gap-2 items-center text-black/50">
                            <BsEnvelope  />
                            ieranofficial@gmail.com
                        </span>
                        <SocialIcons black />
                    </div>
                </div>
            </div>
        </div>
    )
}