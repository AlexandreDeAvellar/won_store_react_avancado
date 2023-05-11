import { Grid } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

describe('<Grid />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Grid />)
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        margin: 1.6rem 0;
        grid-template-columns: repeat(auto-fill,minmax(20rem,1fr));
        gap: 1.6rem;
      }

      <div
        class="c0"
      />
    `)
  })
})
