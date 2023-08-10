import { render as renderWithTheme, screen } from '../../utils/test-utils'
import Heading from '.'

describe('<Heading />', () => {
  it('should render white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule('width', '5rem', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineLeft lineBottom>
        Won Games
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineLeft lineBottom lineColor="secondary">
        Won Games
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)
    expect(screen.getByText(/won games/i)).toHaveStyle({
      'font-size': '1rem'
    })
  })

  it('should render a heading with a normal size', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByText(/won games/i)).toHaveStyle({
      'font-size': '2rem'
    })
  })

  it('should render a small heading with a small line bottom', () => {
    renderWithTheme(
      <Heading lineBottom size="small">
        Won Games
      </Heading>
    )
    expect(screen.getByText(/won games/i)).toHaveStyleRule('width', '2.5rem', {
      modifier: '::after'
    })
  })
})
