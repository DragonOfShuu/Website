import React, { ReactElement } from 'react'
import HeaderBlog from './headerBlog'
import ParagraphBlog from './paragraphBlog'

import styles from "../../styles/e-portfolio/components/Bloggables.module.sass";

type Props = {
    // children: ReactElement<HeaderBlog | ParagraphBlog> | 
    //           Array<ReactElement<HeaderBlog | ParagraphBlog>>,
    children: JSX.Element | JSX.Element[]
    header: JSX.Element
}

export default function MainBlogContent({ header, children }: Props) {
    return (
        <main className='main'>
            <h1 className="title">
                {header}
            </h1>
            <br />
            <div className={styles.blogContent}>
                {children}
            </div>
        </main>
    );
}