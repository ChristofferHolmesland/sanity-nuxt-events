export default {
  type: 'document',
  name: 'box',
  title: 'Box',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'name2',
      title: 'Name2',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'name',
    }
  }
}
