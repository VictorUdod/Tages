/// <reference types="cypress" />

import { httpReq } from "../utils/httpReq"
const apiUrl = 'https://petstore.swagger.io/v2/user/';
const invalidUserData = []
const nonExistingUser = 'nonExistingUser'


describe('User Handllers', () => {

    it('Should Return 500 For Invalid Request Body', () => {
        httpReq('POST', apiUrl, 500, invalidUserData)
    });

    it('Should Return 404 For Getting Non-existing User', () => {
        httpReq('GET', apiUrl + nonExistingUser, 404)
    });

    it('Should Return 404 For Deliting Non-existing User', () => {
        httpReq('DELETE', apiUrl + nonExistingUser, 404)
    });


})