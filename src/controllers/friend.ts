import Friend from '../models/friend'
import catchAsync from '../utils/catchAsync'
import { Request, Response, NextFunction } from 'express'

export const getFriends = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const friends = await Friend.find()

  res.status(200).json({
    status: 200,
    data: friends
  })
})
