import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Topic2b.style';

const Topic2b = () => {
  const [result, setResult] = useState(''); // Quản lý kết quả hiển thị

  const handlePress = (value) => {
      if (value === 'AC') {
        setResult(''); // Khi nhấn AC, reset kết quả
      } else if (value === '+/-') {
        // Khi nhấn +/- thì xóa ký tự cuối cùng
        setResult(prev => prev.slice(0, -1));
      } else {
        // Khi nhấn các nút khác, thêm vào kết quả hiện tại
        setResult(prev => prev + value);
      }
    };

  return (
    <View style={styles.container}>
      {/* Hiển thị kết quả */}
      <Text style={styles.resultText}>{result}</Text>

      {/* Hàng nút đầu tiên */}
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => handlePress('AC')} style={styles.button}>
          <Text style={styles.buttonText}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('+/-')} style={styles.button}>
          <Text style={styles.buttonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('%')} style={styles.button}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('÷')} style={styles.button2}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>

      {/* Hàng nút thứ hai */}
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => handlePress('7')} style={styles.button}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('8')} style={styles.button}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('9')} style={styles.button}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('x')} style={styles.button2}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
      </View>

      {/* Hàng nút thứ ba */}
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => handlePress('4')} style={styles.button}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('5')} style={styles.button}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('6')} style={styles.button}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('-')} style={styles.button2}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      {/* Hàng nút thứ tư */}
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => handlePress('1')} style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('2')} style={styles.button}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('3')} style={styles.button}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('+')} style={styles.button2}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Hàng nút cuối cùng */}
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => handlePress('0')} style={[styles.button, styles.zeroButton]}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress(',')} style={styles.button}>
          <Text style={styles.buttonText}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('=')} style={styles.button2}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Topic2b;
