declare let reports: Array<{
  id: string
  status: {
    type: 'ok' | 'error' | 'no',
    text: string
  }
  content: Array<{
    name: string
    text: string
  }>
}>
