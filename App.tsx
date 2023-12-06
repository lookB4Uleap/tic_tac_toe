import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Box from './components/Box';
import { scale } from './utils/scale';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import { DIMENSIONS } from './utils/constants';

const initialize2DArray = (w: number, h: number, val?: number) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));

export default function App() {
  const index = [[0,1,2], [3,4,5], [6,7,8]];
  const [grid, setGrid] = useState(new Array(DIMENSIONS ** 2).fill(null));
  const [player, setPlayer] = useState(true);

  useEffect(() => {
    console.log('[App] Grid : ', grid);
  }, [grid])
  
  const onMove = (index: number) => {
    console.log('[App] Box : ', index);
    if (!player)
      return;
    grid[index] = 'O'
    console.log(grid);
    setGrid([...grid]);
    setPlayer(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerTitle}>TiC</Text>
      </View> */}
      <View style={styles.content}>
      {
        index.map((el) => {
          return (
            <View style={styles.row} key={el[0]}>
              {
                el.map((ele) => 
                  <Box 
                    key={ele}
                    state={grid[ele]}
                    onPress={() => onMove(ele)} 
                  />)
              }
            </View>
          )
        })
      }
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: scale(10)
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  headerTitle: {
    fontSize: scale(50),
    color: '#0f3f0f'
  },
  content: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: scale(10)
  },
  row: {
    flexDirection: 'row'
  }
});
