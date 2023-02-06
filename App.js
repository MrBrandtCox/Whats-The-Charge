import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Dimensions, TouchableOpacity, Image, TextInput, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"lightgrey"}}>
      <View style={{flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "black", fontSize: 50, fontFamily: "Helvetica", fontWeight: 'bold', bottom: 100}}>Select Service</Text>
      <View style={{height: 3, width: "60%", backgroundColor: "black", position: "absolute", bottom: 375}}></View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Sewer')}
        style={{
          justifyContent: 'center',
          height: 100,
          width: 700,
          backgroundColor: "seagreen",
          borderWidth: 3,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          bottom: 14,
        }}
      >
        <Text style={{textAlignVertical: "top",textAlign: "center", color: "white", fontSize: 60, fontFamily: "Helvetica", fontWeight: 'light',}}>Sewer
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('InteriorWater')}
        style={{
          justifyContent: 'center',
          height: 100,
          width: 700,
          backgroundColor: "seagreen",
          borderWidth: 3,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
      >
        <Text style={{textAlignVertical: "center",textAlign: "center", color: "white", fontSize: 60, fontFamily: "Helvetica", fontWeight: 'light', }}>Interior Water
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ExteriorWater')}
        style={{
          justifyContent: 'center',
          height: 100,
          width: 700,
          backgroundColor: "seagreen",
          borderWidth: 3,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          top: 14,
        }}>
          
        <Text style={{textAlignVertical: "center",textAlign: "center", color: "white", fontSize: 60, fontFamily: "Helvetica", fontWeight: 'light',}}>Exterior Water 
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

function Sewer({}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:"lightgrey"}}>
      <View style={{justifyContent: 'center',flexDirection: "row"}}>
        <Text style={{textAlignVertical: "center",textAlign: "center", color: "Black", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> Days to complete:</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onSubmitEditing={{}} placeholder="Enter Number" style={{textAlignVertical: "center",textAlign: "center",backgroundColor: "white",      
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "black",
          bottom: 25,
          left: 25,
          height: 50,
          width: 100,
          }}>
          </TextInput>
      </View> 

      <View style={{justifyContent: 'center', flexDirection: "row"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "Black", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> People needed on the job:</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onSubmitEditing={{}} placeholder="Enter Number" style={{textAlignVertical: "center",textAlign: "center",backgroundColor: "white",      
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "black",
          bottom: 25,
          left: 25,
          height: 50,
          width: 100,
          }}>
          </TextInput>
      </View>
      
      <View style={{justifyContent: 'center', flexDirection: "row"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "Black", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> How many feet deep:</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onSubmitEditing={{}} placeholder="Enter Number" style={{textAlignVertical: "center",textAlign: "center",backgroundColor: "white",      
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "black",
          bottom: 25,
          left: 25,
          height: 50,
          width: 100,
          }}>
          </TextInput>
      </View>
      
      <View style={{justifyContent: 'center', flexDirection: "column"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "Black", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> Tractor Needed:</Text>
      <View style={{flexDirection: "row", justifyContent:'space-evenly'}}>
      <TouchableOpacity style={{height: 50, width: "30%", backgroundColor: "seagreen", borderWidth: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          }}><Text style={{textAlignVertical: "center",textAlign: "center", color: "Black", fontSize: 30, fontFamily: "Helvetica", fontWeight: 'light'}}>Yes</Text></TouchableOpacity>
      <TouchableOpacity style={{height: 50, width: "30%", backgroundColor: "seagreen", borderWidth: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          }}><Text style={{textAlignVertical: "center",textAlign: "center", color: "Black", fontSize: 30, fontFamily: "Helvetica", fontWeight: 'light'}}>No</Text></TouchableOpacity>
      </View>
      </View>
      
      <View style={{justifyContent: 'center', flexDirection: "column"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "Black", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> Cabinents to be moved:</Text>
      <View style={{flexDirection: "row", justifyContent:'space-evenly'}}>
      <TouchableOpacity style={{height: 50, width: "30%", backgroundColor: "seagreen", borderWidth: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          }}><Text style={{textAlignVertical: "center",textAlign: "center", color: "Black", fontSize: 30, fontFamily: "Helvetica", fontWeight: 'light'}}>Yes</Text></TouchableOpacity>
      <TouchableOpacity style={{height: 50, width: "30%", backgroundColor: "seagreen", borderWidth: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          }}><Text style={{textAlignVertical: "center",textAlign: "center", color: "Black", fontSize: 30, fontFamily: "Helvetica", fontWeight: 'light'}}>No</Text></TouchableOpacity>
      </View>
      </View>

      <View style={{justifyContent: 'center', flexDirection: "row"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "Black", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> How many feet of concrete:</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onSubmitEditing={{}} placeholder="Enter Number" style={{textAlignVertical: "center",textAlign: "center",backgroundColor: "white",      
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "black",
          bottom: 25,
          left: 25,
          height: 50,
          width: 100,
          }}>
          </TextInput>
      </View>

      <TouchableOpacity style={{height: 50, width: "30%", backgroundColor: "seagreen", borderWidth: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          }}>
            <Text style={{textAlignVertical: "center",textAlign: "center", color: "white", fontSize: 40, fontFamily: "Helvetica", fontWeight: 'light',}}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
}

function InteriorWater({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"lightgrey"}}>
      <View style={{flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "black", fontSize: 50, fontFamily: "Helvetica", fontWeight: 'bold', bottom: 100}}>Select Service</Text>
      <View style={{height: 3, width: "60%", backgroundColor: "black", position: "absolute", bottom: 375}}></View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Sewer')}
        style={{
          justifyContent: 'center',
          height: 100,
          width: 700,
          backgroundColor: "dodgerblue",
          borderWidth: 3,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          bottom: 14,
        }}
      >
        <Text style={{textAlignVertical: "top",textAlign: "center", color: "white", fontSize: 60, fontFamily: "Helvetica", fontWeight: 'light',}}>Sewer
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('InteriorWater')}
        style={{
          justifyContent: 'center',
          height: 100,
          width: 700,
          backgroundColor: "dodgerblue",
          borderWidth: 3,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
      >
        <Text style={{textAlignVertical: "center",textAlign: "center", color: "white", fontSize: 60, fontFamily: "Helvetica", fontWeight: 'light', }}>Interior Water
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ExteriorWater')}
        style={{
          justifyContent: 'center',
          height: 100,
          width: 700,
          backgroundColor: "dodgerblue",
          borderWidth: 3,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          top: 14,
        }}>
          
        <Text style={{textAlignVertical: "center",textAlign: "center", color: "white", fontSize: 60, fontFamily: "Helvetica", fontWeight: 'light',}}>Exterior Water 
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

function ExteriorWater({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"lightgrey"}}>
      <View style={{flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "black", fontSize: 50, fontFamily: "Helvetica", fontWeight: 'bold', bottom: 100}}>Select Service</Text>
      <View style={{height: 3, width: "60%", backgroundColor: "black", position: "absolute", bottom: 375}}></View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Sewer')}
        style={{
          justifyContent: 'center',
          height: 100,
          width: 700,
          backgroundColor: "dodgerblue",
          borderWidth: 3,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          bottom: 14,
        }}
      >
        <Text style={{textAlignVertical: "top",textAlign: "center", color: "white", fontSize: 60, fontFamily: "Helvetica", fontWeight: 'light',}}>Sewer
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('InteriorWater')}
        style={{
          justifyContent: 'center',
          height: 100,
          width: 700,
          backgroundColor: "dodgerblue",
          borderWidth: 3,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
      >
        <Text style={{textAlignVertical: "center",textAlign: "center", color: "white", fontSize: 60, fontFamily: "Helvetica", fontWeight: 'light', }}>Interior Water
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ExteriorWater')}
        style={{
          justifyContent: 'center',
          height: 100,
          width: 700,
          backgroundColor: "dodgerblue",
          borderWidth: 3,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          top: 14,
        }}>
          
        <Text style={{textAlignVertical: "center",textAlign: "center", color: "white", fontSize: 60, fontFamily: "Helvetica", fontWeight: 'light',}}>Exterior Water 
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{ title: 'Southern Sewer Services',  
  headerStyle:{
    backgroundColor: "white"
  },
  headerTintColor: 'black',
  headerTitleStyle: {
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            fontSize: 40
          },
  }}
/>
<Stack.Screen name="Sewer" component={Sewer} options={{ title: 'Sewer',  
  headerStyle:{
    backgroundColor: "white"
  },
  headerTintColor: 'black',
  headerTitleStyle: {
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            fontSize: 40
          },
  }}/>
<Stack.Screen name="InteriorWater" component={InteriorWater} options={{ title: 'Interior Water',  
  headerStyle:{
    backgroundColor: "white"
  },
  headerTintColor: 'black',
  headerTitleStyle: {
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            fontSize: 40
          },
  }}/>
<Stack.Screen 
name="ExteriorWater" 
component={ExteriorWater} 
options={{ title: 'Exterior Water',  
headerStyle:{
backgroundColor: "white"
},
headerTintColor: 'black',
headerTitleStyle: {
fontFamily: 'Helvetica',
fontWeight: 'bold',
fontSize: 40
          },
  }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;