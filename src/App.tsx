import React from 'react';

type Props = {};

type State = {
  pressedKey: string,
};

export class App extends React.Component<Props, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlerKeyUp);
  }

  handlerKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey ? `The last pressed key is [${pressedKey}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}