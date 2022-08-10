# React Auto Growing Input

A text input component for React which grows with content

## Demo

[https://codesandbox.io/s/react-auto-growing-input-i3hspx](https://codesandbox.io/s/react-auto-growing-input-i3hspx)

## Installation

```bash
npm install --save react-auto-growing-input
```

## Usage

```jsx
import React from 'react';
import ReactAutoGrowingInput from 'react-auto-growing-input';

const App = () => (
  <ReactAutoGrowingInput 
    size={4} 
    style={{ borderWidth: 1, borderStyle: 'solid' }}
    onChange={(event) => console.log(event.target.value)}
    />
);
```

## Props
it inherits all props of input

size: number, default: 4
