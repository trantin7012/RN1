import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
// class App extends React.Component {
//   render() {
//     return (
//       <View style={{
//         flex: 1,
//         // flex:number  view trải dài toàn màn hình
//       }}>
//         <View style={{ flex: 3, backgroundColor: 'red' }}></View>
//         <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
//         <View style={{ flex: 1, backgroundColor: 'green' }}></View>
//         <View style={{ flex: 1, backgroundColor: 'orange' }}></View>
//         <View style={{ flex: 1, backgroundColor: 'grey' }}></View>
//         <View style={{ flex: 1, backgroundColor: 'white' }}></View>


//       </View>
//     );
//   }
// }

// const App = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Demo Style</Text>
//       <View style={styles.box} />
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   box:{
//     height:200,
//     width:200,
//     backgroundColor:'orange',
//   }
// })

// const App = () => {
//   return (
//     <View style={styles.container}>
//       {/* <View style={styles.Horizon}> */}
//         <View style={[styles.box, styles.colorBox1]}>
//           <View>
//             <Text style={{}}>Purple</Text>
//           </View>
//         </View>
//         <View style={[styles.box, styles.colorBox2]} />
//       {/* </View> */}

//       <View style={[styles.box, styles.colorBox3]} />
//       <View style={[styles.box, styles.colorBox4]} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // paddingTop: 50,
//     // paddingBottom: 50,
//     paddingVertical: 50,
//     // paddingLeft: 20,
//     // paddingRight: 20,
//     paddingHorizontal: 20,
//   },
//   Horizon: {
//     flex: 2,
//     // flexDirection: 'row',
//   },
//   box: {
//     flex: 1,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   colorBox1: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#C9C9FF',
//     // marginRight: 10,
//   },
//   colorBox2: {
//     backgroundColor: '#3D85C6',
//   },
//   colorBox3: {
//     backgroundColor: '#96CC96',
//   },
//   colorBox4: {
//     backgroundColor: '#F4B940',
//   },
// });
// export default App;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.colorGreen]}>
        <Text >Green</Text>
        <View style={[styles.box, styles.colorYellow]}>
          <Text>Yellow</Text>
        </View>
        <View style={[styles.box, styles.colorYellow]}>
          <Text>Yellow</Text>
        </View>
      </View>
      <View style={[styles.box, styles.colorPurple]}>
        <Text>Purple</Text>
        <View style={styles.Horizon}>
        <View style={[styles.box, styles.colorBlue]}></View>
        </View>
        <View style={styles.Horizon}>
        <View style={[styles.box, styles.colorBlue]}></View>
        <View style={[styles.box, styles.colorBlue]}></View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  box: {
    flex: 1,
    borderRadius: 20,

  },
    Horizon: {
    flex: 4,
    flexDirection: 'row',
  },

  colorGreen: {
    backgroundColor: '#A1c99A',
    marginBottom: 20,
  },
  colorPurple: {
    backgroundColor: '#c8c8fA'
  },
  colorYellow: {
    backgroundColor: '#ffffc2',
    marginVertical: 40,

    marginHorizontal: 20,

  },
  colorBlue: {
    backgroundColor: '#4f82c0',
    marginVertical: 20,

    marginHorizontal: 20,
    
  }

})
export default App;
