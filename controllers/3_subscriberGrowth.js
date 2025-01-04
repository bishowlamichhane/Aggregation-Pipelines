const getSubscriberGrowth = asyncHandler(async (req,res)=>{

    const subscriberGrowth = await Subscription.aggregate([
        {
          $match: { channel: userId }  // Filter subscriptions for a specific channel
        },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },  // Group by day
            count: { $sum: 1 }
          }
        },
        {
          $sort: { _id: 1 }  // Sort by date
        }
      ]);
      
      console.log(subscriberGrowth);
      



})



export {getSubscriberGrowth}


/*

Explanation:

$match: Filters subscriptions for a specific channel (userId).

$group: Groups the subscriptions by date, using $dateToString to format the createdAt field as a date string.

$sort: Sorts by date in ascending order to track growth over time

*/