import React, {FC} from 'react';
import "./label.scss"

interface LabelProps {
    children: React.ReactNode;
    size?: "large"|"medium"|"small";
}
const Label: FC<LabelProps> = ({children,size="large"}) => {
    return <label className={`label label--${size}`} >{children}</label>;
};

export default Label;
