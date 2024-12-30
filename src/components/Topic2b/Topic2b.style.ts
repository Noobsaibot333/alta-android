import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Đẩy các nút xuống đáy màn hình
    alignItems: 'center',
    backgroundColor: 'black',
    paddingBottom: 20, // Khoảng cách ở dưới cùng
  },
  resultText: {
    color: 'white',
    fontSize: 48, // Cỡ chữ lớn cho hiển thị kết quả
    textAlign: 'right',
    width: '90%', // Chiếm 90% chiều ngang màn hình
    marginBottom: 20, // Khoảng cách giữa kết quả và các nút
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 10, // Khoảng cách giữa các hàng nút
  },
  button: {
    backgroundColor: 'white',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    backgroundColor: 'orange',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: 'black',
  },
  zeroButton: {
    width: 170, // Nút số 0 rộng hơn
  },
});

export default styles;
