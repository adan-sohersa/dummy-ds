import React, { InputHTMLAttributes, ReactNode } from "react";
import {Input} from "@nextui-org/react";

interface PlaceHolderProps extends InputHTMLAttributes<HTMLInputElement>{
    children: ReactNode;
}

const PlaceHolder = ({children, ...props}:PlaceHolderProps) =>{
    return (
        <div className="w-[200px] h-[50px] border-4 border-gray-950">
            <Input {...props} label="l" isClearable className="border-2 border-gray-950"></Input>
        </div>
    )
}
export {PlaceHolder as default, PlaceHolderProps};
