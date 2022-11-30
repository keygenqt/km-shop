/**
 * Map class KMM to object
 */
import shared from "shared";

/**
 * Export class from module
 */
export const OrderProductResponse = shared.com.keygenqt.shop.data.responses.OrderProductResponse

/**
 * Map [ProductResponse] to object
 */
OrderProductResponse.prototype.mapToOrderProduct = function () {
    return {
        price: this.price,
        count: this.count,
        sum: this.sum,
        product: this.product.mapToProduct(),
    }
};

/**
 * Ma [ProductResponse] array to objects array
 */
// eslint-disable-next-line no-extend-native
Array.prototype.mapToOrderProducts = function () {
    return this.map((it) => it.mapToOrderProduct())
};