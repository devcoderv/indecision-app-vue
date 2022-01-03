import {shallowMount} from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
  

  test('debe de hacer match con el snapshot', () => {
    
    // const wrapper = shallowMount(Counter)
    
    // expect(wrapper.html()).toMatchSnapshot()
    
    const wrapper = shallowMount(Counter)

    const h2Value = wrapper.find('h1').text()

    expect(h2Value).toBe('Counter')
  
  
  })

  test('El valor por defecto debe de ser 100 en el ultimo p', () => {
    
    // const wrapper = shallowMount(Counter)
    
    // expect(wrapper.html()).toMatchSnapshot()
    
    const wrapper = shallowMount(Counter)

    const value = wrapper.find('[data-testid="counter"]').text()

    expect(value).toBe('100')
  
  
  })
  


})
