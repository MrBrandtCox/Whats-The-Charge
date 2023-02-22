import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Dimensions, TouchableOpacity, Image, TextInput, Pressable, Switch} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

var Answer;

// function MyCheckbox() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <Pressable
//       style={[styles.checkboxBase, checked && styles.checkboxChecked]}
//       onPress={() => setChecked(!checked)}>
//       {checked && <Ionicons name="checkmark" size={24} color="white" />}
//     </Pressable>
//   );
// }
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#181F1C"}}>
      <View style={{flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
      <Text style={[styles.homeTitle]}>Southern Sewer Services</Text>
      <View style={{height: 3, width: "60%", backgroundColor: "#315C2B", position: "absolute", bottom: 375}}></View>
      
      
      <TouchableOpacity onPress={() => navigation.navigate('Sewer')} style={[styles.homeLabel, {bottom: 14,}]} >
        <Text style={[styles.homeText, {textAlignVertical: "top",}]}>Sewer</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ExteriorWater')} style={styles.homeLabel} >
        <Text style={[styles.homeText, {textAlignVertical: "center",}]}>Exterior Water</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('InteriorWater')} style={[styles.homeLabel, {top: 14,}]} >
        <Text style={[styles.homeText, {textAlignVertical: "center",}]}>Interior Water</Text>
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
    sDays(x);
    mathSewDay(x * 1000);
    mathSewPeople(sewPeople * 250 * x);
  };
  

  // Question 2 logic (people * 250 * days)
  const [totSewPeople, mathSewPeople] = useState('');
  const [sewPeople, sPeople] = useState();
  function sewPeopleInput(x) {
    sPeople(x);
    mathSewPeople(x * 250 * sewDays);
  };

  // Question 3 logic (x<3, $75)(3<x<5, $150)(x>5, $450)
  const [totSewFeet, mathSewFeet] = useState('');
  const [sewFeet, sFeet] = useState();
  function sewFeetInput(x) {
    sFeet(x);

    if (x < 3){
      mathSewFeet(x * 75);
    } else if (x >= 3, x <= 5) {
      mathSewFeet(x * 150);
    } else if (x > 5) {
      mathSewFeet(x * 450);
    };
  };

  // Question 4 logic (if yes than sewDays * $750)
  const [totSewTrac, mathSewTrac] = useState(false);
  const sewTracToggle = () => mathSewTrac(previousState => !previousState);

  // Question 5 logic (if yes the flat rate to move a cabinent is $500)
  const [totSewCab, mathSewCab] = useState(false);
  const sewCabToggle = () => mathSewCab(previousState => !previousState);

  // Question 6 logic (Feet of Concrete multiply by $250)
  const [totSewConc, mathSewConc] = useState('');
  const [sewConc, sConc] = useState();
  function sewConcInput(x) {
    sConc(x);
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
      sewTrac = 0;
    };

    if (totSewCab === true) {
      sewCab = 500;
    } else {
      sewCab = 0;
    };
    
    calcSewer(sewTotal + sewTrac + sewCab);
  };

  Answer = totalSewer;
  
  // Validate Inputs First before going to next screen!
  const nextScreen = () => {
    navigation.navigate('Calculation');
  };
  
  const validInput = RegExp('^[0-9]+$');

  const [errorDay, setErrorDay] = useState('');
  const [errorPeople, setErrorPeople] = useState('');
  const [errorFeet, setErrorFeet] = useState('');
  const [errorConc, setErrorConc] = useState('');

  function validate() {
    if (validInput.test(sewDays) === false) {
      setErrorDay('X');
    }
    if (validInput.test(sewPeople) === false) {
      setErrorPeople('X');
    }
    if (validInput.test(sewFeet) === false) {
      setErrorFeet('X');
    }
    if (validInput.test(sewConc) === false) {
      setErrorConc('X');
    }
    if (validInput.test(sewDays) === true 
        && validInput.test(sewPeople) === true 
        && validInput.test(sewFeet) === true 
        && validInput.test(sewConc) === true) {
          nextScreen();
    }
  };

  // Question 1
  return (
    <View style={[styles.screenView]}>
      <View style={[styles.screenViewTwo]}>
      <View style={{justifyContent: 'center',flexDirection: "row", alignItems: 'flex-start',}}>
        <Text style={[styles.questionText]}>Days to complete:</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={sewDayInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>

          <Text style={[styles.questionError]} >{errorDay}</Text>
          
      </View> 
      {/* Question 2 */}
      <View style={{justifyContent: 'center', flexDirection: "row",}}>
      <Text style={[styles.questionText]}>People needed on the job:</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={sewPeopleInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
          
          <Text style={[styles.questionError]} >{errorPeople}</Text>
          
      </View>
      {/* Question 3 */}
      <View style={{justifyContent: 'center', flexDirection: "row"}}>
      <Text style={[styles.questionText]}>How many feet deep:</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={sewFeetInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
          
          <Text style={[styles.questionError]} >{errorFeet}</Text>
          
      </View>
      {/* Question 4 */}
      <View style={{justifyContent: 'center', flexDirection: "column", alignItems: "flex-start"}}>
      <View style={{flexDirection: "row", justifyContent: "center"}}>
      <Text style={[styles.questionText]}>Tractor Needed:</Text>
      <Switch 
        style ={[styles.switchStyle]}
        trackColor={{false: '#767577', true: '#f4f3f4'}}
        ios_backgroundColor="#3e3e3e"
        thumbColor={totSewTrac ? '#315C2B' : '#f4f3f4'}
        onValueChange={sewTracToggle}
        value={totSewTrac}
      />
      </View>
      </View>
      {/* Question 5 */}
      <View style={{justifyContent: 'center', flexDirection: "column", alignItems: "flex-start"}}>
      <View style={{flexDirection: "row", justifyContent: "center"}}>
      <Text style={[styles.questionText]}>Do cabinents need to be moved:</Text>
      <Switch
        style ={[styles.switchStyle]} 
        trackColor={{false: '#767577', true: '#f4f3f4'}}
        ios_backgroundColor="#3e3e3e"
        thumbColor={totSewCab ? '#315C2B' : '#f4f3f4'}
        onValueChange={sewCabToggle}
        value={totSewCab}
      />
      </View>
      </View>
      {/* Question 6 */}
      <View style={{justifyContent: 'center', flexDirection: "row"}}>
      <Text style={[styles.questionText]}>How many feet of concrete:</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={sewConcInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
          
          <Text style={[styles.questionError]} >{errorConc}</Text>
          
      </View>
      {/* Calculate Button */}
      <View style={[styles.calculateView]}>
      <TouchableOpacity onPressIn={sewCalculate} onPress={validate} style={[styles.calculateLabel]}>
            <Text style={[styles.calculateText]}>Calculate</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );

  
}
function ExteriorWater({ navigation }) {
  // Q1 (extDays)
  const [extDays, eDays] = useState('');
  function extDayInput(x) {
    eDays(x);
    mathExtPeople(x * 250 * extPeople);
  };

  // Q2 (extPeople * 250 * extDays)
  const [totExtPeople, mathExtPeople] = useState('');
  const [extPeople, ePeople] = useState();
  function extPeopleInput(x) {
    ePeople(x);
    mathExtPeople(x * 250 * extDays);
  };

  // Q3 (extFeet * 55)
  const [totExtFeet, mathExtFeet] = useState('');
  function extFeetInput(x) {
    mathExtFeet(x * 55);
  };
  
  // Q4 (extConcrete * 250)
  const [totExtConc, mathExtConc] = useState('');
  function extConcInput(x) {
    mathExtConc(x * 250);
  };

  // Q5 (extTrench * 250 * extDays)
  const [totExtTrench, mathExtTrench] = useState(false);
  const extTrenchToggle = () => mathExtTrench(previousState => !previousState);

  // Calculate Button Function
  const [totExterior, calcExterior] = useState('');
  function extCalculate() {
    var extTotal = (totExtPeople + totExtFeet + totExtConc);
    var extTrench;
    if (totExtTrench === true) {
      extTrench = (250 * extDays);
    } else {
      extTrench = 0;
    };
    calcExterior(extTotal + extTrench);
  };

  // Update Answer
  Answer = totExterior;

  return (

    <View style={[styles.screenView]}>
      <View style={[styles.screenViewTwo]}>
      <View style={{justifyContent: 'center',flexDirection: "row"}}>
        <Text style={[styles.questionText]}> Days to complete:</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={extDayInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
      </View> 

      <View style={{justifyContent: 'center', flexDirection: "row",}}>
      <Text style={[styles.questionText]}> Number of People:</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={extPeopleInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
      </View>

      <View style={{justifyContent: 'center', flexDirection: "row",}}>
      <Text style={[styles.questionText]}> Number of Feet:</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={extFeetInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
      </View>

      <View style={{justifyContent: 'center', flexDirection: "row",}}>
      <Text style={[styles.questionText]}> Feet of Concrete:</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={extConcInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
      </View>
  
      <View style={{justifyContent: 'center', flexDirection: "column", alignItems: "flex-start"}}>
      <View style={{flexDirection: "row", justifyContent: "center"}}>
      <Text style={[styles.questionText]}> Is a trencher needed:</Text>
      <Switch 
        style ={[styles.switchStyle]}
        trackColor={{false: '#767577', true: '#f4f3f4'}}
        ios_backgroundColor="#3e3e3e"
        thumbColor={totExtTrench ? '#315C2B' : '#f4f3f4'}
        onValueChange={extTrenchToggle}
        value={totExtTrench}
      />
      </View>
      </View>
      <View style={[styles.calculateView]}>
      <TouchableOpacity onPressIn={extCalculate} onPress={() => navigation.navigate('Calculation')} style={[styles.calculateLabel, {left: '150%'}]}>
            <Text style={[styles.calculateText]}>Calculate</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};
function InteriorWater({ navigation }) {
  // Q1 (intDats * 1250)
  const [totIntDay, mathIntDay] = useState('');
  function intDayInput(x) {
    mathIntDay(x * 1250);
  };

  // Q2 (intBath * 750)
  const [totIntBath, mathIntBath] = useState('');
  function intBathInput(x) {
    mathIntBath(x * 750);
  };

  // Q3 (tot * 0.75)
  const [totIntRaised, mathIntRaised] = useState(false);
  const intRaisedToggle = () => mathIntRaised(previousState => !previousState);

  // Calculate Function (Starts at 2500 + total Calculated and Discount?)
  const [totInterior, calcInterior] = useState('');
  function intCalculate() {
    var intTotal = (2500 + totIntDay + totIntBath);
    var intDiscount;
    if (totIntRaised === true) {
      intDiscount = 0.75;
    } else {
      intDiscount = 1;
    };
    calcInterior(intTotal * intDiscount);
  };

  // Update Answer
  Answer = totInterior;

  return (
    <View style={[styles.screenView]}>
      <View style={[styles.screenViewTwo]}>
      <View style={{justifyContent: 'center',flexDirection: "row"}}>
        <Text style={[styles.questionText]}> Days to complete:</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={intDayInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
      </View> 

      <View style={{justifyContent: 'center', flexDirection: "row",}}>
      <Text style={[styles.questionText]}> Number of bathrooms:</Text>
        <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={intBathInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
      </View>

      <View style={{justifyContent: 'center', flexDirection: "column", alignItems: "flex-start"}}>
      <View style={{flexDirection: "row", justifyContent: "center"}}>
      <Text style={[styles.questionText]}> Is the Home Raised at Least 2ft:</Text>
      <Switch 
        style ={[styles.switchStyle]}
        trackColor={{false: '#767577', true: '#f4f3f4'}}
        ios_backgroundColor="#3e3e3e"
        thumbColor={totIntRaised ? '#315C2B' : '#f4f3f4'}
        onValueChange={intRaisedToggle}
        value={totIntRaised}
      />
      </View>
      </View>
      <View style={[styles.calculateView]}>
      <TouchableOpacity onPressIn={intCalculate} onPress={() => navigation.navigate('Calculation')} style={[styles.calculateLabel]}>
            <Text style={[styles.calculateText]}>Calculate</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

function CalcScreen({ navigation }) {
  return (
    <View style={[styles.screenView]}>
         <View style={[styles.calculateView]}>
         <Text style={[styles.calculateText]}>Total Price {Answer}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.calculateLabel, {left: '150%'}]}>
            <Text style={[styles.calculateText]}>Go Home</Text>
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
    borderRadius: 5,
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
  
  // These are the styles for the Home Screen
  homeTitle: {
    textAlignVertical: "center",
    textAlign: "center",
    color: "#fff",
    fontSize: 50,
    fontFamily: "Helvetica",
    fontWeight: 'bold',
    bottom: 100
  },
  homeLabel: {
    justifyContent: 'center',
    height: 100,
    width: 700,
    backgroundColor: "#315C2B",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    shadowColor: "black",
    shadowOffset: {width: 2, height: 7},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  homeText: {
    textAlign: "center",
    color: "white",
    fontSize: 60,
    fontFamily: "Helvetica",
    fontWeight: 'light',
  },

  // Screen Views
  screenView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor:"#181F1C",
    alignContent: "center"
  },
  screenViewTwo: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  
  // Styles for the Sewer, Exterior, Interior Questions and boxes ...
  questionText : {
    textAlignVertical: "center",
    textAlign: "center",
    color: "#fff",
    fontSize: 45,
    fontFamily: "Helvetica",
    fontWeight: 'light',
    bottom: 30,
  },
  questionInput: {
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "black",
    bottom: 25,
    left: 25,
    height: 50,
    width: 100,
  },
  questionError : {
    textAlignVertical: "center",
    textAlign: "center",
    color: "#fff",
    fontSize: 45,
    fontFamily: "Helvetica",
    fontWeight: 'light',
    bottom: 30,
    color:'red',
    left:40,
  },
  switchStyle: {
    transform: [{ scaleX:1.5}, {scaleY: 1.5}],
    bottom: 15,
    left: 30,
  },
  calculateView: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: "row",
  },
  calculateLabel: {
    height: 50,
    width: 400,
    backgroundColor: "#315C2B",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "black",
    shadowColor: "black",
    shadowOffset: {width: 2, height: 7},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    left: "400%",
  },
  calculateText: {
    textAlignVertical: "center",
    textAlign: "center",
    color: "white",
    fontSize: 40,
    fontFamily: "Helvetica",
    fontWeight: 'light',
  },

});
