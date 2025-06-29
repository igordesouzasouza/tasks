'use client'
import { useEffect, useRef } from "react"

export default function Cursor(){
    const cursorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cursor =cursorRef.current
        if(!cursor) return

        const move = (e:MouseEvent) =>{
            cursor.style.left =`${e.clientX}px`
            cursor.style.top = `${e.clientY}px`
        }

        const enter = () =>{
            cursor.classList.add("bg-teal-400", "scale-150")
        }
        const leave = ()=>{
            cursor.classList.add("bg-teal-400","scale-150")
        }
        document.addEventListener("mousemove", move)
        // document.addEventListener("mouseenter", enter) teste com cursor no men
        // document.addEventListener("mouseleave", leave) teste do cursor no men
        const hoverables = document.querySelectorAll("a, button, .hover-target")
        hoverables.forEach((el)=>{
            el.addEventListener("mouseenter", enter)
            el.addEventListener("mouseleave", leave)
        })

        return () => {
            document.removeEventListener("mousemove", move)
            hoverables.forEach(el => {
              el.removeEventListener("mouseenter", enter)
              el.removeEventListener("mouseleave", leave)
            })
          }
        }, [])

        return(
            <div
            ref={cursorRef}
            className="pointer-events-none fixed top-0 left-0 w-4 h-4 rounded-full bg-white transition-all duration-200 mix-blend-difference z-[9999]"
          /> //validação do cursor com o mouse
        )
}