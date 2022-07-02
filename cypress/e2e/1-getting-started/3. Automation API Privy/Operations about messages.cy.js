describe('Operations about messages', function () {
    it('Get message', function () { //Get message
        cy.request({
            method: 'GET',
            url: 'http://pretest-qa.dcidev.id/api/v1/message/{5274122e-cccb-4199-85f3-af93a6e68a3c}',
            body: {
                'user_id': '5274122e-cccb-4199-85f3-af93a6e68a3c',
            },
            headers: {
                'content-type': 'application/json',
                'Authorization': 'a1bc13b83740377c758dfafc06385dc9e08168d89e31e6f8e4559c3dd9a21e50'
            }
        }).then(({ status }) => {
            expect(status).to.eq(200)
        })
    })
    it('Send message', function () { //Send message
        cy.request({
            method: 'POST',
            url: 'http://pretest-qa.dcidev.id/api/v1/message/send',
            body: {
                'user_id': '5274122e-cccb-4199-85f3-af93a6e68a3c',
                'message': 'halo halo halo'
            },
            headers: {
                'content-type': 'application/json',
                'Authorization': 'a1bc13b83740377c758dfafc06385dc9e08168d89e31e6f8e4559c3dd9a21e50'
            }
        }).then(({ status }) => {
            expect(status).to.eq(201)
        })
    })

})