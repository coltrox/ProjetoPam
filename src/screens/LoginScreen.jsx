import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, SafeAreaView, ScrollView,
  TouchableOpacity, Image
} from 'react-native';
import { useFonts } from 'expo-font';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import { colors } from '../constants/colors';

const LoginScreen = ({ navigation }) => {
  // Lógica de fontes e estados aqui...
  const [showPassword, setShowPassword] = useState(false);
  const [check, setCheck] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Acesse</Text>
        <Text style={styles.subtitle}>com E-mail e senha</Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} placeholder="Digite seu e-mail" />

        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Digite sua senha"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
             <Icon name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={25} color={colors.secondary} />
          </TouchableOpacity>
        </View>

        <View style={styles.optionsContainer}>
            <View style={styles.checkboxWrapper}>
                <Checkbox value={check} onValueChange={setCheck} color={colors.primary} />
                <Text style={styles.checkboxLabel}>Lembrar senha</Text>
            </View>
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
            <Button variant="primary" style={{flex: 1, marginRight: 5}}>Acessar</Button>
            <Button variant="secondary" style={{flex: 1, marginLeft: 5}}>Cadastrar</Button>
        </View>
        
        {/* Divisor e login social aqui */}
      </ScrollView>
    </SafeAreaView>
  );
};

// Estilos...
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.white },
    content: { padding: 20 },
    backButton: { fontFamily: 'Poppins-Light', fontSize: 40, color: colors.primary, marginBottom: 20,},
    title: { fontFamily: 'Poppins-Medium', fontSize: 40 },
    subtitle: { fontFamily: 'Poppins-Regular', color: colors.secondary, marginBottom: 30 },
    label: { fontFamily: 'Poppins-Regular', marginBottom: 8 },
    input: { height: 50, backgroundColor: colors.lightGray, borderRadius: 10, paddingHorizontal: 15, fontFamily: 'Poppins-Regular', marginBottom: 15 },
    inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.lightGray, borderRadius: 10, paddingHorizontal: 15, marginBottom: 20 },
    inputField: { flex: 1, height: 50, fontFamily: 'Poppins-Regular' },
    optionsContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    checkboxWrapper: { flexDirection: 'row', alignItems: 'center' },
    checkboxLabel: { marginLeft: 8, fontFamily: 'Poppins-Regular' },
    forgotPassword: { color: colors.primary, fontFamily: 'Poppins-SemiBold' },
    buttonContainer: { flexDirection: 'row' }
});


export default LoginScreen;