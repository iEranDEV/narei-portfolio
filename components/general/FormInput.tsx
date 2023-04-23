import { motion, useAnimate } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function FormInput({ text, area }: {text: string, area?: boolean}) {
    const [focus, setFocus] = useState(false);
    const [data, setData] = useState(''); 
    const [scope, animate] = useAnimate();

    const inputElement = useRef(null);

    useEffect(() => {
        if(focus) {
            animate(scope.current, { y: -20, fontSize: '14px', padding: '0px 8px 0px 8px'}, { type: 'tween', duration: 0.1});
        }

        return () => {
            if(data === '') {
                animate(scope.current, {y: 0, fontSize: '16px', padding: '0px 0px 0px 0px'}, { type: 'tween', duration: 0.1})
            }
        }
    }, [focus, data]);
    
    return (
        <div className="relative">
            {area ? 
                <textarea ref={inputElement} rows={10} cols={10} value={data} onChange={(e) => setData(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className="z-20 w-full peer border border-l-2 border-b-2 focus:outline-purple-600 border-black/50 p-2 rounded-lg"></textarea>
            :
                <input ref={inputElement} type="text" value={data} onChange={(e) => setData(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className="z-20 w-full peer border border-l-2 border-b-2 focus:outline-purple-600 border-black/50 p-2 rounded-lg" />
            }
            <motion.span ref={scope} onClick={() => (inputElement.current as any).focus()} initial={{x: 0, y: 0, padding: '0px 0px 0px 0px'}} className="absolute z-10 top-2.5 text-black/50 peer-focus:text-purple-600 bg-white left-2.5">{text}</motion.span>
        </div>
    )
}