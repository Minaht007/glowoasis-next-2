"use client"
import React from "react"
import { useState } from "react"


const BurgerMenu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const tonglMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return

}
export default BurgerMenu