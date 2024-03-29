import Highlight, { HighlightProps } from '.'
import { render as renderWithTheme, screen } from '../../utils/test-utils'
import * as S from './styles'

const props: HighlightProps = {
  title: 'Heading 2',
  subtitle: 'Heading 3',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-img.jpg',
  floatImage: '/img/red-dead-float.jpg'
}

describe('<Highlight />', () => {
  it('should render the heading and button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(screen.getByText(/heading 2/i)).toBeInTheDocument()
    expect(screen.getByText(/heading 3/i)).toBeInTheDocument()
    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/rdr2')
  })

  // it('should render background image', () => {
  //   const { container } = renderWithTheme(<Highlight {...props} />)
  // expect(container.firstChild).toHaveStyle({ backgroundImage: `url(${props.backgroundImage})` })
  // })

  it('should render the heading and button', () => {
    renderWithTheme(<Highlight {...props} />)
    expect(screen.getAllByRole('img', { name: `${props.title}` })[0]).toHaveAttribute('src')
  })

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)
    expect(container.firstChild).toHaveStyleRule('grid-template-areas', "'floatimage content'")
    expect(container.firstChild).toHaveStyleRule('text-align', 'right', { modifier: `${S.Content}` })
  })

  it('should render align left if is informed', () => {
    const { container } = renderWithTheme(<Highlight alignment="left" {...props} />)
    expect(container.firstChild).toHaveStyleRule('grid-template-areas', "'content floatimage'")
    expect(container.firstChild).toHaveStyleRule('text-align', 'left', { modifier: `${S.Content}` })
  })
})
