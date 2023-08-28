import { StyleSheet, Text, View, TextInput, Button,ScrollView } from 'react-native'
import React, { useState } from 'react'

export default function InputAssign() {
  const [inputText, setInputText] = useState('')
  const [listOfGoal, setListOfGoal] = useState([]);
  const handleBUtton = () => {
    setListOfGoal(currentGoalList => [...currentGoalList, inputText]);
    setInputText('')
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter the goal' placeholderTextColor='gray' style={styles.inputBox} onChangeText={setInputText} value={inputText} />
        <Button title='Add Task' onPress={handleBUtton}></Button>
      </View>
      <View>
        <Text style={styles.headingText}>Goal list ......</Text>
        <ScrollView>
          {
            listOfGoal.map((goal) => 
              <Text key={goal} style={{ color: 'black' }}>{goal}</Text>
            )
          }
        </ScrollView>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
    borderBottomWidth: 2,
    borderColor: 'black'
  },
  inputBox: {
    borderColor: "black",
    borderWidth: 2,
    width: '70%',
    marginRight: 10,
    paddingLeft: 10,
    color: 'black'
  },
  headingText: {
    color: 'black',
    marginTop: 20,
    fontSize: 20
  },
  goalList: {
    color: 'black'
  }
})