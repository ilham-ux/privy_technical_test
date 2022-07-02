describe('Operations about registers', function () {
    it('Remove Account', function () { //Remove Account
        cy.request({
            method: 'POST',
            url: 'http://pretest-qa.dcidev.id/api/v1/register/remove',
            body: {
                'phone': '082135389323',
            },
            headers: {
                'content-type': 'application/json'
            }
        }).then(({ status }) => {
            expect(status).to.eq(201)
        })
    })

    it('Resend Otp', function () { //Resend Otp
        cy.request({
            method: 'POST',
            url: 'http://pretest-qa.dcidev.id/api/v1/register/otp/request',
            body: {
                'phone': '082135389323',
            },
            headers: {
                'content-type': 'application/json'
            }
        }).then(({ status }) => {
            expect(status).to.eq(201)
        })
    })

    it('Register matching otp code', function () { //Register matching otp code
        cy.request({
            method: 'POST',
            url: 'http://pretest-qa.dcidev.id/api/v1/register/otp/match',
            body: {
                'user_id': '5274122e-cccb-4199-85f3-af93a6e68a3c',
                'otp_code': '5260'
            },
            headers: {
                'content-type': 'application/json'
            }
        }).then(({ status }) => {
            expect(status).to.eq(201)
        })
    })

    it('Register User By Phone', function () { //Register User By Phone
        cy.request({
            method: 'POST',
            url: 'http://pretest-qa.dcidev.id/api/v1/register',
            body: {
                'phone': '083862918039',
                'password': '12345678',
                'country': 'Indonesia',
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
    
})







