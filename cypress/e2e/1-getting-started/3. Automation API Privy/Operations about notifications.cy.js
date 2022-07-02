describe('Operations about notifications', function () {
    it('cek app version', function () { //cek app version
        cy.request({
            method: 'POST',
            url: 'http://pretest-qa.dcidev.id/api/v1/notification/1/1',
            body: {
                'grub_id': '1',
                'token': '1'
            },
            headers: {
                'content-type': 'application/json',
            }
        }).then(({ status }) => {
            expect(status).to.eq(201)
        })
    })
})