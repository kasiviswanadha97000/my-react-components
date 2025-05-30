import { useState, useRef, useEffect } from "react";

function PlayGround() {
    const [date, setDate] = useState(new Date());
    const positionRef = useRef(null);
    const mouseRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handelMove = (e) => {
        setTimeout(() => {
            if (mouseRef.current) {
                mouseRef.current.style.left = `${e.clientX - 15}px`;
                mouseRef.current.style.top = `${e.clientY - 15}px`;
            }
        }, 300);
        console.log("Mouse Move", e.clientX, e.clientY);
    };

    const getDate = (val) => {       
        const todayDate = val.toLocaleDateString({
            day: "numeric",
            month: "2-digit",
            year: "numeric",
        });

        const timestamp = val.toLocaleTimeString({
            hour: "2-digit",
            minute: "2-digit",
            second: "numeric",
            hour12: true,
        });        
        return `${todayDate}, ${timestamp}`;
    };

    return (
        <div onMouseMove={handelMove} ref={positionRef} style={{ width: "100vw", height: "100vh", backgroundColor: "green", position: "relative" }}>
            <div ref={mouseRef} style={{ position: "absolute", top: `0px`, left: `0px` }}>Date and Time: {getDate(date)}</div>
        </div>
    );
}

export default PlayGround;
