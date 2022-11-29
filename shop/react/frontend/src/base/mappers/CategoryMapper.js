/**
 * Map class KMM to object
 */
import shared from "shared";

/**
 * Export class from module
 */
export const CategoryResponse = shared.com.keygenqt.shop.data.responses.CategoryResponse

/**
 * Map [CategoryResponse] to object
 */
CategoryResponse.prototype.mapToCategory = function () {
    return {
        id: this.id,
        key: this.key,
        name: this.name,
        desc: this.desc,
        image: this.image,
        isPublished: this.isPublished,
        createAt: this.createAt,
        updateAt: this.updateAt,
    }
};

/**
 * Ma [CategoryResponse] array to objects array
 */
// eslint-disable-next-line no-extend-native
Array.prototype.mapToCategories = function () {
    return this.map((it) => it.mapToCategory())
};