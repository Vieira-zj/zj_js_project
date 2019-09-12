const Events = {
  template: '#events-template',
  props: ['ds'],
  data () {
    return {
      eventsReceived: [],
      value: ''
    }
  },
  created () {
    this.event = this.ds.event
    this.event.subscribe('test-event', value => {
      this.eventsReceived.push(value)
    })
  },
  methods: {
    handleClick () {
      this.event.emit('test-event', this.value)
    }
  }
}