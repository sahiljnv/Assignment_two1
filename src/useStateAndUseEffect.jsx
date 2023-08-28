import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const Temp = () => {
    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);
    let [num3, setNum3] = useState(0);
    let [balance, setBalance] = useState(1000);
    let [score, setScore] = useState(0);
    // useEffect(() => {
    //     console.warn('number value is updated by ', num1);
    // }, [num1])
    function changeRandomNumber() {
        setNum1(Math.floor(Math.random() * 10));
        setNum2(Math.floor(Math.random() * 10));
        setNum3(Math.floor(Math.random() * 10));

        let score = setPoint([num1,num2,num3]);
        setScore(score+100);
        setBalance(balance+score);

    }

    //checking if all elements in array are odd or even.
    function checkIfNumbersOddOrEven(arrayOfRandomNumber) {
        let even = arrayOfRandomNumber.every(function (element) {
            return element % 2 === 0;
        });

        let odd = arrayOfRandomNumber.every(function (element) {
            return element % 2 !== 0;
        });
        return even || odd;
    }

    //checking if all elements in array are equal.
    function checkIfAllNumberIsEqual(arrayOfRandomNumber) {
        let firstElement = arrayOfRandomNumber[0]
        return arrayOfRandomNumber.every(item => firstElement === item);
    }
    //checking if all elements in array are continuous state or not. Ex: 1,2,3 or 1,3,2
    function checkIfAllNumberIsContinuousState(arrayOfRandomNumber) {
        arrayOfRandomNumber.sort();

        let check = true;
        for (let i = 0; i < (arrayOfRandomNumber.length - 1); i++) {
            if (arrayOfRandomNumber[i] + 1 !== arrayOfRandomNumber[i + 1]) {
                check = false;
                break;
            }
        }
        if (check) {
            return true;
        }
        return false;
    }


    //set points for conditions.
    function setPoint(arrayOfRandomNumber) {
        let points = 0;
        if (checkIfAllNumberIsContinuousState(arrayOfRandomNumber)) {
            points = 700;
        }
        else if (checkIfAllNumberIsEqual(arrayOfRandomNumber)) {
            points = 900;
        } else if (checkIfNumbersOddOrEven(arrayOfRandomNumber)) {
            points = 200;
        } else {
            points = -100;
        }
        return points;
    }

    return (
        <View style={{ height: '100%', backgroundColor: '#614BC3' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 150 }}>
                <Text style={{ fontSize: 50 }}>Start Game</Text>
                <Text style={{ fontSize: 30 }}>Balance</Text>
                <Text style={{ fontSize: 30 }}>{balance}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 200, paddingTop: 30 }}>
                    <Text style={{ flexDirection: 'row', fontSize: 50, }}>{num1}</Text>
                    <Text style={{ flexDirection: 'row', fontSize: 50, }}>{num2}</Text>
                    <Text style={{ flexDirection: 'row', fontSize: 50, }}>{num3}</Text>

                </View>
                <View style={{ paddingTop: 20, height: 100, width: 150 }}>
                    <Button title='Sub 1' onPress={changeRandomNumber}></Button>
                </View>
                <View>
                    <Text style={{fontSize:40}}>Score earn</Text>
                    <Text style={{fontSize:30}}>{score}</Text>
                </View>

            </View>
        </View>
    )
}

export default Temp;