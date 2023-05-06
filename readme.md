# React Native Kindle Sample
This project intends to a boilerplate for getting started with [`react-native-kindle`](https://github.com/lukas1h/react-native-kindle).

---
## Getting Started
### Building
```
$ git clone https://github.com/lukas1h/react-native-kindle-sample/
$ cd react-native-kindle-sample/
$ npm i 
$ npm run build
```

### Running
[KPPLauncher](https://github.com/lukas1h/KPPLauncher) is a MRPI package that allows `react-native-kindle` apps to be ran directly from the library, similer to the now unsuportted `kindlets`.

If you have [KPPLauncher](https://github.com/lukas1h/KPPLauncher) installed:
- Copy `./build/SampleApp.app` to your `documents` directory on your kindle.
- Run `SampleApp` from your library.

Otherwise:
- Copy `./build/SampleApp.app` to anywhere on your kindle.
- Run `/app/bin/KPPSimpleLauncher -h /app/tools -n DemoApp -s -j /path/to/your/build.app`

---
## Documentation and More Info.

See [`react-native-kindle`](https://github.com/lukas1h/react-native-kindle).


