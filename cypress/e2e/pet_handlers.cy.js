/// <reference types="cypress" />

import { httpReq } from "../utils/httpReq";
import { getUniqueID } from "../utils/uniqueId";

const apiUrl = 'https://petstore.swagger.io/v2/pet/';
const petId = getUniqueID();
const petData = {
  "id": +petId,
  "category": {
      "id": 0,
      "name": "string"
  },
  "name": "Sharik",
  "photoUrls": [
      "string"
  ],
  "tags": [
      {
          "id": 0,
          "name": "Sharik"
      }
  ],
  "status": "avalible"
};

describe('Pet Handler', () => {

  it('Post New Pet', () => {
    httpReq('POST', apiUrl, 200, petData)
    // cy.request({
    //   method: 'POST',
    //   url: apiUrl,
    //   body: petData
    // }).then((res) => {
    //   expect(res.status).to.eq(200);
    //   expect(res.body).to.deep.equal(petData)
    // });
  });

  it('Get Pet By ID', () => {
    httpReq('GET', apiUrl + petId, 200, petData)
    // cy.request('GET', apiUrl + petId).then((res) => {
    //   expect(res.status).to.eq(200);
    //   expect(res.body).to.deep.equal(petData)    
    // });
  });

  it('Delete Pet By ID', () => {
    httpReq('DELETE', apiUrl + petId, 200, petId)
    // cy.request('DELETE', apiUrl + petId).then((res) => {
    //   expect(res.status).to.eq(200);
    //   expect(res.body).to.have.property('message', `${petId}`);
    // });
    httpReq('GET', apiUrl + petId, 404)
    // cy.request({
    //   method: 'GET',
    //   url: apiUrl + petId,
    //   failOnStatusCode: false
    // }).then((response) => {
    //   expect(response.status).to.eq(404);
    // });  
  });
});

