import React, { ReactNode } from "react";
import { MathComponent } from "mathjax-react"

type Props = {
    block?: boolean,
    children: ReactNode
}

const Math = ({ block = false, children }: Props) => {
    return <MathComponent display={block} tex={String.raw`${children}`} />;
};

export default Math;