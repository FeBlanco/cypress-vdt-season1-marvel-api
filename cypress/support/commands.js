//POST
Cypress.Commands.add('setToken', function () {
    cy.api({
        method: 'POST',
        url: '/sessions',
        body: {
            email: 'blanco@qacademy.io',
            password: 'qa-cademy'
        },
        failOnStatusCode: false
    }).then(function (response) {
        expect(response.status).to.eql(200)
        //cy.log(response.body.token)
        Cypress.env('token', response.body.token)
    })

})

//DELETE
Cypress.Commands.add('back2ThePast', function () {
    cy.api({
        method: 'DELETE',
        url: 'back2thepast/62f692d59af031001650e9ee',
        failOnStatusCode: false
    }).then(function (response) {
        expect(response.status).to.eql(200)
    })

})

// POST requisição que faz o teste de cadastro de personagem
Cypress.Commands.add('postCharacter', function (payload) {
    cy.api({
        method: 'POST',
        url: '/characters',
        body: payload,
        headers: {
            Authorization: Cypress.env('token')
        },
        failOnStatusCode: false
    }).then(function (response) {
        return response
    })

})

// GET requisição que testa a obtenção de personagens
Cypress.Commands.add('getCharacters', function () {
    cy.api({
        method: 'GET',
        url: '/characters',
        headers: {
            Authorization: Cypress.env('token')
        },
        failOnStatusCode: false
    }).then(function (response) {
        return response
    })
})

//GET buscar por id
Cypress.Commands.add('getCharacterById', function (characterId) {
    cy.api({
        method: 'GET',
        url: '/characters/' + characterId,
        headers: {
            Authorization: Cypress.env('token')
        },
        failOnStatusCode: false
    }).then(function (response) {
        return response
    })
})


// GET buscar por nome
Cypress.Commands.add('searchCharacters', function (characterName) {
    cy.api({
        method: 'GET',
        url: '/characters',
        qs: {name: characterName},
        headers: {
            Authorization: Cypress.env('token')
        },
        failOnStatusCode: false
    }).then(function (response) {
        return response
    })
})

// massa de teste para metodo GET
Cypress.Commands.add('populateCharacters', function (characters) {
    // cy.postCharacter(characters[0])
    // cy.postCharacter(characters[1])
    // cy.postCharacter(characters[2])

    characters.forEach(function (c) {
        cy.postCharacter(c)
    })
})

//DELETE

Cypress.Commands.add('deleteCharacterById', function (characterId) {
    cy.api({
        method: 'DELETE',
        url: '/characters/' + characterId,
        headers: {
            Authorization: Cypress.env('token')
        },
        failOnStatusCode: false
    }).then(function (response) {
        return response
    })
})
