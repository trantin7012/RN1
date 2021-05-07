import React from 'react';
// import Layout from './src/components/Buoi4/index'
// import Touched from './src/components/Buoi5/Touched'
// import RenderWithState from './src/components/Buoi5/RenderWithState'
import RenderIcon from './src/components/Buoi5/RenderIcon'
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

const App = () => <RenderIcon/>
{/* <RenderWithState/> */}
{/* <Touched/> */}

{/* <Layout/> */}


export default App;

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.box, styles.colorGreen]}>
//         <Text >Green</Text>
//         <View style={[styles.box, styles.colorYellow]}>
//           <Text>Yellow</Text>
//         </View>
//         <View style={[styles.box, styles.colorYellow]}>
//           <Text>Yellow</Text>
//         </View>
//       </View>
//       <View style={[styles.box, styles.colorPurple]}>
//         <Text>Purple</Text>
//         <View style={styles.Horizon}>
//         <View style={[styles.box, styles.colorBlue]}></View>
//         <View style={[styles.box, styles.colorBlue]}></View>
//         </View>
//         <View style={styles.Horizon}>
//         <View style={[styles.box, styles.colorBlue]}></View>
//         <View style={[styles.box, styles.colorBlue]}></View>
//         </View>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//   },
//   box: {
//     flex: 1,
//     borderRadius: 20,

//   },
//     Horizon: {
//     flex: 4,
//     flexDirection: 'row',
//   },

//   colorGreen: {
//     backgroundColor: '#A1c99A',
//     marginBottom: 20,
//   },
//   colorPurple: {
//     backgroundColor: '#c8c8fA'
//   },
//   colorYellow: {
//     backgroundColor: '#ffffc2',
//     marginVertical: 40,

//     marginHorizontal: 20,

//   },
//   colorBlue: {
//     backgroundColor: '#4f82c0',
//     marginBottom: 40,

//     marginHorizontal: 20,
    
//   }

// })
// export default App;
