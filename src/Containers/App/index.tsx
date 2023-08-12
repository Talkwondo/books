import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, StatusBar} from 'react-native';
import {getInitalScreen} from '../../Utils/storage';
import Navigator from '../Navigators/Navigator';
import {styles} from './styles';

const App = (): JSX.Element => {
  const [initialScreen, setInitalScreen] = useState<string>('');
  const [isLoaded, setLoaded] = React.useState(false);

  useEffect(() => {
    (async () => {
      const screen = await getInitalScreen();
      setInitalScreen(screen);
      setLoaded(true);
    })();
  }, []);

  if (!isLoaded) {
    //this is a problem with React-Native, since the bridge are async and when calculate token or somthing from the storage it has latancy. this can be avoid with JSI
    return null;
  }
  return (
    <View style={styles.backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <Navigator initialRoute={initialScreen} />
    </View>
  );
};

export default App;
