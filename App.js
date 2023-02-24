import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Dimensions, TouchableOpacity, Image, TextInput, Pressable, Switch} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

var Answer;

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#001703"}}>
      <View style={{flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
      <Text style={[styles.homeTitle]}>Southern{'\n'}Sewer Services</Text>
      <View style={{height: 3, width: "60%", backgroundColor: "#268525", position: "absolute", bottom: 375}}></View>
      
      <TouchableOpacity onPress={() => navigation.navigate('Sewer')} style={[styles.homeLabel, {bottom: 15,}]} >
        <Text style={[styles.homeText, {textAlignVertical: "top",}]}>Sewer</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ExteriorWater')} style={styles.homeLabel} >
        <Text style={[styles.homeText, {textAlignVertical: "center",}]}>Exterior Water</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('InteriorWater')} style={[styles.homeLabel, {top: 15,}]} >
        <Text style={[styles.homeText, {textAlignVertical: "center",}]}>Interior Water</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

function Sewer({navigation}) {
  // Question 1 logic (days * $1000)
  const [totSewDay, mathSewDay] = useState('');
  const [sewDays, sDays] = useState();
  function sewDayInput(x) {
    sDays(x);
    mathSewDay(x * 1000);
    mathSewPeople(sewPeople * 250 * x);
    if (validInput.test(x) === true){
    setErrorDay('');
    }
  };

  // Question 2 logic (people * 250 * days)
  const [totSewPeople, mathSewPeople] = useState('');
  const [sewPeople, sPeople] = useState();
  function sewPeopleInput(x) {
    sPeople(x);
    mathSewPeople(x * 250 * sewDays);
    if (validInput.test(x) === true){
      setErrorPeople('');
    }
  };

  // Question 3 logic (x<3, $75)(3<x<5, $150)(x>5, $450)
  const [totSewFeet, mathSewFeet] = useState('');
  const [sewFeet, sFeet] = useState();
  function sewFeetInput(x) {
    sFeet(x);
    if (validInput.test(x) === true){
      setErrorFeet('');
    }; 

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
    if (validInput.test(x) === true){
      setErrorConc('');
    }; 
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
      {/* <View style={[styles.screenViewTwo]}> */}
        <View style={[styles.serviceTitleView]}>
          <Text style={[styles.serviceTitle]}>Sewer</Text>
          <View style={{height: 3, width: "40%", backgroundColor: "#268525", top:5,}}></View>
        </View>

        <View style={[styles.questionView]}>
          <Text style={[styles.questionText]}>Days to Complete:</Text>
          <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={sewDayInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
          <Text style={[styles.questionError]}>{errorDay}</Text>
        </View> 

        <View style={[styles.questionView]}>
          <Text style={[styles.questionText]}>Workers Needed on the Job:</Text>
          <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={sewPeopleInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
          <Text style={[styles.questionError]}>{errorPeople}</Text>  
        </View>

        <View style={[styles.questionView]}>
          <Text style={[styles.questionText]}>How many Feet:</Text>
          <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={sewFeetInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
          <Text style={[styles.questionError]}>{errorFeet}</Text>
        </View>

        <View style={[styles.questionView]}>
          {/* <View style={{flexDirection: "row", justifyContent: "center"}}> */}
            <Text style={[styles.questionText]}>Tractor Needed:</Text>
            <Switch 
              style ={[styles.switchStyle]}
              trackColor={{false: '#767577', true: '#f4f3f4'}}
              ios_backgroundColor="#3e3e3e"
              thumbColor={totSewTrac ? '#268525' : '#f4f3f4'}
              onValueChange={sewTracToggle}
              value={totSewTrac}
            />
          {/* </View> */}
        </View>

        <View style={[styles.questionView]}>
          {/* <View style={{flexDirection: "row", justifyContent: "center"}}> */}
            <Text style={[styles.questionText]}>Do Cabinents Need to be Moved:</Text>
            <Switch
              style ={[styles.switchStyle]} 
              trackColor={{false: '#767577', true: '#f4f3f4'}}
              ios_backgroundColor="#3e3e3e"
              thumbColor={totSewCab ? '#268525' : '#f4f3f4'}
              onValueChange={sewCabToggle}
              value={totSewCab}
            />
          {/* </View> */}
        </View>

        <View style={[styles.questionView]}>
          <Text style={[styles.questionText]}>How many Feet of Concrete:</Text>
          <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={sewConcInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
          <Text style={[styles.questionError]}>{errorConc}</Text>
        </View>

        <View style={[styles.calculateView]}>
          <TouchableOpacity onPressIn={sewCalculate} onPress={validate} style={[styles.calculateLabel]}>
            <Text style={[styles.calculateText]}>Calculate Total</Text>
          </TouchableOpacity>
        </View>
      {/* </View> */}
    </View>
  );
};

function ExteriorWater({ navigation }) {
  // Q1 (extDays)
  const [extDays, eDays] = useState('');
  function extDayInput(x) {
    eDays(x);
    mathExtPeople(x * 250 * extPeople);
    if (validInput.test(x) === true){
      setErrorDay('');
    };
  };

  // Q2 (extPeople * 250 * extDays)
  const [totExtPeople, mathExtPeople] = useState('');
  const [extPeople, ePeople] = useState();
  function extPeopleInput(x) {
    ePeople(x);
    mathExtPeople(x * 250 * extDays);
    if (validInput.test(x) === true){
      setErrorPeople('');
    };
  };

  // Q3 (extFeet * 55)
  const [totExtFeet, mathExtFeet] = useState('');
  const [extFeet, eFeet] = useState();
  function extFeetInput(x) {
    eFeet(x);
    mathExtFeet(x * 55);
    if (validInput.test(x) === true){
      setErrorFeet('');
    };
  };
  
  // Q4 (extConcrete * 250)
  const [totExtConc, mathExtConc] = useState('');
  const [extConc, eConc] = useState();
  function extConcInput(x) {
    eConc(x);
    mathExtConc(x * 250);
    if (validInput.test(x) === true){
      setErrorConc('');
    };
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
    if (validInput.test(extDays) === false) {
      setErrorDay('X');
    }
    if (validInput.test(extPeople) === false) {
      setErrorPeople('X');
    }
    if (validInput.test(extFeet) === false) {
      setErrorFeet('X');
    }
    if (validInput.test(extConc) === false) {
      setErrorConc('X');
    }
    if (validInput.test(extDays) === true 
      && validInput.test(extPeople) === true 
      && validInput.test(extFeet) === true 
      && validInput.test(extConc) === true) {
        nextScreen();
    }
  };

  return (

    <View style={[styles.screenView]}>
      {/* <View style={[styles.screenViewTwo]}> */}
        <View style={[styles.serviceTitleView]}>
          <Text style={[styles.serviceTitle]}>Exterior</Text>
          <View style={{height: 3, width: "40%", backgroundColor: "#268525", top:5,}}></View>
        </View>

        <View style={[styles.questionView]}>
          <Text style={[styles.questionText]}>Days to complete:</Text>
          <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={extDayInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
          <Text style={[styles.questionError]}>{errorDay}</Text>
        </View> 

        <View style={[styles.questionView]}>
          <Text style={[styles.questionText]}>Workers Needed on the Job:</Text>
          <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={extPeopleInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
          <Text style={[styles.questionError]}>{errorPeople}</Text>
        </View>

        <View style={[styles.questionView]}>
          <Text style={[styles.questionText]}>How many Feet:</Text>
          <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={extFeetInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
          <Text style={[styles.questionError]}>{errorFeet}</Text>
        </View>

        <View style={[styles.questionView]}>
          <Text style={[styles.questionText]}>How many Feet of Concrete:</Text>
          <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={extConcInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
          <Text style={[styles.questionError]}>{errorConc}</Text>
        </View>
  
        <View style={[styles.questionView]}>
          {/* <View style={{flexDirection: "row", justifyContent: "center"}}> */}
            <Text style={[styles.questionText]}>Is a Trencher Needed:</Text>
            <Switch 
              style ={[styles.switchStyle]}
              trackColor={{false: '#767577', true: '#f4f3f4'}}
              ios_backgroundColor="#3e3e3e"
              thumbColor={totExtTrench ? '#268525' : '#f4f3f4'}
              onValueChange={extTrenchToggle}
              value={totExtTrench}
            />
          {/* </View> */}
        </View>

        <View style={[styles.calculateView]}>
          <TouchableOpacity onPressIn={extCalculate} onPress={validate} style={[styles.calculateLabel]}>
          <Text style={[styles.calculateText]}>Calculate Total</Text>
          </TouchableOpacity>
        </View>
      {/* </View> */}
    </View>
  );
};

function InteriorWater({ navigation }) {
  // Q1 (intDats * 1250)
  const [totIntDay, mathIntDay] = useState('');
  const [intDays, iDays] = useState();
  function intDayInput(x) {
    iDays(x);
    mathIntDay(x * 1250);
    if (validInput.test(x) === true){
      setErrorDay('');
    };
  };

  // Q2 (intBath * 750)
  const [totIntBath, mathIntBath] = useState('');
  const [intBath, iBath] = useState();
  function intBathInput(x) {
    iBath(x);
    mathIntBath(x * 750);
    if (validInput.test(x) === true){
      setErrorBath('');
    };
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

  // Validate Inputs First before going to next screen!
  const nextScreen = () => {
    navigation.navigate('Calculation');
  };
  
  const validInput = RegExp('^[0-9]+$');

  const [errorDay, setErrorDay] = useState('');
  const [errorBath, setErrorBath] = useState('');

  function validate() {
    if (validInput.test(intDays) === false) {
      setErrorDay('X');
    }
    if (validInput.test(intBath) === false) {
      setErrorBath('X');
    }
    if (validInput.test(intDays) === true 
      && validInput.test(intBath) === true ) {
        nextScreen();
    }
  };
  
  return (
    <View style={[styles.screenView]}>
      {/* <View style={[styles.screenViewTwo]}> */}
        <View style={[styles.serviceTitleView]}>
          <Text style={[styles.serviceTitle]}>Interior</Text>
          <View style={{height: 3, width: "40%", backgroundColor: "#268525", top:5,}}></View>
        </View>

        <View style={[styles.questionView]}>
          <Text style={[styles.questionText]}>Days to Complete:</Text>
          <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={intDayInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
          <Text style={[styles.questionError]}>{errorDay}</Text>
        </View> 

        <View style={[styles.questionView]}>
          <Text style={[styles.questionText]}>Number of Bathrooms:</Text>
          <TextInput inputMode='numeric' keyboardType='number-pad' maxLength="3" onChangeText={intBathInput} placeholder="Enter Number" style={[styles.questionInput]}>
          </TextInput>
          <Text style={[styles.questionError]}>{errorBath}</Text>
        </View>

        <View style={[styles.questionView]}>
          {/* <View style={{flexDirection: "row", justifyContent: "center"}}> */}
            <Text style={[styles.questionText]}>Is the Home Raised at Least 2ft:</Text>
            <Switch 
              style ={[styles.switchStyle]}
              trackColor={{false: '#767577', true: '#f4f3f4'}}
              ios_backgroundColor="#3e3e3e"
              thumbColor={totIntRaised ? '#268525' : '#f4f3f4'}
              onValueChange={intRaisedToggle}
              value={totIntRaised}
            />
          {/* </View> */}
        </View>

        <View style={[styles.calculateView]}>
          <TouchableOpacity onPressIn={intCalculate} onPress={validate} style={[styles.calculateLabel]}>
            <Text style={[styles.calculateText]}>Calculate Total</Text>
          </TouchableOpacity>
        </View>
      {/* </View> */}
    </View>
  );
};

function CalcScreen({ navigation }) {
  return (
    <View style={[styles.screenCalculate]}>
      <View style={[styles.calculateView]}>
        <Text style={[styles.totalTitle]}>Total Price</Text>
        <Text style={[styles.totalPrice]}>{Answer}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.goHomeLabel]}>
          <Text style={[styles.calculateText]}>Go Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false,
          title: 'Southern Sewer Services',  
          headerStyle:{
            backgroundColor: "white"
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40
          },
        }}/>

        <Stack.Screen name="Sewer" component={Sewer} options={{
          title: '',
          headerStyle:{
            backgroundColor: "#001703"
          },
          headerTintColor: 'white',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          //   fontSize: 40
          // },
        }}/>

        <Stack.Screen name="ExteriorWater" component={ExteriorWater} options={{
          title: '',  
          headerStyle:{
            backgroundColor: "#001703"
          },
          headerTintColor: 'white',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          //   fontSize: 40
          // },
        }}/>

        <Stack.Screen name="InteriorWater" component={InteriorWater} options={{
          title: '',  
          headerStyle:{
            backgroundColor: "#001703"
          },
          headerTintColor: 'white',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          //   fontSize: 40
          // },
        }}/>

        <Stack.Screen name="Calculation" component={CalcScreen} options={{
          title: 'Calculation',  
          headerStyle:{
            backgroundColor: "#268525"
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40},
            headerShown: false
        }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  // These are the styles for the Home Screen
  homeTitle: {
    textAlignVertical: "center",
    textAlign: "center",
    color: "#fff",
    fontSize: 80,
    fontWeight: 'bold',
    bottom: 100,
  },
  homeLabel: {
    justifyContent: 'center',
    height: 100,
    width: 500,
    backgroundColor: "#268525",
    borderWidth: 3,
    borderRadius: 5,
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
    fontWeight: 'light',
  },
  // Screen Views
  screenView: {
    flex: 1,
    paddingLeft: 25,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor:"#001703",
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
    // backgroundColor:"#001703",
    // alignContent: "center"
  },
  serviceTitleView: {
    width: '100%',
    alignItems: 'center',
  },
  serviceTitle:{
    color: "#fff",
    fontSize: 60,
    fontWeight: 'bold',
  },
  screenCalculate: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    backgroundColor:"#001703",
  },
  // Styles for the Sewer, Exterior, Interior Questions and boxes ...
  questionView: {
    justifyContent: 'center',
    flexDirection: "row",
    alignItems: 'center',

    // backgroundColor: "blue",
  },
  questionText : {
    // textAlignVertical: "center",
    // textAlign: "center",
    color: "#fff",
    fontSize: 45,
    fontWeight: 'light',

    // backgroundColor: "red",
  },
  questionInput: {
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 3,
    borderColor: "black",
    left: 20,
    height: 40,
    width: 100,
  },
  questionError : {
    fontSize: 45,
    fontWeight: 'bold',
    color:'red',
    left:40,

    // backgroundColor: "red",
  },
  switchStyle: {
    transform: [{ scaleX:1.5}, {scaleY: 1.5}],
    left: 30,
  },
  calculateView: {
    height: '12.5%',
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    // flexDirection: "row",

    // backgroundColor: "purple",
  },
  calculateLabel: {
    // height: 50,
    width: 400,
    backgroundColor: "#268525",
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "black",
    shadowColor: "black",
    shadowOffset: {width: 2, height: 7},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // left: "400%",
  },
  calculateText: {
    textAlignVertical: "center",
    textAlign: "center",
    color: "white",
    fontSize: 40,
    fontWeight: 'light',
  },
  totalTitle: {
    // textAlignVertical: "center",
    // textAlign: "center",
    color: "white",
    fontSize: 60,
    fontWeight: 'bold',
    bottom: 250,
  },
  totalPrice: {
    color: "white",
    fontSize: 60,
    bottom: 50,
  },
  goHomeLabel: {
    // height: 50,
    width: 400,
    backgroundColor: "#268525",
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "black",
    shadowColor: "black",
    shadowOffset: {width: 2, height: 7},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    top: 150,
  },
});