import {AppHttpClient} from "./Constants";
import {Helper} from "./Helper";

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
            setTimeout(categoriesPublishedCount, 500)
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
            setTimeout(categoriesPublished, 1000)
        },
    }
}