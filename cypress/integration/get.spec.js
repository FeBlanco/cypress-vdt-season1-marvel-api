

describe('GET /characters', function () {

    const characters = [
        {
            name: 'Charles Xavier',
            alias: 'Professor X',
            team: ['x-men'],
            active: true
        },
        {
            name: 'Logan',
            alias: 'Wolverine',
            team: ['x-men'],
            active: true
        },
        {
            name: 'Peter Parker',
            alias: 'Homem Aranha',
            team: ['Novos vingadores'],
            active: true
        }
    ]
    before(function () {
    //    // cy.back2ThePast()
    //     cy.setToken()
         cy.populateCharacters(characters)
     })
    it('deve retorna uma lista de personagens', function () {
        cy.getCharacters().then(function (response) {
            expect(response.status).to.eql(200)
            expect(response.body).to.be.a('array')
            expect(response.body.length).greaterThan(0)
        })
    })

    it('deve busar personagem por nome', function () {
        cy.searchCharacters('Logan').then(function (response) {
            expect(response.status).to.eql(200)
            expect(response.body.length).to.eql(1)
            expect(response.body[0].alias).to.eql('Wolverine')
            expect(response.body[0].team).to.eql(['x-men'])
            expect(response.body[0].active).to.eql(true)
        })

    })
})

describe('GET /characters/id', function () {

    context('quando tenho um personagem cadastrado', function () {

        // before(function () {
        //     //cy.back2ThePast()
        //     cy.setToken()
        // })

        const tonyStark = {
            name: 'Tony Stark',
            alias: 'Homem de Ferro',
            team: [
                'Vingadores'
            ],
            active: true
        }

        before(function () {
            //todo
            cy.postCharacter(tonyStark).then(function (response) {
                Cypress.env('characterId', response.body.character_id)
            })
        })
        it('deve buscar o personagem pelo id', function () {
            const id = Cypress.env('characterId')
            cy.getCharacterById(id).then(function (response) {
                expect(response.status).to.eql(200)
                expect(response.body.alias).to.eql('Homem de Ferro')
                expect(response.body.team).to.eql(['Vingadores'])
                expect(response.body.active).to.eql(true)
            })
        })
    })

    it('deve retornar 404 ao buscar por id não cadastrado', function() {
        const id = '62fbeaf6987da8ae300f4f02'
        cy.getCharacterById(id).then(function (response) {
            expect(response.status).to.eql(404)
        })
        
    })

})