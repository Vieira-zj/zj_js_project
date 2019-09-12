const RPC = {
  template: '#rpc-template',
  props: ['ds'],
  data () {
    return {
      responseValue: '7',
      requestValue: '3',
      displayResponse: '-'
    }
  },
  created () {
    this.rpc = this.ds.rpc
    this.rpc.provide('multiply-number', (data, response) => {
      response.send(data.value * parseFloat(this.responseValue))
    })
  },
  methods: {
    handleClick () {
      const data = {
        value: parseFloat(this.requestValue)
      }
      this.rpc.make('multiply-number', data, (err, resp) => {
        this.displayResponse = resp || err.toString()
      })
    }
  }
}