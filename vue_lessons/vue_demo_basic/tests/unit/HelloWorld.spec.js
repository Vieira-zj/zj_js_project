import Vue from 'vue'
import {
  shallowMount
} from '@vue/test-utils'
import HelloWorld from '@/pages/page2/App.vue'

// run cmd: npm run test:unit
describe('Testing HelloWorld.vue component', () => {
  it('has a created hook', () => {
    expect(typeof HelloWorld.created).toBe('function')
  })

  it('sets the correct default data', () => {
    expect(typeof HelloWorld.data).toBe('function')
    const defaultData = HelloWorld.data()
    expect(defaultData.msg).toBe('hello!')
  })

  it('correctly sets the message when created', () => {
    const vm = new Vue(HelloWorld).$mount()
    expect(vm.msg).toBe('bye!')
    expect(vm.$el.textContent).toBe('bye!')
  })

  it('checks textcontent to Hello', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.element.textContent).toBe('bye!');
  })
})