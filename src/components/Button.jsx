import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

// O botão aceita uma prop "variant" que define seu estilo
const Button = ({ children, onPress, variant = 'primary', style }) => {
  // Escolhe o estilo do container e do texto com base na variante
  const containerStyle = [
    styles.button,
    variant === 'primary' ? styles.primaryContainer : styles.secondaryContainer,
    style, // Permite adicionar estilos customizados
  ];

  const textStyle = [
    styles.text,
    variant === 'primary' ? styles.primaryText : styles.secondaryText,
  ];

  // Se o "children" for um texto, aplica o estilo, senão, renderiza como está
  const content =
    typeof children === 'string' ? (
      <Text style={textStyle}>{children}</Text>
    ) : (
      children
    );

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      {content}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  primaryContainer: {
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  secondaryContainer: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  primaryText: {
    color: colors.white,
  },
  secondaryText: {
    color: colors.primary,
  },
});

export default Button;