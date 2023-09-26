# react-native-icons

A collection of beautiful React Native icons.

## Installation

```
yarn add @ckbab/react-native-icons
```

This package depends on `react-native-svg` so you need to install it as well.

## Usage

```js
import Icon from "@ckbab/react-native-icons";

<Icon name="beer" />

<Icon code="beer" color="#009900" size={48} />
```

You can also define default icon props using the `IconProvider`:

```js
import { IconProvider } from "@ckbab/react-native-icons";

<IconProvider borderColor="#000" color="#ffcc00" size={24}>
  /* Rest of your code */
</IconProvider>;
```

As shown above you can pass `borderColor`, `color` and `size` as default props.

## Properties

| Name          | Type         | Default value |
| ------------- | ------------ | ------------- |
| `borderColor` | `string`     | `""`          |
| `color`       | `string`     | `#cc00ff`     |
| `name`        | `string`     | `""`          |
| `size`        | `number`     | `16`          |
| `style`       | `StyleSheet` | `{}`          |

If `borderColor` is not explicitly defined the border color will be based on the `color` prop.

## Available icons

- arrow-down
- arrow-left
- arrow-right
- arrow-up
- beer
- bus
- calendar
- cards
- chat
- check
- check-circle
- chevron-down
- chevron-left
- chevron-right
- chevron-up
- cog
- cross
- cross-circle
- email
- fist-bump
- football
- globe
- hotel
- info-circle
- lock
- menu
- more
- notification
- phone
- pin
- plane
- plus
- pot
- progress
- search
- shoe
- stadium
- star
- stats
- thumbs-down
- thumbs-up
- ticket
- time
- unlock
- user
- user-plus
- walking
- zigma
