import shared from "shared";
import {ConstantConf} from "../../conf/app/ConstantConf";

const greeting = new shared.com.keygenqt.shop.Greeting().greeting()

/**
 * Ktor client
 */
export const HttpClient = new shared.com.keygenqt.shop.services.ServiceRequestJS(ConstantConf.publicPath)

/**
 * Ktor requests
 */
export const Requests = shared.com.keygenqt.shop.data.requests

/**
 * Apps constants KMM module
 */
export const ConstantKMM = {
    greeting: greeting,
};