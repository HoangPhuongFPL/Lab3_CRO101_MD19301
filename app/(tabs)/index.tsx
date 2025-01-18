import React, { useState } from 'react';
import { Platform, StatusBar } from 'react-native';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, Button, Alert, Image} from 'react-native';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    if (name && phone && password) {
      Alert.alert('Thông báo', `Đăng ký thành công!\nTên: ${name}\nSĐT: ${phone}\nMật Khẩu: ${password}`);
    } else {
      Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin!');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={[styles.textContainer, styles.blueBg]}>
          <Text style={[styles.text, styles.white]}>
            Em vào đời bằng <Text style={styles.red}>vàng đỏ</Text> anh vào đời bằng <Text style={styles.yellow}>nước trà</Text>
          </Text>
          <Text style={styles.text}>
            Bằng con mưa thơm <Text style={[styles.bold, styles.text3]}>mùi đất</Text> và bằng hoa dại mọc trước nhà
          </Text>
          <Text style={[styles.text, styles.italic, styles.brown]}>
            Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
          </Text>
          <Text style={styles.text}>
            Lý trí em là <Text style={[styles.white, styles.under, styles.bold]}>  c  ô  n  g    c  ụ  </Text> còn trái tim anh là <Text style={[styles.white, styles.bold, styles.under]}>   đ  ồ  n  g    c  ỏ  </Text>
          </Text>
          <Text style={[styles.text, styles.italic, styles.rightAlign]}>
            Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
          </Text>
          <Text style={[styles.text, styles.orange, styles.bold, styles.centerText]}>
            Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
          </Text>
          <Text style={[styles.text2, styles.bold]}>
            Em vào đời bằng <Text style={[styles.white]}>mây trắng</Text> em vào đời bằng <Text style={styles.yellow}>nắng xanh</Text>
          </Text>
          <Text style={[styles.text2, styles.bold]}>
            Em vào đời bằng <Text style={[styles.yellow]}>đại lộ</Text> và con đường đó gọi <Text style={styles.white}>vàng anh</Text>
          </Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.title}>Đăng Ký</Text>

          <TextInput
            style={styles.input}
            placeholder="Nhập họ tên"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <Button title="Đăng Ký" onPress={register} />
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://khoinguonsangtao.vn/wp-content/uploads/2022/10/hinh-anh-meo-khoc-cute.jpg' }}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#f0f0f0',
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  blueBg: {
    backgroundColor: '#00008b',
    borderRadius: 8,
    padding: 16,
  },
  textContainer: {
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 8,
  },
  text2: {
    fontSize: 18,
    color: '#002040',
    marginBottom: 8,
  },
  text3: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 8,
  },
  red: {
    color: '#ff0000',
  },
  brown: {
    color: '#8B4513',
  },
  white: {
    color: '#ffffff',
  },
  yellow: {
    color: '#FFD700',
  },
  orange: {
    color: '#FFA500',
  },
  italic: {
    fontStyle: 'italic',
  },
  bold: {
    fontWeight: 'bold',
  },
  centerText: {
    textAlign: 'center',
    marginHorizontal: 20,
  },
  rightAlign: {
    textAlign: 'right',
  },
  under: {
    textDecorationLine: 'underline',
  },
  container2: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 8,
  },
});