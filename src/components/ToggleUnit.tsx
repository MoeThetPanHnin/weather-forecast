import React from 'react';

interface Props { unit: 'metric' | 'imperial'; onToggle(u: 'metric' | 'imperial'): void; }

const ToggleUnit: React.FC<Props> = ({ unit, onToggle }) => (
  // Toggles between Celsius and Fahrenheit units
  <button className="unit-toggle" onClick={() => onToggle(unit === 'metric' ? 'imperial' : 'metric')}>
    °{unit === 'metric' ? 'F' : 'C'}
  </button>
);

export default ToggleUnit;
// This component is a simple button that toggles between Celsius and Fahrenheit.
// It takes two props: `unit`, which indicates the current unit ('metric' or 'imperial'),
// and `onToggle`, which is a function to call when the button is clicked.
// The button displays the current unit and switches to the other unit when clicked.
// The component is styled with a class name of "unit-toggle".
// The button's text changes based on the current unit, displaying '°F' for metric and '°C' for imperial.
// The `onClick` event handler calls the `onToggle` function with the new unit.
// This allows the parent component to update the unit state when the button is clicked.
// The component is a functional React component that uses TypeScript for type safety.
// It uses the `Props` interface to define the expected props.
// The `unit` prop is a union type that can be either 'metric' or 'imperial',
// ensuring that only valid values are passed to the component.
// The `onToggle` prop is a function that takes a string argument and returns void.
// This ensures that the parent component provides a function that matches this signature.