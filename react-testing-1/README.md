# Testing

- npm install enzyme
- npm install an adapter, for react 17 there is only @wojtekmaj/enzyme-adapter-react-17
- npm install babel-plugin-react-remove-properties
  - npm run eject
  - "babel": {
    "env": {
    "production": {
    "plugins": [
    ["react-remove-properties", {"properties": ["data-test"]}]
    ]
    }
    },
    "presets": [
    "react-app"
    ]
    }
  - npm run build will now remove the properties
