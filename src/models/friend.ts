import { prop, getModelForClass } from '@typegoose/typegoose'

interface IFriend {
  id: number
  name: string
  items: []
}

type TFriends = [IFriend]

class Friend {
  @prop({ required: true })
  public id!: number
  @prop({ required: true })
  public name!: string
  @prop({ required: true })
  public items!: [TFriends]
}

const FriendModel = getModelForClass(Friend)
export default FriendModel
