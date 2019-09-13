Vue.component('select2', {
  props: ['options', 'value'],
  template: '#select2-template',
  // 引入jquery select2组件
  mounted: function () {
    var vm = this
    $(this.$el)
      // init select2
      .select2({ data: this.options })
      .val(this.value)
      .trigger('change')
      // emit event on change (syn selected value)
      .on('change', function () {
        vm.$emit('input', this.value)
      })
  },
  watch: {
    value: function (value) {
      // update value
      $(this.$el)
        .val(value)
        .trigger('change')
    },
    options: function (options) {
      // update options
      $(this.$el)
        .empty()
        .select2({ data: options })
    }
  },
  // 消毁jquery select2组件
  destroyed: function () {
    $(this.$el)
      .off()
      .select2('destroy')
  }
})