import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';
import useRipple from './useRipple';

jest.mock('./useRipple');

describe('Button UI component', function () {
  let fn = jest.fn();
  const stateIsTrue = true;
  const user = userEvent.setup();

  beforeEach(() => {
    fn = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
    fn.mockClear();
  });

  (useRipple as jest.Mock).mockReturnValue({
    rippleEffects: [],
    addRippleEffect: fn,
    removeRippleEffect: fn,
  });

  // Test that the component renders:
  it('should render the component successfully', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  // Test the `aria-label` prop:
  it('can set an aria-label', () => {
    render(<Button aria-label={'testAriaLabel'} />);
    const button = screen.getByLabelText('testAriaLabel');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'testAriaLabel');
  });

  // Test the `color` prop:
  it('can change the color', () => {
    const colorValues: (
      | 'inherit'
      | 'primary'
      | 'secondary'
      | 'success'
      | 'error'
      | 'info'
      | 'warning'
    )[] = ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'];
    for (const color of colorValues) {
      render(<Button aria-label={'testAriaLabel'} color={color} />);
      const buttons = screen.getAllByRole('button');
      buttons.forEach((button) => {
        expect(button).toHaveAttribute('aria-label', 'testAriaLabel');
        const expectedColor =
          color === 'inherit' ? 'bg-[#E0E0E0]' : `bg-[#${color === 'primary' ? '1976D2' : color}]`;
        expect(button).toHaveStyle(`backgroundColor: ${expectedColor};`);
      });
    }
  });

  // Test the `disabled` prop:
  it('should not be disabled by default', () => {
    const state = false;
    render(<Button disabled={state} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  it('can be disabled', () => {
    render(<Button disabled={stateIsTrue} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('cannot be interfaced with if disabled', async () => {
    render(<Button disabled={stateIsTrue} onClick={fn} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    await user.click(button);
    await user.click(document.body);
    await user.tab({ shift: false });
    expect(fn).toHaveBeenCalledTimes(0);
  });

  // Test the `id` prop:
  it('can set an id', () => {
    render(<Button id={'testId'} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('id', 'testId');
  });

  // Test the `onMouseDown` prop:
  it('Should not fire onMouseDown upon initial page load', () => {
    render(<Button onMouseDown={fn} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(fn).toHaveBeenCalledTimes(0);
  });

  it('can fire onMouseDown', async () => {
    render(<Button onMouseDown={fn} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  // Test the `onClick` prop:
  it('Should not fire onClick upon initial page load', () => {
    render(<Button onClick={fn} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(fn).toHaveBeenCalledTimes(0);
  });

  it('can fire onClick', async () => {
    render(<Button onClick={fn} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should trigger a ripple effect after a user left-clicks the button, firing onClick', async () => {
    render(<Button onClick={fn} />);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(fn).toHaveBeenCalled();
  });

  // Test the `onMouseUp` prop:
  it('Should not fire onMouseUp upon initial page load', () => {
    render(<Button onMouseUp={fn} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(fn).toHaveBeenCalledTimes(0);
  });

  it('should fire onMouseUp after onMouseDown and onClick has done so', async () => {
    render(<Button onMouseDown={fn} onClick={fn} onMouseUp={fn} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    /* Fire the `onMouseDown`
     event
     after a user left-clicks the button and then the `onClick`'s after a user releases it: */
    await user.click(button);
    expect(fn).toHaveBeenCalledTimes(2);

    /* Fire the `onMouseUp`
     event
     after a user left-clicks the button
     while their cursor is still within the button's boundaries */
    fireEvent.mouseUp(button);
    expect(fn).toHaveBeenCalledTimes(3);
  });

  // Test the `onMouseLeave` prop:
  it('should not fire onMouseLeave upon initial page load', () => {
    render(<Button onMouseLeave={fn} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(fn).toHaveBeenCalledTimes(0);
  });

  it('should fire onMouseLeave after onMouseDown, onClick, and onMouseUp has done so', async () => {
    render(<Button onMouseDown={fn} onClick={fn} onMouseUp={fn} onMouseLeave={fn} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    /* Fire the `onMouseDown`
     event
     after a user left-clicks the button and then the `onClick`'s after a user releases it: */
    await user.click(button);
    expect(fn).toHaveBeenCalledTimes(2);

    /* Fire the `onMouseUp`
     event
     after a user left-clicks the button
     while their cursor is still within the button's boundaries */
    fireEvent.mouseUp(button);
    expect(fn).toHaveBeenCalledTimes(3);

    // Fire the `onMouseLeave` event after a user's cursor leaves the boundary of the button:
    await user.unhover(button);
    expect(fn).toHaveBeenCalledTimes(4);
  });

  // Test the `ref` prop:
  it('can set a ref', () => {
    render(<Button ref={fn} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  // Test the `size` prop:
  it('can change the size', () => {
    const sizeValues: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large'];
    for (const size of sizeValues) {
      render(<Button size={size} />);
      const buttons = screen.queryAllByRole('button');
      buttons.forEach((button) => {
        expect(button).toBeInTheDocument();
      });
    }
  });

  // Test the `type` prop:
  it('can set a type', () => {
    const typeValues: ('submit' | 'reset' | 'button')[] = ['submit', 'reset', 'button'];
    for (const type of typeValues) {
      render(<Button type={type} />);
      const buttons: HTMLButtonElement[] = screen.queryAllByRole('button');
      const filteredButtons = buttons.filter((button) => button.type === type);
      filteredButtons.forEach((button) => {
        expect(button).toBeInTheDocument();
        expect(button.type).toBe(type);
      });
    }
  });

  // Test the `value` prop:
  it('can set a value', () => {
    render(<Button onClick={fn} value={'testValue'} />);
    const button: HTMLButtonElement = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.value).toBe('testValue');
    expect(fn).not.toHaveBeenCalled();
  });
});
