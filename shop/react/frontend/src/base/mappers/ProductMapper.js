/**
 * Map class KMM to object
 */
import shared from "shared";

/**
 * Export class from module
 */
export const ProductResponse = shared.com.keygenqt.shop.data.responses.ProductResponse

/**
 * Map [ProductResponse] to object
 */
ProductResponse.prototype.mapToProduct = function () {
    return {
        id: this.id,
        category: this.category.mapToCategory(),
        collections: this.collections.mapToCollections(),
        image1: this.image1,
        image2: this.image2,
        image3: this.image3,
        name: this.name,
        description: this.description,
        price: this.price,
        isPublished: this.isPublished,
        createAt: this.createAt,
        updateAt: this.updateAt,
    }
};

/**
 * Ma [ProductResponse] array to objects array
 */
// eslint-disable-next-line no-extend-native
Array.prototype.mapToProducts = function () {
    return this.map((it) => it.mapToProduct())
};