import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { FontSize, Border, FontFamily, Color, Padding } from "../globalStyles";
import react, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { withNavigation } from '@react-navigation/compat';


const SignUp = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const navigation = useNavigation();

  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [mostrarConfirmarContrasena, setMostrarConfirmarContrasena] = useState(false);

  const toggleMostrarContrasena = () => {
    setMostrarContrasena(!mostrarContrasena);
  };

  const toggleMostrarConfirmarContrasena = () => {
    setMostrarConfirmarContrasena(!mostrarConfirmarContrasena);
  };

  const handleRegistrar = () => {
    navigation.navigate('Profile');
    navigation.navigate('Profile', { nombre: nombre, correo: correo });
  };


  return (
    <View style={styles.signUp}>
      <Text style={[styles.version100, styles.labelTypo1]}>Version 1.0.0</Text>
      <View style={[styles.frame, styles.frameLayout]}>
        <View style={styles.searchPosition}>
          <View style={[styles.searchChild, styles.searchPosition]} />
          <TextInput
            style={[styles.nombre, styles.nombreLayout]}
            value={nombre}
            onChangeText={text => setNombre(text)}
            placeholder="Nombre"
          />
          <Image
            style={[styles.ionsearchSharpIcon, styles.nombreLayout]}
            contentFit="cover"
            source={require("../assets/ionsearchsharp@3x.png")}
          />
        </View>
      </View>
    <View style={styles.container}>
      <View style={[styles.frame1, styles.frameLayout]}>
        <View style={styles.searchPosition}>
          <View style={[styles.searchChild, styles.searchPosition]} />
          <TextInput
            style={[styles.nombre, styles.nombreLayout]}
            value={correo}
            onChangeText={text => setCorreo(text)}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Image
            style={[styles.ionsearchSharpIcon, styles.nombreLayout]}
            contentFit="cover"
            source={require("../assets/ionsearchsharp1@3x.png")}
          />
        </View>
      </View>
    </View>
    <View style={styles.container}>
      <View style={[styles.frame2, styles.framePosition]}>
        <View style={styles.searchPosition}>
          <View style={[styles.searchChild, styles.searchPosition]} />
          <Text style={[styles.nombre, styles.nombreLayout]}>Contraseña</Text>
          <TextInput
            style={[styles.contrasenaInput, styles.nombreLayout]}
            value={contrasena}
            onChangeText={text => setContrasena(text)}
            placeholder=" "
            secureTextEntry={!mostrarContrasena}
          />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector@3x.png")}
          />
          <TouchableOpacity onPress={toggleMostrarContrasena}>
            <Image
              style={[styles.visibilityIcon, styles.visibilityIconLayout]}
              contentFit="cover"
              source={mostrarContrasena ? require("../assets/vector1@3x.png") : require("../assets/visibility@3x.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
     <View style={styles.container}>
      <View style={[styles.frame3, styles.framePosition]}>
        <View style={styles.searchPosition}>
          <View style={[styles.searchChild, styles.searchPosition]} />
          <Text style={[styles.nombre, styles.nombreLayout]}>
            Confirmar contraseña
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.contrasenaInput, styles.inputLayout]}
              value={confirmarContrasena}
              onChangeText={text => setConfirmarContrasena(text)}
              placeholder=" "
              secureTextEntry={!mostrarConfirmarContrasena}
            />
          </View>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector@3x.png ")}
          />
          <TouchableOpacity onPress={toggleMostrarConfirmarContrasena}>
            <Image
              style={[styles.visibilityIcon, styles.visibilityIconLayout]}
              contentFit="cover"
              source={mostrarConfirmarContrasena ? require("../assets/vector1@3x.png") : require("../assets/visibility@3x.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

    <View style={styles.container}>
      <Text style={[styles.registroDeUsuario, styles.labelTypo]}>
        Registro de Usuario
      </Text>
      <View style={[styles.buttons, styles.insideFlexBox]}>
        <TouchableOpacity onPress={handleRegistrar}>
          <View style={styles.insideFlexBox}>
            <Image
              style={styles.chevronIconLayout}
              contentFit="cover"
              source={require("../assets/chevronleft@3x.png")}
            />
            <Text style={[styles.label, styles.labelTypo, styles.registrarText]}>Registrar</Text>
            <Image
              style={[styles.chevronRightIcon, styles.chevronIconLayout]}
              contentFit="cover"
              source={require("../assets/chevronright@3x.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </View>
      </View>
      <Image
        style={[styles.iconmdiArrowBack, styles.visibilityIconLayout]}
        contentFit="cover"
        source={require("../assets/iconmdi-arrow-back@3x.png")}
      />
      <Text
        style={[styles.yaEresMienbroContainer, styles.registroDeUsuarioFlexBox]}
      >
        <Text style={styles.yaEresMienbro}>{`¿Ya eres miembro? `}</Text>
        <Text style={styles.ingresa}>Ingresa</Text>
      </Text>
    </View>
  );
};

//------------------------------------------------ESTILOS------------------------------------------------
const styles = StyleSheet.create({
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  labelTypo1: {
    textAlign: "center",
    fontSize: FontSize.body2_size,
  },
  frameLayout: {
    width: 269,
    left: 53,
    height: 44,
    position: "absolute",
  },
  searchPosition: {
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    flexDirection: 'row',
  },
  nombreLayout: {
    opacity: 0.8,
    height: 24,
    position: "absolute",
  },
  framePosition: {
    left: 54,
    width: 269,
    height: 44,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  visibilityIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  contrasenaInput: {
    flex: 1,
    position: "center",
    marginLeft: 38
  },
  vectorIconLayout: {
    left: "88.8%",
    right: "5.41%",
    width: "5.79%",
    height: "2.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  labelTypo: {
    fontFamily: FontFamily.header3,
    fontWeight: "700",
  },
  insideFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  chevronIconLayout: {
    height: 16,
    width: 16,
    display: "none",
  },
  registroDeUsuarioFlexBox: {
    textAlign: "left",
    position: "absolute",
  },

  version100: {
    top: 772,
    left: 135,
    fontFamily: FontFamily.nunitoBold,
    width: 98,
    color: Color.labelColorLightPrimary,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.body2_size,
    height: 11,
    position: "absolute",
  },
  searchChild: {
    backgroundColor: Color.gray,
  },
  nombre: {
    left: 40,
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDimgray,
    display: "flex",
    width: 240,
    alignItems: "center",
    opacity: 0.8,
    textAlign: "left",
    top: 10,
    fontWeight: "700",
    fontSize: FontSize.body2_size,
  },
  ionsearchSharpIcon: {
    marginTop: -12,
    left: 8,
    top: "50%",
    width: 24,
    overflow: "hidden",
  },
  frame: {
    top: 230,
  },
  frame1: {
    top: 312,
  },
  vectorIcon: {
    height: "47.73%",
    width: "5.95%",
    top: "22.73%",
    right: "89.96%",
    bottom: "29.55%",
    left: "4.09%",
    position: "absolute",
  },
  visibilityIcon: {
    left: 178,
    top: 10,
    height: 24,
  },
  frame2: {
    top: 394,
  },
  vectorIcon1: {
    bottom: "47.67%",
    top: "50%",
  },
  vectorIcon2: {
    top: "60.1%",
    bottom: "37.57%",
  },
  frame3: {
    top: 476,
  },
  registroDeUsuario: {
    top: 149,
    left: 88,
    fontSize: FontSize.header3_size,
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  label: {
    color: Color.surface,
    marginLeft: 8,
    textAlign: "center",
    fontSize: FontSize.body2_size,
    fontFamily: FontFamily.header3,
  },
  chevronRightIcon: {
    marginLeft: 8,
  },
  buttons: {
    top: 550,
    left: 130,
    borderRadius: Border.br_9xs,
    backgroundColor: "#1fb9fc",
    height: 36,
    justifyContent: "center",
    padding: 20,
    width: 110,
    position: "absolute",
    alignItems: 'center',
    flex: 1,
  },
  iconmdiArrowBack: {
    top: 53,
    left: 33,
  },
  yaEresMienbro: {
    color: Color.labelColorLightPrimary,
  },
  ingresa: {
    color: "#12601f",
  },
  yaEresMienbroContainer: {
    top: 637,
    left: 97,
    fontSize: FontSize.defaultBoldSubheadline_size,
    fontFamily: FontFamily.interRegular,
    opacity: 0.6,
  },
  signUp: {
    backgroundColor: "rgba(207, 230, 251, 0.8)",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
  registrarText: {
    color: 'white',
    position: 'absolute',
    alignItems: "center",
  },
});

export default withNavigation(SignUp);