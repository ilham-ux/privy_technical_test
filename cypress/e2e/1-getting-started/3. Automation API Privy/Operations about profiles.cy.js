describe('Operations about profiles', function () {
    it('Update Education user', function () { //Update Education user
        cy.request({
            method: 'POST',
            url: 'http://pretest-qa.dcidev.id/api/v1/profile/education',
            body: {
                'school_name': 'upn',
                'graduation_time': '08-09-2006'
            },
            headers: {
                'content-type': 'application/json',
                'Authorization': '23eff05e185222a682560c2ec1205481a911e43ecbbb7608156204e1b2ff1c61'
            }
        }).then(({ status }) => {
            expect(status).to.eq(201)
        })
    })

    it('Update career user', function () { //Update career user
        cy.request({
            method: 'POST',
            url: 'http://pretest-qa.dcidev.id//api/v1/profile/career',
            body: {
                'position': 'QA Engineer',
                'company_name': 'Telkom',
                'starting_from': '08-09-2006',
                'ending_in': '08-09-2030'
            },
            headers: {
                'content-type': 'application/json',
                'Authorization': '23eff05e185222a682560c2ec1205481a911e43ecbbb7608156204e1b2ff1c61'
            }
        }).then(({ status }) => {
            expect(status).to.eq(201)
        })
    })

    it('Update Profile user', function () { //Update Profile user
        cy.request({
            method: 'POST',
            url: 'http://pretest-qa.dcidev.id/api/v1/profile',
            body: {
                'name': 'Benzema',
                'gender': '1',
                'birthday': '02-01-1998',
                'hometown': 'Yogyakarta',
                'bio': 'nothing'
            },
            headers: {
                'content-type': 'application/json',
                'Authorization': '23eff05e185222a682560c2ec1205481a911e43ecbbb7608156204e1b2ff1c61'
            }
        }).then(({ status }) => {
            expect(status).to.eq(201)
        })
    })

    it('Get Current User', function () { //Get Current User
        cy.request({
            method: 'GET',
            url: 'http://pretest-qa.dcidev.id/api/v1/profile/me',

            headers: {
                'content-type': 'application/json',
                'Authorization': '23eff05e185222a682560c2ec1205481a911e43ecbbb7608156204e1b2ff1c61'
            }
        }).then(({ status }) => {
            expect(status).to.eq(200)
        })
    })

})