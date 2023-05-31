import { ReactNode } from "react"
import TableMaker from "../components/utils/tableMaker";

export interface IWishlistItem {
    id: number,
    name: string,
    description: string,
    image: string,
    alt?: string,
    tags?: string[],
    link: string
}

export interface IWishListCollection {
    [Group: string]: IWishlistItem[]
}

export interface IArticleItem {
    id: number,
    name: string,
    description: string,
    link: string,
    image?: string,
    alt?: string,
    tags?: ETag[],
    date?: Date
}

export enum ETag {
    article = 'article',
    project = 'project',
    translation = 'translation',
    SLCC = 'SLCC'
}