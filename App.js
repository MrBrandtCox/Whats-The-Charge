import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Dimensions, TouchableOpacity, Image, TextInput, Pressable, Switch} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";

var Answer;

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
  // Question 1 logic (days * $1000)
  const [totSewDay, mathSewDay] = useState('');
  const [sewDays, sDays] = useState();

  function sewDayInput(x) {
    //  if (x !== Number) {
    //   EventTarget.style={color: red,};
    //  } else {
      sDays(x)
      mathSewDay(x * 1000);
      mathSewPeople(sewPeople * 250 * x)
  };
  

  // Question 2 logic (people * 250 * days)
  const [totSewPeople, mathSewPeople] = useState('');
  const [sewPeople, sPeople] = useState();
  function sewPeopleInput(x) {
    //  if (x !== Number) {
    //   EventTarget.style={color: red,};
    //  } else {
      sPeople(x)
      mathSewPeople(x * 250 * sewDays); // This sewDays will not update unless the people needed is Reentered !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  };

  // Question 3 logic (x<3, $75)(3<x<5, $150)(x>5, $450)
  const [totSewFeet, mathSewFeet] = useState('');
  function sewFeetInput(x) {
    //  if (x !== Number) {
    //   EventTarget.style={color: red,};
    //  } else {
      if (x < 3){
        mathSewFeet(x * 75);
      } else if (x >= 3, x <= 5) {
        mathSewFeet(x * 150);
      } else if (x > 5) {
        mathSewFeet(x * 450);
      }
  };

  // Question 4 logic (if yes than sewDays * $750)
  const [totSewTrac, mathSewTrac] = useState(false);
  const sewTracToggle = () => mathSewTrac(previousState => !previousState)
  
  // function sewTracInput() {
  //   //  if (x !== Number) {
  //   //   EventTarget.style={color: red,};
  //   //  } else {}

  // Question 5 logic (if yes the flat rate to move a cabinent is $500)
  const [totSewCab, mathSewCab] = useState(false);
  const sewCabToggle = () => mathSewCab(previousState => !previousState)

  // Question 6 logic (Feet of Concrete multiply by $250)
  const [totSewConc, mathSewConc] = useState('');
  function sewConcInput(x) {
    //  if (x !== Number) {
    //   EventTarget.style={color: red,};
    //  } else {
      mathSewConc(x * 250);
  };
  
  // This is for Calculating to the calc page.
  const [totalSewer, calcSewer] = useState('');
  function sewCalculate() {
    var sewTotal = (totSewDay + totSewPeople + totSewFeet + totSewConc);
    var sewTrac;
    var sewCab;
    
    if (totSewTrac === true) {
      sewTrac = (750 * sewDays);
    } else {
      sewTrac = 0; // This will add 1 when Cabinets is selected.... and if it is not selected it will add 0... !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    };

    if (totSewCab === true) {
      sewCab = 500;
    } else {
      sewCab = 0;
    };
    
    calcSewer(sewTotal + sewTrac + sewCab);
  }

  Answer = totalSewer;

  // Question 1
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:"#181F1C", alignContent: "center"}}>
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly',}}>
      <View style={{justifyContent: 'center',flexDirection: "row", alignItems: 'flex-start',}}>
        <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> Days to complete: Math {totSewDay}</Text>
        <TextInput inputMode='numeric' keyboardType='ascii-capable-number-pad' maxLength="3" onChangeText={sewDayInput} placeholder="Enter Number" style={{textAlignVertical: "center",textAlign: "center",backgroundColor: "white",      
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
      {/* Question 2 */}
      <View style={{justifyContent: 'center', flexDirection: "row",}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> People needed on the job: Math {totSewPeople}</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={sewPeopleInput} placeholder="Enter Number" style={{textAlignVertical: "center",textAlign: "center",backgroundColor: "white",      
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
      {/* Question 3 */}
      <View style={{justifyContent: 'center', flexDirection: "row"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> How many feet deep: Math {totSewFeet}</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={sewFeetInput} placeholder="Enter Number" style={{textAlignVertical: "center",textAlign: "center",backgroundColor: "white",      
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
      {/* Question 4 */}
      <View style={{justifyContent: 'center', flexDirection: "column", alignItems: "flex-start"}}>
      <View style={{flexDirection: "row", justifyContent: "center"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> Tractor Needed: Math {totSewTrac ? "yes" : "no" }{totSewTrac}</Text>
      <Switch 
        style ={{transform:[{ scaleX:1.5 }, { scaleY: 1.5}], bottom: 15, left: 30, }}
        trackColor={{false: '#767577', true: '#f4f3f4'}}
        thumbColor={totSewTrac ? '#315C2B' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={sewTracToggle}
        value={totSewTrac}
      />
          {/* <MyCheckbox /> */}
      </View>
      </View>
      {/* Question 5 */}
      <View style={{justifyContent: 'center', flexDirection: "column", alignItems: "flex-start"}}>
      <View style={{flexDirection: "row", justifyContent: "center"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> Do cabinents need to be moved {totSewCab ? "yes" : "no"}</Text>
      <Switch
      style ={{transform:[{ scaleX: 1.5 }, { scaleY: 1.5 }], bottom: 15, left: 30, }} 
        trackColor={{false: '#767577', true: '#f4f3f4'}}
        thumbColor={totSewCab ? '#315C2B' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={sewCabToggle}
        value={totSewCab}
      />
      </View>
      </View>
      {/* Question 6 */}
      <View style={{justifyContent: 'center', flexDirection: "row"}}>
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "#fff", fontSize: 45, fontFamily: "Helvetica", fontWeight: 'light', bottom: 30}}> How many feet of concrete {totSewConc}</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={sewConcInput} placeholder="Enter Number" style={{textAlignVertical: "center",textAlign: "center",backgroundColor: "white",      
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
      {/* Calculate Button */}
      <View style={{alignItems: 'center', justifyContent: 'space-evenly', flexDirection: "row"}}>

          {/* Remove when done testing */}
      <Text style={{textAlignVertical: "center",textAlign: "center", color: "white", fontSize: 40, fontFamily: "Helvetica", fontWeight: 'light', marginLeft: 20,}}>{totalSewer}</Text>


      <TouchableOpacity onPressIn={sewCalculate} onPress={() => navigation.navigate('Calculation')} style={{height: 50, width: 400, backgroundColor: "#315C2B", borderWidth: 3,
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
  // Write function here

  Answer = "Ext";

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
// Write function here

  Answer = "Int";

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
  // const [totalSewer, calcSewer] = useState('');
  // const [totalExterior, calcExterior] = useState('');
  // const [totalInterior, calcInterior] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:"#181F1C", alignContent: "center"}}>
         <View style={{alignItems: 'center', justifyContent: 'space-evenly', flexDirection: "row"}}>
         <Text style={{textAlignVertical: "center",textAlign: "center", color: "white", fontSize: 40, fontFamily: "Helvetica", fontWeight: 'light',}}>Total Price {Answer}</Text>
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
