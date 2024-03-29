import { render as renderWithTheme, screen } from '../../utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render logo with id passed', () => {
    const { container } = renderWithTheme(<Logo id="new_id" />)
    expect(container.querySelector('#paint_linear_new_id')).toBeInTheDocument()
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a big logo', () => {
    renderWithTheme(<Logo color="black" size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo without text if hidenOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule('width', '5.8rem', { media: '(max-width: 768px)' })
  })
})
