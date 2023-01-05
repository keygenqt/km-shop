import shared from "kmm-module/shared";

// get client ktor js
// This API enables cross-origin requests to anywhere. (for check with webview js)
// https://cors-anywhere.herokuapp.com/
export const HttpClient = new shared.com.keygenqt.shop.services.ServiceRequestJS("https://shop-api.keygenqt.com/")

// get count categories (it's not work)
async function getCategoriesCount() {
    const categories = await HttpClient.get.categoriesPublished()
    console.log(categories)
    return categories.toArray().length
}

export default getCategoriesCount;