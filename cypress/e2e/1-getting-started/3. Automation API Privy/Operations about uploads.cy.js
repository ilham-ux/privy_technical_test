describe('Operations about uploads', function () {
    it('Set Cover picture', function () { //Set Cover picture
        cy.request({
            method: 'POST',
            url: 'http://pretest-qa.dcidev.id/api/v1/uploads/cover',
            body: {
                'image': '',
            },
            headers: {
                'content-type': 'application/json',
                'Authorization': '23eff05e185222a682560c2ec1205481a911e43ecbbb7608156204e1b2ff1c61'
            }
        }).then(({ status }) => {
            expect(status).to.eq(201)
        })
    })

    it('Set Default picture', function () { //Set Default picture
        cy.request({
            method: 'POST',
            url: 'http://pretest-qa.dcidev.id/api/v1/uploads/profile/default',
            body: {
                'id': '36f43a53-f22e-4f6b-941a-573b85a7fc75',
            },
            headers: {
                'content-type': 'application/json',
                'Authorization': '23eff05e185222a682560c2ec1205481a911e43ecbbb7608156204e1b2ff1c61'
            }
        }).then(({ status }) => {
            expect(status).to.eq(201)
        })
    })

    it('Delete profile picture', function () { //Delete profile picture
        cy.request({
            method: 'DELETE',
            url: 'http://pretest-qa.dcidev.id/api/v1/uploads/profile/delete',
            body: {
                'id': '36f43a53-f22e-4f6b-941a-573b85a7fc75',
            },
            headers: {
                'content-type': 'application/json',
                'Authorization': '23eff05e185222a682560c2ec1205481a911e43ecbbb7608156204e1b2ff1c61'
            }
        }).then(({ status }) => {
            expect(status).to.eq(204)
        })
    })

    it('Upload Profile Picture', function () { //Upload Profile Picture
        cy.request({
            method: 'POST',
            url: 'http://pretest-qa.dcidev.id/api/v1/uploads/profile',
            body: {
                'image': '',
            },
            headers: {
                'content-type': 'application/json',
                'Authorization': '23eff05e185222a682560c2ec1205481a911e43ecbbb7608156204e1b2ff1c61'
            }
        }).then(({ status }) => {
            expect(status).to.eq(201)
        })
    })

})