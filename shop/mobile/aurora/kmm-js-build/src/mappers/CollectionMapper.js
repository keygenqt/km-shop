/**
 * Map class KMM to object
 */
import shared from "shared";

/**
 * Export class from module
 */
export const CollectionResponse = shared.com.keygenqt.shop.data.responses.CollectionResponse

/**
 * Map [CollectionResponse] to object
 */
CollectionResponse.prototype.mapToCollection = function () {
    return {
        id: this.id,
        key: this.key,
        name: this.name,
        desc: this.desc,
        icon: this.icon,
        isPublished: this.isPublished,
        createAt: this.createAt,
        updateAt: this.updateAt,
    }
};

/**
 * Ma [CollectionResponse] array to objects array
 */
// eslint-disable-next-line no-extend-native
Array.prototype.mapToCollections = function () {
    return this.map((it) => it.mapToCollection())
};