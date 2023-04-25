import projects_game_center from '@/public/projects/gameCenter.png';
import drawing_app from '@/public/projects/drawingApp.png'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsGithub, BsLink45Deg } from 'react-icons/bs';
import Button from '../general/Button';

export default function ProjectsSection() {


    return (
        <div className="w-full z-10 bg-white relative py-20 pt-60 min-h-screen px-5 md:px-10 lg:px-20 2xl:px-40">

            {/* Wave */}
            <svg width={'100%'} id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="z-20 absolute -top-1 xl:-top-32 left-0 transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 91.07142857142858,234.07142857142858 182.14285714285717,268.14285714285717 295,265 C 407.85714285714283,261.85714285714283 542.5,221.5 667,218 C 791.5,214.5 905.8571428571429,247.85714285714286 1033,251 C 1160.142857142857,254.14285714285714 1300.0714285714284,227.07142857142856 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#c084fc" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>

            {/* Content */}
            <span className="text-3xl md:text-5xl tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-500 font-mono">
                MY PROJECTS 
            </span>
            <p className='text-black/50 md:w-1/2'>Below you can see my best projects and their working live versions. If you want to see the full list of apps I've created, check out my github profile.</p>

            <div className="w-full h-full flex flex-col gap-32 mt-10 mb-32">
                {/* Game center app */}
                <div className="w-full flex items-center lg:justify-between flex-col lg:flex-row relative gap-5">
                    <Image src={projects_game_center} alt="Game center" priority={true} className='lg:w-[30rem] xl:w-[40rem] rounded-xl border-2' />
                    <div className='flex flex-col justify-center h-full w-full gap-2'>
                        <h1 className="text-3xl md:text-5xl text-black font-mono tracking-wide">GAMES APP</h1>
                        <p>
                            Simple application with various logic games.
                            This site is a place where everyone will find something for themselves and spend a nice time playing games.
                            Currently available are <b>Wordle</b> and <b>Visual Memory</b>, but I plan to add more in near future and continuously develop existing ones.
                            App is written in <b>React.js</b> with <b>Next.js</b> framework. 
                            Visual part was created in TailwindCSS and Framer Motion.
                        </p>
                        
                        <div className='flex justify-between items-center mt-5'>
                            <Button text={'go to website'} icon={<BsLink45Deg className='h-5 w-5'></BsLink45Deg>} />
                            <Button text={'go to code'} icon={<BsGithub className='h-5 w-5'></BsGithub>} />
                        </div>
                    </div>
                </div>

                {/* Drawing app */}
                <div className="w-full flex items-center flex-col lg:flex-row relative gap-5">
                    <div className='flex flex-col justify-center h-full order-2 lg:order-1 w-full gap-2'>
                        <h1 className="text-3xl md:text-5xl text-black font-mono tracking-wide">DRAWING APP</h1>
                        <p>
                            Simple application with various logic games.
                            This site is a place where everyone will find something for themselves and spend a nice time playing games.
                            Currently available are <b>Wordle</b> and <b>Visual Memory</b>, but I plan to add more in near future and continuously develop existing ones.
                            App is written in <b>React.js</b> with <b>Next.js</b> framework. 
                            Visual part was created in TailwindCSS and Framer Motion.
                        </p>
                        
                        <div className='flex justify-between items-center mt-5'>
                            <Button text={'go to website'} icon={<BsLink45Deg className='h-5 w-5'></BsLink45Deg>} />
                            <Button text={'go to code'} icon={<BsGithub className='h-5 w-5'></BsGithub>} />
                        </div>
                    </div>
                    <Image src={drawing_app} alt="Game center" priority={true} className='lg:w-[30rem] xl:w-[40rem] rounded-xl border-2 order-1' />
                </div>
            </div>
        </div>
    )
}