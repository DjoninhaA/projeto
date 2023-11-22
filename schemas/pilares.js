export default {
    name: 'pilares',
    type: 'document',
    title: 'Pilares',
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
        name: 'topicos',
        type: 'array',
        of:[
          {
            name: 'itens',
            type: 'string',
            title: 'itens'
          }
        ]
      }
    ]
}