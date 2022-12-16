import React, {useState} from 'react';
import Label from "../../atoms/label/label";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import clienHttp from "../../../services/client/client";

const InterfaceSimple = () => {

    const [url, setUrl] = useState("");
    const object ={ "url":`"${url}"`, "author_id":34};
    const Agregar=()=>{
        console.log("presionado");
        clienHttp.post("",object)
            .then((respose)=>{
                console.log(respose.data)
            })

    }

    const OnChange=()=>{
        setUrl(event.target.value);
    }

    return (
        <div>
            <Input
                value="test"
                name="addGifs"
                onChange={()=>OnChange()}
                placeHolder="Gift URL"/>

            <Button onClick={()=>Agregar()} children="Agregar" size="small"/>
        </div>
    );
};

export default InterfaceSimple;
