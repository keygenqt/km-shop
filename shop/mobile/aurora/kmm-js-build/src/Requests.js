import {AppHttpClient} from "./Constants";
import {Helper} from "./Helper";

// For a slower loading that allows you to work out the animation, the cache will be responsible for the speed
const defaultDelay = 500

export const Requests = {
    get: {
        categoriesPublishedCount: function (delay = defaultDelay) {
            async function categoriesPublishedCount() {
                try {
                    const categories = await AppHttpClient.get.categoriesPublished()
                    Helper.sendEvent(`${categories.toArray().length}`)
                } catch (e) {
                    Helper.sendEvent(e)
                }
            }
            setTimeout(categoriesPublishedCount, delay)
        },
        categoriesPublished: function (delay = defaultDelay) {
            async function categoriesPublished() {
                try {
                    const categories = await AppHttpClient.get.categoriesPublished()
                    Helper.sendEvent(JSON.stringify(categories.toArray()))
                } catch (e) {
                    Helper.sendEvent(e)
                }
            }
            setTimeout(categoriesPublished, delay)
        },
        collectionsPublished: function (delay = defaultDelay) {
            async function collectionsPublished() {
                try {
                    const categories = await AppHttpClient.get.collectionsPublished()
                    Helper.sendEvent(JSON.stringify(categories.toArray()))
                } catch (e) {
                    Helper.sendEvent(e)
                }
            }
            setTimeout(collectionsPublished, delay)
        },
    }
}