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
        categoriesPublished: function (
            delay = defaultDelay
        ) {
            return Helper.request(async () => {
                return await AppHttpClient.get.categoriesPublished()
            }, (response) => {
                return JSON.stringify(response.toArray().mapToCategories());
            }, delay)
        },
        collectionsPublished: function (
            delay = defaultDelay
        ) {
            return Helper.request(async () => {
                return await AppHttpClient.get.collectionsPublished()
            }, (response) => {
                return JSON.stringify(response.toArray().mapToCollections())
            }, delay)
        },
        orderByNumber: function (
            number,
            delay = defaultDelay
        ) {
            return Helper.request(async () => {
                return await AppHttpClient.get.orderByNumber(number)
            }, (response) => {
                return JSON.stringify(response.mapToOrder())
            }, delay)
        },
        productsPublished: function (
            page,
            order,
            range,
            categories,
            collections,
            delay = defaultDelay
        ) {
            return Helper.request(async () => {
                return await AppHttpClient.get.productsPublished(
                    parseInt(page),
                    order,
                    range.split(','),
                    categories.length === 0 ? [] : categories.split(','),
                    collections.length === 0 ? [] : collections.split(','),
                )
            }, (response) => {
                return JSON.stringify({
                    pages: response.pages,
                    products: response.products.mapToProducts()
                });
            }, delay)
        },
        productsPublishedByIDs: function (
            ids,
            delay = defaultDelay
        ) {
            return Helper.request(async () => {
                return await AppHttpClient.get.productsPublishedByIDs(
                    ids.split(',')
                )
            }, (response) => {
                return JSON.stringify(response.toArray().mapToProducts());
            }, delay)
        },
        product: function (
            id,
            delay = defaultDelay
        ) {
            return Helper.request(async () => {
                return await AppHttpClient.get.product(id)
            }, (response) => {
                return JSON.stringify(response.mapToProduct());
            }, delay)
        },
        prices: function (
            categories,
            collections,
            delay = 0
        ) {
            return Helper.request(async () => {
                return await AppHttpClient.get.prices(
                    categories.split(','),
                    collections.split(','),
                )
            }, (response) => {
                return JSON.stringify({
                    min: response.min,
                    max: response.max
                });
            }, delay)
        },
    },
    post: {
        message: function (
            request,
            delay = defaultDelay
        ) {
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
            products,
            delay = defaultDelay
        ) {
            return Helper.request(async () => {

                const productsRequest = []

                JSON.parse(products).forEach((it) => {
                    productsRequest.push(new AppRequests.OrderProductRequest(
                        it.id,
                        it.count,
                        it.price
                    ))
                })

                return await AppHttpClient.post.orderCreate(new AppRequests.OrderCreateRequest(
                    email,
                    phone,
                    address,
                    productsRequest,
                ))
            }, (response) => {
                return JSON.stringify(response.mapToOrder());
            }, delay)
        },
    }
}