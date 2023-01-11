import {AppHttpClient} from "./Constants";
import {Helper} from "./Helper";

// For a slower loading that allows you to work out the animation, the cache will be responsible for the speed
const defaultDelay = 500

export const Requests = {
    get: {
        categoriesPublished: function (delay = defaultDelay) {
            const caller = Helper.randomUUID()
            setTimeout(async () => {
                try {
                    const categories = await AppHttpClient.get.categoriesPublished()
                    Helper.sendEvent(caller, JSON.stringify(categories.toArray()))
                } catch (e) {
                    Helper.sendEvent(caller, e)
                }
            }, delay)
            return caller
        },
        collectionsPublished: function (delay = defaultDelay) {
            const caller = Helper.randomUUID()
            setTimeout(async () => {
                try {
                    const collections = await AppHttpClient.get.collectionsPublished()
                    Helper.sendEvent(caller, JSON.stringify(collections.toArray()))
                } catch (e) {
                    Helper.sendEvent(caller, e)
                }
            }, delay)
            return caller
        },
    }
}