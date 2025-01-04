import { User } from "../models/users.models.js";

const getTopChannels = asyncHandler ( async (req,res)=>{
    
    const topChannels = await User.aggregate([
        {
          $lookup: {
            from: 'subscriptions',
            localField: '_id',
            foreignField: 'channel',
            as: 'subscribers'
          }
        },
        {
          $addFields: {
            subscribersCount: { $size: '$subscribers' }
          }
        },
        {
          $sort: { subscribersCount: -1 }
        },
        {
          $limit: 5
        },
        {
          $project: {
            username: 1,
            subscribersCount: 1,
            avatar: 1
          }
        }
      ]);
      
      console.log(topChannels)

})

export {getTopChannels}