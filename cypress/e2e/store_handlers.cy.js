/// <reference types="cypress" />

import { httpReq } from "../utils/httpReq"
import { getUniqueID } from "../utils/uniqueId"

const apiUrl = 'https://petstore.swagger.io/v2/store/order/'
const uniqueId = getUniqueID();
const petData = {
    "id": +uniqueId,
    "petId": 0,
    "quantity": 0,
    "shipDate": "2023-11-12T13:00:00.000+0000",
    "status": "placed",
    "complete": true
}

describe('Store Handlers', () => {

    it('Post New Order', () => {
        httpReq('POST', apiUrl, 200, petData)
    });

    it('Get Order', () => {
        httpReq('GET', apiUrl + uniqueId, 200, petData)
    });

    it('Should Return 404 For Wrong API address', () => {
        httpReq('GET', 'https://petstore.swagger.io/v2/store/inventori', 404)
    })
})