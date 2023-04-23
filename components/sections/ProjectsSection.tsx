export default function ProjectsSection() {


    return (
        <div className="w-full z-10 relative py-20 pt-60 h-screen px-5 md:px-10 lg:px-40">

            {/* Wave */}
            <svg id="svg" viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg" className="z-20 absolute top-0 xl:-top-32 left-0 transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 91.07142857142858,234.07142857142858 182.14285714285717,268.14285714285717 295,265 C 407.85714285714283,261.85714285714283 542.5,221.5 667,218 C 791.5,214.5 905.8571428571429,247.85714285714286 1033,251 C 1160.142857142857,254.14285714285714 1300.0714285714284,227.07142857142856 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#c084fc" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>

            {/* Content */}
            <span className="text-3xl md:text-5xl tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-500 font-mono">MY PROJECTS </span>
        </div>
    )
}