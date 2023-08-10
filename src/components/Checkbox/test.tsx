import { waitFor } from '@testing-library/react'
import Checkbox, { CheckboxProps } from '.'
import { render as renderWithTheme, screen } from '../../utils/test-utils'
import theme from '../../styles/theme'
import { userEvent } from '@storybook/testing-library'

const props: CheckboxProps = {
  label: 'checkbox label',
  labelFor: 'check'
}

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox {...props} />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    renderWithTheme(<Checkbox />)
    expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(<Checkbox {...props} labelColor="black" />)
    expect(screen.getByText(props.label!)).toHaveStyle({ color: theme.colors.black })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox {...props} onCheck={onCheck} />)
    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1))
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox {...props} onCheck={onCheck} isChecked />)
    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1))
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible with tab', async () => {
    renderWithTheme(<Checkbox {...props} />)
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByRole('checkbox')).toHaveFocus()
  })
})
