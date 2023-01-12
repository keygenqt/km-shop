import {AppHttpClient, AppRequests} from "./Constants";
import {Helper} from "./Helper";

// mappers
export * from './mappers/CollectionMapper';
export * from './mappers/CategoryMapper';
export * from './mappers/ProductMapper';
export * from './mappers/OrderMapper';
export * from './mappers/OrderProductMapper';

// For a slower loading that allows you to work out the animation, the cache will be responsible for the speed
const defaultDelay = 500

export const Requests = {
    get: {
        categoriesPublished: function (delay = defaultDelay) {
            return Helper.request(async () => {
                return await AppHttpClient.get.categoriesPublished()
            }, (response) => {
                return JSON.stringify(response.toArray().mapToCategories());
            }, delay)
        },
        collectionsPublished: function (delay = defaultDelay) {
            return Helper.request(async () => {
                return await AppHttpClient.get.collectionsPublished()
            }, (response) => {
                return JSON.stringify(response.toArray().mapToCollections())
            }, delay)
        },
    },
    post: {
        message: function (
            fname,
            lname,
            email,
            phone,
            message,
            delay = defaultDelay
        ) {
            return Helper.request(async () => {
                return await AppHttpClient.post.message(AppRequests.MessageRequest(
                    fname,
                    lname,
                    email,
                    phone,
                    message,
                ))
            }, (response) => {
                return JSON.stringify(response);
            }, delay)
        },
    }
}