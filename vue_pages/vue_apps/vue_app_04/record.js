const Record = {
  template: '#record-template',
  props: ['ds'],
  data () {
    return {
      firstname: '',
      lastname: ''
    }
  },
  created () {
    this.record = this.ds.record.getRecord('test/johndoe')
    this.record.subscribe(values => {
      this.firstname = values.firstname
      this.lastname = values.lastname
    })
  },
  methods: {
    handleFirstNameUpdate () {
      this.record.set('firstname', this.firstname)
    },
    handleLastNameUpdate () {
      this.record.set('lastname', this.lastname)
    }
  }
}