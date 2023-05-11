import { renderWithTheme } from '../../utils/tests/helpers'

import { Divider } from '.'

describe('<Divider />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Divider />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin: 2.8rem auto 1.6rem;
        height: 0.1rem;
        background: rgba(181,181,181,0.3);
        border: 0;
      }

      @media (min-width:768px) {
        .c0 {
          margin: calc(2.8rem * 2.5) auto 2.8rem;
        }
      }

      <hr
        class="c0"
      />
    `)
  })
})
