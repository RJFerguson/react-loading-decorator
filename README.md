# React loading decorator

A small library that decorates the React render method to simplify loading handling and includes a customizeable loader

## Installation

`npm install react-loading-decorator`

## Usage

```javascript
import { loadingManager } from 'react-loading-decorator'

class App extends React.Component {
...
...
...
  @loadingManager()
  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <div>{data.deeply.nested.title}</div>
        <div>{data.body}</div>
      </React.Fragment>
    );
  }
}
```

The loading manager excepts styling props `{ size: <string or int>, color: <string>, duration: <string or int> }`

default props are `{ size: 10, color: "black", duration: 1.1 }`

## Tests

`npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
