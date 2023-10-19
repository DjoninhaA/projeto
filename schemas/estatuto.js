export default {
    name: 'estatuto',
    type: 'document',
    title: 'estatuto',
    fields: [
      {
        name: 'tituloprincipal',
        type: 'string',
        title:'Titulo principal'
      },
      {
        name: 'titulo',
        type: 'string',
        title:'Titulo'
      },
      {
        name: 'descricao',
        type: 'string',
        title:'Descrição',
        description: 'texto'
      }
    ]
}