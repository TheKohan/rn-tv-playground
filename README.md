# React Native tvOS with Horizon OS support

This repo is a PoC on how to add Horizon OS support to your existing rn-tvOS app.

#### Running the app

- For TV development:

```sh
yarn
yarn prebuild:tv # Executes clean Expo prebuild with TV modifications
yarn ios # Build and run for Apple TV
yarn android # Build for Android TV
```

- For Quest:

```sh
yarn
yarn prebuild # Executes Expo prebuild with no TV modifications
yarn quest # Build and run for iOS
```

#### Notable modifications to support HorizonOS

- added `expo-horizon-os` package + plugin that add aditional flavor for building android and some utilities
- navigation on TV is handled by `TVFocusGuideView`, on Quest it is handled simmilar to web by utilizing `onHoverIn`
- different `Pressable` component for both platforms (seems like `react-native-gesture-handler` `Pressable` is not working with `tvOS`)
- additional custom non-header `back button` in UI for more clear feedback on Quest.


#### Research notes

- Some prohibited permissions for Spatial Apps (unnecessary or unable to be used due to hardware differences)
Obvious design differences (bigger buttons may be needed as well as properly scalable fonts, resizing windows)
- No system back button when using hand tracking (keep in mind)
- [No google services](https://developers.meta.com/horizon/documentation/android-apps/unsupported-dependencies) - but there are some forks of expo-location/ expo-notifications that use Meta services conditionally when running on Horizon OS.
- different UI/UX patterns, most notably the need to handle `hover` state (more about it [here](https://www.callstack.com/blog/mobile-vs-vr-key-differences-in-features-ui-and-ux))

| HorizonOS | AndroidTV |
|-----------|-----------|
| [<video alt="HorizonOS Video" src="./assets/videos/1e0f6d28181c4d0990b91e559527af0b.MP4" width="400"/>](./asset/videos/horizon.mp4) | [<video alt="AndroidTV Video" src="./assets/videos/IMG_2937.MOV" width="400"/>](./asset/videos/androidtv.mp4) |

*Click a thumbnail to watch the video demo.*


