
// export function httpReq(method, apiUrl, statusCode, petData = null){
    

//     let reqConfig = {
//         method: method,
//         url: apiUrl,
//         failOnStatusCode: false
//     };

//     if(method === 'POST'){
//         reqConfig.body = petData;
//         cy.request(reqConfig).then((res) => {

//             console.log('Actual Response Body:', res.body);
//             console.log('Expected Pet Data:', petData);
    
//             expect(res.status).to.eq(statusCode);
//             if(statusCode === 200){
//             expect(res.body).to.deep.equal(petData)}
//         });
//     } else if (method === 'DELETE'){
//         cy.request(reqConfig).then((res) => {
//             expect(res.status).to.eq(statusCode);
//             expect(res.body).to.have.property('message', petData)
//         })
//     } 
//     else if(method === 'GET'){
//         cy.request(reqConfig).then((res) => {
//             expect(res.status).to.eq(statusCode);
//             if(statusCode === 200){
//             expect(res.body).to.deep.equal(petData)
//             }
//         })
//     } 

    
// }

export function httpReq(method, apiUrl, statusCode, data = null) {
    const reqConfig = {
        method,
        url: apiUrl,
        failOnStatusCode: false,
        body: method === 'POST' ? data : undefined,
    };

    cy.request(reqConfig).then((res) => {
        expect(res.status).to.eq(statusCode);

        if (statusCode === 200 && (method === 'POST' || method === 'GET')) {
            expect(res.body).to.deep.equal(data);
        } else if (method === 'DELETE' && statusCode === 200) {
            expect(res.body).to.have.property('message', data);
        }
        console.log('Actual Response Body:', res.body);
        console.log('Expected data:', data);
    });
}





