export default {
    name: 'pet',
    type: 'document',
    title: 'Pet',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'raca',
        type: 'string',
        title: 'raça'
      },
      {
        name: 'peso',
        type: 'boolean',
        title: 'peso'
      }
    ],
      name: 'pessoa',
      type: 'document',
      title: 'pessoa',
      fields: [
        {
          name: 'pessoa',
          type: 'image'
        }
      ]
  }