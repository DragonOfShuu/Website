// Main E-portfolio file

import React from 'react'
import ArticleItem from '../../components/e-portfolio/articleItem';
import styles from "../../styles/e-portfolio/Index.module.scss";
import { IArticleItem } from '../../types';

type Props = {}

const articles: IArticleItem[] = [
    {
        name: "Credit Card Debt",
        id: 0,
        description: "A detailed article on what I have learned about the usage of Algebra in the real world.",
        link: "/e-portfolio/articles/credit-card-debt",
        // image: "/e-portfolio/credit-card-debt/CeditCardImage.png"
    }
]

export default function Index({}: Props) {
    return (
        <main className="main">
            <h1 className="title">
                My <span>E-Portfolio</span>
            </h1>

            <div className="spacerDiv"></div>

            <div className={styles.portfolioCardHolder}>
                {
                    articles.map((item) => {
                        return <ArticleItem article={item} key={item.id}/>
                    })
                }
            </div>
        </main>
    );
}