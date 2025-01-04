import { Subscription } from "../models/Subscription.model.js";

const getCommonSubscriptions = asyncHandler( async (req,res)=>{

    const commonSubscriptions = await Subscription.aggregate([
        {
          $match: { subscriber: { $in: [userId1, userId2, userId3] } }  // Match subscriptions for specific users
        },
        {
          $group: {
            _id: "$channel",  // Group by channel
            count: { $sum: 1 }  // Count how many users subscribed to each channel
          }
        },
        {
          $match: { count: { $gte: 2 } }  // Filter channels subscribed to by at least 2 users
        }
      ]);
      
      console.log(commonSubscriptions);
      




})


export {getCommonSubscriptions}



/*

Explanation:

$match: Filters subscriptions to include only those where the subscriber is one of the users in the provided list.

$group: Groups the subscriptions by channel and counts how many users subscribed to each channel.

$match: Filters to show only channels subscribed to by at least 2 users.

*/