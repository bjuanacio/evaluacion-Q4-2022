import { Input } from "../../atoms/input/input"
import { useState, useEffect } from "react"
import { FC } from "react"
import { UserService } from "../../../services/user.service"
import './navbar.scss'
import { Button } from "../../atoms/button/button"

export interface NavbarProps {
    setSearchValue?: (value: string) => void
    setStateHome: (value:boolean)=>
}

export const Navbar: FC<NavbarProps> = (props: NavbarProps)=>{
    function newGift(){
        props.setStateHome(true)
    }
    return(
        <section className='navbar'>
            <div className='navbar__input'>
                <Input
                type='text'
                placeholder='Gift URL'></Input>
            </div>
            <div className='navbar__button-container'>
                <Button onClick={newGift}>Agregar</Button>
            </div>
        </section>
    )
}