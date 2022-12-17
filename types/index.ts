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