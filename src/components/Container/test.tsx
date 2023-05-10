import { renderWithTheme } from '../../utils/tests/helpers'
import { Container } from '.'
import theme from '../../styles/theme'

describe('<Container />', () => {
  it('should render the Container correctly', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    )
    // se max-width é o mesmo que o do tema
    expect(container.firstChild).toHaveStyle({ maxWidth: `${theme.grid.container}` })

    // inline snapshot - criar um child para o Container passando um span com Won Games
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem * 2);
        padding-right: calc(3.2rem * 2);
      }

      <div
        class="c0"
      >
        <span>
          Won Games
        </span>
      </div>
    `)
  })
})
