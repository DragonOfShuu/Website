import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode[][]
}

export default function TableMaker({ children }: Props) {
  return (
    <table>
        <thead>
            <tr>
                {
                    children[0].map((element, index) => {
                        return <th key={index}>{element}</th>
                    })
                }
            </tr>
        </thead>
        <tbody>
            {
                children.slice(1).map((row, index) => {
                    let returnable: Array<JSX.Element> = [];
                    
                    row.forEach((e, indexInner) => returnable.push(<td key={indexInner}>{e}</td>));

                    return <tr key={index}>{returnable}</tr>;
                })
            }
        </tbody>
    </table>
  )
}