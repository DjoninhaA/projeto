export default {
    name: 'membros',
    type: 'document',
    title: 'Membros',
    fields: [
      {
        name: 'nome',
        type: 'string',
        title: 'Nome'
      },
      {
        name: 'cargo',
        type: 'string',
        title: 'Cargo'
      },
      {
        name: 'bio',
        type: 'string',
        title: 'Biografia'
      },
      {
        name: 'imagem',
        type: 'image',
        description: 'insira a foto do membro aqui.'
      }
  
    ]
}