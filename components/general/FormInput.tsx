import { motion, useAnimate } from "framer-motion";
import { useEffect, useState, useRef } from "react";

type FormInputProps = {
    text: string,
    area?: boolean,
    value: string,
    setValue: Function,
    name: string
}

export default function FormInput({ text, area, value, setValue, name }: FormInputProps) {
    const [focus, setFocus] = useState(false);
    const [scope, animate] = useAnimate();

    const inputElement = useRef(null);

    useEffect(() => {
        if(focus) {
            animate(scope.current, { y: -20, fontSize: '14px', padding: '0px 8px 0px 8px'}, { type: 'tween', duration: 0.1});
        }

        return () => {
            if(value === '') {
                animate(scope.current, {y: 0, fontSize: '16px', padding: '0px 0px 0px 0px'}, { type: 'tween', duration: 0.1})
            }
        }
    }, [focus, value]);

    const props = {
        ref: inputElement,
        defaultValue: value,
        onChange: (e: any) => setValue(e),
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        className: "z-20 w-full bg-white peer border border-l-2 border-b-2 focus:outline-purple-600 border-black/50 p-2 rounded-lg"
    }
    
    return (
        <div className="relative">
            {area ? 
                <textarea name={name} {...props} rows={10} cols={10}></textarea>
            :
                <input name={name} {...props} />
            }
            <motion.span ref={scope} onClick={() => (inputElement.current as any).focus()} initial={{x: 0, y: 0, padding: '0px 0px 0px 0px'}} className="absolute z-10 top-2.5 text-black/50 peer-focus:text-purple-600 bg-white left-2.5">{text}</motion.span>
        </div>
    )
}