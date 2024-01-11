import shared from "shared";
import {ConstantConf} from "../../conf/app/ConstantConf";

const greeting = new shared.com.keygenqt.shop.Greeting().greeting()

/**
 * AdminRole
 */
export const AdminRole = shared.com.keygenqt.shop.data.responses.AdminRole

/**
 * OrderState
 */
export const OrderState = shared.com.keygenqt.shop.data.responses.OrderState

/**
 * Ktor client
 */
export const HttpClient = new shared.com.keygenqt.shop.services.ServiceRequestJS('/')

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
