# React Native Modal WalkThrough
A modal to walk through different steps in react native

## Installation
Install with yarn or npm
```
yarn add react-native-modal-walk-through
```

Import the lib
```
import ModalWalkThrough from 'react-native-modal-walk-through';
```

Add scenes
```
<ModalWalkThrough
  visible={true}
>
  {['scene1', 'scene2'].map(scene => (
    <View>
      <Text>{scene}</Text>
    </View>
  ))}
</ModalWalkThrough>
```

## Preview
![preview](https://media.giphy.com/media/U1rr1gjlYDh0k/giphy.gif)

## Properties
|Property |Type       |Description                     |Default value       |
|---------|-----------|--------------------------------|--------------------|
|height   |Number     |Height of the walkthrough       |40% of screen height|
|width    |Number     |Width of the walkthrough        |80% of screen width |
|onFinish |Function   |When the user went throught the entire walkthrough|  |
|onStepChange|Function |When the user swiped to another step |              |

## Methods
### goToStep (step: Number)
Go to a particular step in the walkthrough,
in case the number is bigger than the last step index, it will close the modal

### show
Show the modal

### hide
Hide the modal

[![gitcheese.com](https://s3.amazonaws.com/gitcheese-ui-master/images/badge.svg)](https://www.gitcheese.com/donate/users/5782495/repos/93313202)
