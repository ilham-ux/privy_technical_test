describe('Operations about oauths', function () {
    it('Login user', function () { //Login user
        cy.request({
            method: 'POST',
            url: 'http://pretest-qa.dcidev.id/api/v1/oauth/sign_in',
            body: {
                'phone': '082135389323',
                'password': '123456',
                'latlong': '12345678',
                'device_token': '12345678',
                'device_type': '1'
            },
            headers: {
                'content-type': 'application/json'
            }
        }).then(({ status }) => {
            expect(status).to.eq(201)
        })
    })

    it('Get Credentials', function () { //Get Credentials
        cy.request({
            method: 'GET',
            url: 'http://pretest-qa.dcidev.id/api/v1/oauth/credentials',
            body: {
                'access_token':'22269b097529d8916b34cf47143ceb601b668d7556278b0d5dde06ad698c35c8'
            },
            headers: {
                'content-type': 'application/json'
            }
        }).then(({ status }) => {
            expect(status).to.eq(200)
        })
    })

    it('Logging out user and revoke token.', function () { //Logging out user and revoke token.
        cy.request({
            method: 'POST',
            url: 'http://pretest-qa.dcidev.id/api/v1/oauth/revoke',
            body: {
                'access_token':'22269b097529d8916b34cf47143ceb601b668d7556278b0d5dde06ad698c35c8'
            },
            headers: {
                'content-type': 'application/json'
            }
        }).then(({ status }) => {
            expect(status).to.eq(200)
        })
    })

})