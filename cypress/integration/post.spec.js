
describe('POST /characters', function () {

    // before(function(){
    //     //cy.back2ThePast() 
    //     cy.setToken()
        
    // })
    

    it('deve cadastrar um personagem', function() {
        const character = {
            name: 'Wanda Maximoff',
            alias: 'Feiticeira Escalate',
            team: ['vingadores'],
            active: true
        }

        cy.postCharacter(character).then(function(response){
            expect(response.status).to.eql(201)
            cy.log(response.body.character_id)
            expect(response.body.character_id.length).to.eql(24)
        })
    })

    context('quando o personagem já existe', function(){

        const character = {
            name: 'Pietro Maximoff',
            alias: 'Mercurio',
            team: [
                'vingadores da costa oeste', 
                'irmandade de mutantes'
            ],
            active: true
        }

        before(function(){

            cy.postCharacter(character).then(function(response){
                expect(response.status).to.eql(201)
            })
        })

        it('não deve cadastrar duplicado', function(){
           
          cy.postCharacter(character).then(function(response){
                expect(response.status).to.eql(400)
                expect(response.body.error).to.eql('Duplicate character')
            })

        })

        it('todos os campos são obrigatorios, com exceção da idade', function() {
            const character = {
                name: '',
                age: 25,
                alias: '',
                team: [''],
                active: true
            }
    
            cy.postCharacter(character).then(function(response){
                expect(response.status).to.eql(400)
                cy.log(response.body.character_id)
                expect(response.body.error).to.eql('Bad Request')
                expect(response.body.message).to.eql('Validation failed')

            })
        })

    })
})


