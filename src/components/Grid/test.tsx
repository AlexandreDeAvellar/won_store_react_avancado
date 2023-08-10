import { Grid } from '.'
import { render as renderWithTheme } from '../../utils/test-utils'

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
