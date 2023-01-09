import {AppHttpClient} from "./Constants";
import {Helper} from "./Helper";

// For a slower loading that allows you to work out the animation, the cache will be responsible for the speed
const defaultDelay = 500

export const Requests = {
    get: {
        categoriesPublishedCount: function () {
            async function categoriesPublishedCount() {
                try {
                    const categories = await AppHttpClient.get.categoriesPublished()
                    Helper.sendEvent(`${categories.toArray().length}`)
                } catch (e) {
                    Helper.sendEvent(e)
                }
            }
            setTimeout(categoriesPublishedCount, defaultDelay)
        },
        categoriesPublished: function () {
            async function categoriesPublished() {
                try {
                    const categories = await AppHttpClient.get.categoriesPublished()
                    Helper.sendEvent(JSON.stringify(categories.toArray()))
                } catch (e) {
                    Helper.sendEvent(e)
                }
            }
            setTimeout(categoriesPublished, defaultDelay)
        },
        collectionsPublished: function () {
            async function collectionsPublished() {
                try {
                    const categories = await AppHttpClient.get.collectionsPublished()
                    Helper.sendEvent(JSON.stringify(categories.toArray()))
                } catch (e) {
                    Helper.sendEvent(e)
                }
            }
            setTimeout(collectionsPublished, defaultDelay)
        },
    }
}