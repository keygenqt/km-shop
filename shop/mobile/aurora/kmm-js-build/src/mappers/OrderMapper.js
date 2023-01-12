/**
 * Map class KMM to object
 */
import shared from "shared";

/**
 * Export class from module
 */
export const OrderResponse = shared.com.keygenqt.shop.data.responses.OrderResponse

/**
 * Map [ProductResponse] to object
 */
OrderResponse.prototype.mapToOrder = function () {
    return {
        id: this.id,
        number: this.number,
        email: this.email,
        phone: this.phone,
        address: this.address,
        note: this.note,
        state: this.state.name,
        sum: this.sum,
        createAt: this.createAt,
        updateAt: this.updateAt,
        products: this.products.mapToOrderProducts(),
    }
};