import shared from "shared";
import {ConstantConf} from "../../conf/app/ConstantConf";

const greeting = new shared.com.keygenqt.shop.Greeting().greeting()
const serviceRequest = new shared.com.keygenqt.shop.services.ServiceRequestJS(ConstantConf.publicPath)

/**
 * Apps constants KMM module
 */
export const ConstantKMM = {
    greeting: greeting,
    request: serviceRequest
};