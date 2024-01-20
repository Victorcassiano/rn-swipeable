import { StyleProp, ViewStyle } from 'react-native';

declare module 'rn-swipeable' {

  export interface IRnSwipeableProps {
    /**
    * swipeable content
    * default: null
    */
    children: renderable;
    /**
    * (optional) left content visible during pull action
    * default: null
    */
    leftContent: renderable;
    /**
    * (optional) left content visible during pull action
    * default: null
    *
    */
    rightContent: renderable;
    /**
    * optional) array of buttons, first being the innermost; ignored if leftContent present
    *  default: null
    */
    leftButtons: renderable[];
    /**
    * (optional) array of buttons, first being the innermost; ignored if rightContent present
    * default: null
    */
    rightButtons: renderable[];
    /**
    * (optional) minimum swipe distance to activate left action
    * default: 125
    */
    leftActionActivationDistance: number;
    /**
    * (optional) user has swiped beyond leftActionActivationDistance and released
    * default: null
    */
    onLeftActionRelease: () => void;
    /**
    * (optional) minimum swipe distance to activate right action
    * default: 125
    */
    rightActionActivationDistance: number;
    /**
    * (optional) minimum swipe distance to activate right action
    * default: null
    */
    onRightActionRelease: () => void;
    /**
    * (optional) resting visible peek of each left button after buttons are swiped open
    * default: 75
    */
    leftButtonWidth: number
    /**
    * (optional) resting visible peek of each right button after buttons are swiped open
    * default: 75
    */
    rightButtonWidth: number
    /**
    * (optional) receive swipeable component instance reference
    * default: null
    */
    onRef: () => void
    /**
    * (optional) receive swipeable pan Animated.ValueXY reference for upstream animations
    * default: null
    */
    onPanAnimatedValueRef: () => void
  }
  export default class Swipeable extends PureComponent<IRnSwipeableProps> { }
}
