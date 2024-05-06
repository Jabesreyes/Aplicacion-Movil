import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, Border, FontFamily, Color, Padding } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <View style={styles.statusBarIphoneXOrNewe}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/notch1.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery1.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            contentFit="cover"
            source={require("../assets/mobile-signal1.png")}
          />
          <Image
            style={[styles.recordingIndicatorIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/recording-indicator.png")}
          />
        </View>
        <Image
          style={styles.leftSideIcon}
          contentFit="cover"
          source={require("../assets/left-side.png")}
        />
      </View>
      <Text style={[styles.version100, styles.labelTypo1]}>Version 1.0.0</Text>
      <View style={[styles.frame, styles.frameLayout]}>
        <View style={styles.searchPosition}>
          <View style={[styles.searchChild, styles.searchPosition]} />
          <Text style={[styles.nombre, styles.nombreLayout]}>Nombre</Text>
          <Image
            style={[styles.ionsearchSharpIcon, styles.nombreLayout]}
            contentFit="cover"
            source={require("../assets/ionsearchsharp.png")}
          />
        </View>
      </View>
      <View style={[styles.frame1, styles.frameLayout]}>
        <View style={styles.searchPosition}>
          <View style={[styles.searchChild, styles.searchPosition]} />
          <Text style={[styles.nombre, styles.nombreLayout]}>Correo</Text>
          <Image
            style={[styles.ionsearchSharpIcon, styles.nombreLayout]}
            contentFit="cover"
            source={require("../assets/ionsearchsharp1.png")}
          />
        </View>
      </View>
      <View style={[styles.frame2, styles.framePosition]}>
        <View style={styles.searchPosition}>
          <View style={[styles.searchChild, styles.searchPosition]} />
          <Text style={[styles.nombre, styles.nombreLayout]}>Contraseña</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[styles.visibilityIcon, styles.visibilityIconLayout]}
            contentFit="cover"
            source={require("../assets/visibility.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={[styles.frame3, styles.framePosition]}>
        <View style={styles.searchPosition}>
          <View style={[styles.searchChild, styles.searchPosition]} />
          <Text style={[styles.nombre, styles.nombreLayout]}>
            Confirmar contraseña
          </Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[styles.visibilityIcon, styles.visibilityIconLayout]}
            contentFit="cover"
            source={require("../assets/visibility.png")}
          />
        </View>
      </View>
      <Text style={[styles.registroDeUsuario, styles.labelTypo]}>
        Registro de Usuario
      </Text>
      <View style={[styles.buttons, styles.insideFlexBox]}>
        <View style={styles.insideFlexBox}>
          <Image
            style={styles.chevronIconLayout}
            contentFit="cover"
            source={require("../assets/chevronleft.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Registrar</Text>
          <Image
            style={[styles.chevronRightIcon, styles.chevronIconLayout]}
            contentFit="cover"
            source={require("../assets/chevronright.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.iconmdiArrowBack, styles.visibilityIconLayout]}
        contentFit="cover"
        source={require("../assets/iconmdi-arrow-back.png")}
      />
      <Text
        style={[styles.yaEresMienbroContainer, styles.registroDeUsuarioFlexBox]}
      >
        <Text style={styles.yaEresMienbro}>{`¿Ya eres mienbro? `}</Text>
        <Text style={styles.ingresa}>Ingresa</Text>
      </Text>
    </View>
  );
};

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
  notchIcon: {
    top: -2,
    right: 78,
    bottom: 16,
    left: 78,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    left: 0,
    width: 375,
    height: 44,
    top: 0,
    position: "absolute",
    overflow: "hidden",
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
    left: 234,
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
    top: 587,
    left: 144,
    borderRadius: Border.br_9xs,
    backgroundColor: "#1fb9fc",
    height: 36,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_base,
    position: "absolute",
    overflow: "hidden",
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
});

export default SignUp;
