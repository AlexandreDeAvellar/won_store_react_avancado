import '../../../.jest/match-media-mock'
import Home from '.'
import { render as renderWithTheme, screen } from '../../utils/test-utils'

import { homeTemplateProps } from './home-mocks'

jest.mock('../../templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))
jest.mock('../../components/Showcase', () => ({ __esModule: true, default: jest.fn(() => <div data-testId={'Mock Showcase'}></div>) }))
jest.mock('../../components/BannerSlider', () => ({ __esModule: true, default: jest.fn(() => <div data-testId={'Mock BannerSlider'}></div>) }))

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...homeTemplateProps} />)
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4)
    // expect(1).toBe(1)
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
  })
})
