import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import style from './Test.style';

const Test2 = () => {
  const [myBackGround, setMyBackGound] = useState(0.0); // khởi tạo giá trị opacity
  const [flatIncrease, setFlatIncrease] = useState(true);
  const [remainDays, setRemainDays] = useState(0);
  const remainDayOfTheYear = async (myDate:Date):Promise<number> => {
    return new Promise (resole => {
      resole(150);
    })
  }
  useEffect(()=>{
    async function getValue() {
      let result = await remainDayOfTheYear(new Date());
      setRemainDays(result);
    }
    getValue();
  },[])

  const handlePress = () => {
    setMyBackGound(prevOpacity => {
      if (prevOpacity >= 1) {
        setFlatIncrease(false);
        return prevOpacity - 0.1;
      } else if (prevOpacity <= 0) {
        setFlatIncrease(true);
        return prevOpacity + 0.1;
      } else {
        return flatIncrease ? prevOpacity + 0.1 : prevOpacity - 0.1;
      }
    });
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.text}>About 120 Days remaining to Lunar New Year</Text>
      </View>
      <ImageBackground
        source={require('../assets/images/image1.png')}
        style={style.bgImage}>
        <View style={[style.overlay, { backgroundColor: `rgba(0,0,0,${myBackGround})` }]}>
          <TouchableOpacity onPress={handlePress}>
            <Text style={style.button}>Change Opacity</Text>
          </TouchableOpacity>
          <Text style={style.text}>Hello</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Test2;
