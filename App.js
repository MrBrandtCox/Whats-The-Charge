import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Dimensions, TouchableOpacity, Image, TextInput, Pressable, Switch} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';


function MyCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}>
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#181F1C"}}>
      <View style={{flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 50, fontFamily: "Helvetica", fontWeight: 'bold', bottom: 100}}>Southern Sewer Services</Text>
      <View style={{height: 3, width: "60%", backgroundColor: "#315C2B", position: "absolute", bottom: 375}}></View>
      
      
      <TouchableOpacity
        onPress={() => navigation.navigate('Sewer')}
        style={{
          justifyContent: 'center',
          height: 100,
          width: 700,
          backgroundColor: "#315C2B",
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
        onPress={() => navigation.navigate('ExteriorWater')}
        style={{
          justifyContent: 'center',
          height: 100,
          width: 700,
          backgroundColor: "#315C2B",
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
        <Text style={{textAlignVertical: "center",textAlign: "center", color: "white", fontSize: 60, fontFamily: "Helvetica", fontWeight: 'light', }}>Exterior Water
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('InteriorWater')}
        style={{
          justifyContent: 'center',
          height: 100,
          width: 700,
          backgroundColor: "#315C2B",
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
          
        <Text style={{textAlignVertical: "center",textAlign: "center", color: "white", fontSize: 60, fontFamily: "Helvetica", fontWeight: 'light',}}>Interior Water 
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}
function Sewer({navigation}) { 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:"#181F1C", alignContent: "center"}}>
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly',}}>
      <View style={{justifyContent: 'center',flexDirection: "row", alignItems: 'flex-start',}}>
        <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> Days to complete:</Text>
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

      <View style={{justifyContent: 'center', flexDirection: "row",}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> People needed on the job:</Text>
        <TextInput inputMode='numeric' maxLength="3" onSubmitEditing={{}} placeholder="Enter Number" style={{textAlignVertical: "center",textAlign: "center",backgroundColor: "white",      
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
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> How many feet deep:</Text>
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
      
      <View style={{justifyContent: 'center', flexDirection: "column", alignItems: "flex-start"}}>
      <View style={{flexDirection: "row", justifyContent: "center"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> Tractor Needed:</Text>
      <TouchableOpacity style={{height: 50, width: 100, backgroundColor: "#315C2B", borderWidth: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          bottom: 25,
          left: 25,
          }}>
             <MyCheckbox />
          </TouchableOpacity>
      </View>
      </View>
      
      <View style={{justifyContent: 'center', flexDirection: "column", alignItems: "flex-start"}}>
      <View style={{flexDirection: "row", justifyContent: "center"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> Do cabinents need to be moved:</Text>
      <TouchableOpacity style={{height: 50, width: 100, backgroundColor: "#315C2B", borderWidth: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          bottom: 25,
          left: 25,
          }}>
             <MyCheckbox />
          </TouchableOpacity>
      </View>
      </View>

      <View style={{justifyContent: 'center', flexDirection: "row"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> How many feet of concrete:</Text>
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
      <View style={{alignItems: 'center', justifyContent: 'space-evenly', flexDirection: "row"}}>
      <TouchableOpacity onPress={() => navigation.navigate('Calculation')} style={{height: 50, width: 400, backgroundColor: "#315C2B", borderWidth: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          left: "400%"
          }}>
            <Text style={{textAlignVertical: "center",textAlign: "center", color: "white", fontSize: 40, fontFamily: "Helvetica", fontWeight: 'light',}}>Calculate</Text>
      </TouchableOpacity>

      </View>
      </View>
    </View>
  );

  
}
function ExteriorWater({ navigation }) {
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:"#181F1C", alignContent: "center"}}>
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly',}}>
      <View style={{justifyContent: 'center',flexDirection: "row"}}>
        <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> Days to complete:</Text>
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

      <View style={{justifyContent: 'center', flexDirection: "row",}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> Number of Feet:</Text>
        <TextInput inputMode='numeric' maxLength="3" onSubmitEditing={{}} placeholder="Enter Number" style={{textAlignVertical: "center",textAlign: "center",backgroundColor: "white",      
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
  
      <View style={{justifyContent: 'center', flexDirection: "column", alignItems: "flex-start"}}>
      <View style={{flexDirection: "row", justifyContent: "center"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> Is a trencher needed:</Text>
      <TouchableOpacity style={{height: 50, width: 100, backgroundColor: "#315C2B", borderWidth: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          bottom: 25,
          left: 25,
          }}>
             <MyCheckbox />
          </TouchableOpacity>
      </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'space-evenly', flexDirection: "row"}}>
      <TouchableOpacity onPress={() => navigation.navigate('Calculation')} style={{height: 50, width: 400, backgroundColor: "#315C2B", borderWidth: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          left: "150%"
          }}>
            <Text style={{textAlignVertical: "center",textAlign: "center", color: "white", fontSize: 40, fontFamily: "Helvetica", fontWeight: 'light',}}>Calculate</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}
function InteriorWater({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:"#181F1C", alignContent: "center"}}>
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly',}}>
      <View style={{justifyContent: 'center',flexDirection: "row"}}>
        <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> Days to complete:</Text>
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

      <View style={{justifyContent: 'center', flexDirection: "row",}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> Number of bathrooms:</Text>
        <TextInput inputMode='numeric' maxLength="3" onSubmitEditing={{}} placeholder="Enter Number" style={{textAlignVertical: "center",textAlign: "center",backgroundColor: "white",      
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
  
      <View style={{justifyContent: 'center', flexDirection: "column", alignItems: "flex-start"}}>
      <View style={{flexDirection: "row", justifyContent: "center"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> Is the Home Raised at Least 2ft:</Text>
      <TouchableOpacity style={{height: 50, width: 100, backgroundColor: "#315C2B", borderWidth: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          bottom: 25,
          left: 25,
          }}>
             <MyCheckbox />
          </TouchableOpacity>
      </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'space-evenly', flexDirection: "row"}}>
      <TouchableOpacity onPress={() => navigation.navigate('Calculation')} style={{height: 50, width: 400, backgroundColor: "#315C2B", borderWidth: 3,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderColor: "black",
          shadowColor: "black",
          shadowOffset: {width: 2, height: 7},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          left: "400%"
          }}>
            <Text style={{textAlignVertical: "center",textAlign: "center", color: "white", fontSize: 40, fontFamily: "Helvetica", fontWeight: 'light',}}>Calculate</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}
function CalcScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:"#181F1C", alignContent: "center"}}>
         <View style={{alignItems: 'center', justifyContent: 'space-evenly', flexDirection: "row"}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{height: 50, width: 400, backgroundColor: "#315C2B", borderWidth: 3,
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
            <Text style={{textAlignVertical: "center",textAlign: "center", color: "white", fontSize: 40, fontFamily: "Helvetica", fontWeight: 'light',}}>Go Home</Text>
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
  options={{headerShown: false,
     title: 'Southern Sewer Services',  
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
    backgroundColor: "#315C2B"
  },
  headerTintColor: 'white',
  headerTitleStyle: {
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            fontSize: 40
          },
  }}/>
<Stack.Screen name="InteriorWater" component={InteriorWater} options={{ title: 'Interior Water',  
  headerStyle:{
    backgroundColor: "#315C2B"
  },
  headerTintColor: 'white',
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
backgroundColor: "#315C2B"
},
headerTintColor: 'white',
headerTitleStyle: {
fontFamily: 'Helvetica',
fontWeight: 'bold',
fontSize: 40
          },
  }}/>

<Stack.Screen 
name="Calculation" 
component={CalcScreen} 
options={{ 
title: 'Calculation',  
headerStyle:{
backgroundColor: "#315C2B"
},
headerTintColor: 'black',
headerTitleStyle: {
fontFamily: 'Helvetica',
fontWeight: 'bold',
fontSize: 40},
headerShown: false
  }}


  
  />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  checkboxBase: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    height: 45, 
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: '#1c3619',
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
});
