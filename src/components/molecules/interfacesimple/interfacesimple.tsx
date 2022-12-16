import React, {useState} from 'react';
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import clienHttp from "../../../services/client/client";

interface Object{
    url:string;
    author_id:34;
}

const InterfaceSimple = () => {

    const [objPost, setObjPost] = useState(Object);

    const Agregar=()=>{
        console.log("presionado");
        clienHttp.post("",objPost)
            .then((respose)=>{
                console.log(respose.data)
            })

    }

    const OnChange= (event: React.ChangeEvent<HTMLInputElement>)=>{
        setObjPost(event.target.value);
    }

    return (
        <div>
            <Input
                value={objPost.url}
                name="addGifs"
                onChange={()=>OnChange}
                placeHolder="Gift URL"/>

            <Button onClick={()=>Agregar()} children="Agregar" size="small"/>
        </div>
    );
};

export default InterfaceSimple;
