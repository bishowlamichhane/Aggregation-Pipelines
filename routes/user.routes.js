import express from 'express'
import { getTopChannels } from '../controllers/Top_Subscribed_Channels.js'
import { getMutualSubscribers } from '../controllers/mutual_subscribers.js'
import { getCommonSubscriptions } from '../controllers/commonSubscriptions.js'
import { getSubscriberGrowth } from '../controllers/subscriberGrowth.js'

const router=express.Router()


//Mini Project 1 to get top subscribed channels 
router.route('/getTopChannels').post(getTopChannels)

//Mini project 2 to get Mutual Subscribers
router.route('/getMutualSubscribers').post(getMutualSubscribers)

//Mini project 3 to get the grown of subscribers overtime
router.route('/getSubscriberGrowth').post(getSubscriberGrowth)

//Mini project 4 to get common SUbscribers of channels 
router.route('/getCommonSubscriptions').post(getCommonSubscriptions)



export default router