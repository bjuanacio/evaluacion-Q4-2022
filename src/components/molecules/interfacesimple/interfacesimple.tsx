import React from 'react';
import Label from "../../atoms/label/label";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";

const InterfaceSimple = () => {
    return (
        <div>
            <Input
                value="test"
                name="addGifs"
                onChange={()=>console.log("tipeando..")}
                placeHolder="Gift URL"/>

            <Button onClick={()=>console.log("presionado")} children="Agregar" size="small"/>
        </div>
    );
};

export default InterfaceSimple;
