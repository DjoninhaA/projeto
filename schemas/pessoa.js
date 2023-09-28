export default {
      name: 'pessoa',
      type: 'document',
      title: 'pessoa',
      fields: [
        {
          name: 'nome',
          type: 'string'
        },
        {
          name:'sobrenome',
          type: 'string',
        },
        {
          name: 'input_image',
          type: 'image'
        },
        {
          name: 'cargo',
          type: 'string'
        }
      ]
  }

  //Valid types are: pessoa, array, block, boolean, datetime, date, document, email, file, geopoint, image, number,
  // object, reference, crossDatasetReference, slug, span, string, telephone, text and url