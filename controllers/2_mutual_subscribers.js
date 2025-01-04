import { User } from "../models/users.models.js";

const getMutualSubscribers= asyncHandler(async (req,res)=>{

    const mutualSubscriptions = await User.aggregate([
        {
          $lookup: {
            from: 'subscriptions',
            localField: '_id',
            foreignField: 'channel',
            as: 'subscribers'
          }
        },
        {
          $lookup: {
            from: 'subscriptions',
            localField: '_id',
            foreignField: 'subscriber',
            as: 'subscribedTo'
          }
        },
        {
          $addFields: {
            mutual: {
              $setIntersection: ['$subscribers.subscriber', '$subscribedTo.channel']
            }
          }
        },
        {
          $match: { mutual: { $ne: [] } }
        }
      ]);
      
      console.log(mutualSubscriptions);
      


})



export {getMutualSubscribers}

