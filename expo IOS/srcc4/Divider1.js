import * as React from 'react';
import { FlatList } from 'react-native';
import { Divider, List} from 'react-native-paper';

const items = ['Apple', 'Banana', 'Coconut', 'Lemon', 'Mango', 'Peach'];

const Divider1 = () => {

  return (
    <FlatList
      renderItem={({ item }) => <List.Item title={item} />}
      keyExtractor={item => item}
      ItemSeparatorComponent={Divider}
      data={items}
    />
  );
};

export default Divider1;