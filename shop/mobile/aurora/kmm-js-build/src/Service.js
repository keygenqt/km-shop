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

export const Service = {
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
        message: function (request, delay = defaultDelay) {
            return Helper.request(async () => {
                return await AppHttpClient.post.message(request)
            }, (response) => {
                return JSON.stringify(response);
            }, delay)
        },
        orderCreate: function (
            email,
            phone,
            address,
            delay = defaultDelay
        ) {
            return Helper.request(async () => {
                return await AppHttpClient.post.orderCreate(new AppRequests.OrderCreateRequest(
                    email,
                    phone,
                    address,
                    [],
                ))
            }, (response) => {
                return JSON.stringify(response);
            }, delay)
        },
    }
}