# React Cardboard

React component for splitting the screen and duplicating each half.

[Demo](https://codedbyandrew.github.io/React-Cardboard/demo/index.html)

## Components

#### <ReactCardboard.FullScreenToggle>

Button which toggles fullscreen.

Props:

- onEnter: event handler for entering fullscreen
- onExit: event handler for exiting fullscreen
- lockOrientation: lock orientation to landscape when fullscreen (default: true)
- preventSleep: keep screen alive when fullscreen (default: true)

#### <ReactCardboard.VRContainer>

Container which duplicates children for each lense of the cardboard viewer.

Props:

- divider: Add visible divider to middle of screen. Useful for aligning phone in cardboard device.
- viewerWidth: Width of entire viewer. Accepts any CSS width value. (default: 100%)
- children: component to be duplicated across both lenses.

## Usage

```jsx
<ReactCardboard.FullScreenToggle />
<ReactCardboard.VRContainer divider viewerWidth="600px">
  <h1> React Cardboard</h1>
</ReactCardboard.VRContainer>
```
