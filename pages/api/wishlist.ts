import type { NextApiRequest, NextApiResponse } from 'next'
import payload from '../../components/api/wishlistPayload'
import { IWishListCollection } from '../../types'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IWishListCollection>
) {
    res.status(200).json(payload)
}