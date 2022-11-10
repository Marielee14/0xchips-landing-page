import {useRef, useEffect} from "react"

export default function useObserver() {
    const withObserverRef = useRef(null);
    const callbackFnref = useRef();

    useEffect(() => {
        const options = {threshold: 0.7}

        const callback = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                callbackFnref.current();
            }
        };
        const observer =new IntersectionObserver(callback, options);
        const targetElement = withObserverRef.current;

        observer.observe(targetElement);
        return () =>{
            observer.unobserve(targetElement)
        }
    }, []);
    return withObserverRef
}