export default {
      name: 'pessoa',
      type: 'document',
      title: 'Pessoa',
      fields: [
        {
          name: 'nomeCompleto',
          title: 'Nome Completo',
          type: 'string'
        },
        {
          name: 'input_image',
          title: 'Foto',
          type: 'image'
        },
        {
          name: 'cargo',
          title: 'Cargo do Membro',
          type: 'string'
        }
      ]
  }

  //Valid types are: pessoa, array, block, boolean, datetime, date, document, email, file, geopoint, image, number,
  // object, reference, crossDatasetReference, slug, span, string, telephone, text and url