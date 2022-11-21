import shared from "shared";
import {AppConf} from "../../conf/AppConf";

/**
 * Ktor client
 */
export const HttpClient = new shared.com.keygenqt.shop.services.ServiceRequestJS(AppConf.publicPath)

/**
 * Ktor requests
 */
export const Requests = shared.com.keygenqt.shop.data.requests