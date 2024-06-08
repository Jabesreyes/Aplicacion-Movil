import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Padding, Border } from "../globalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Text style={styles.version100}>Version 1.0.0</Text>
      <View style={styles.opcionesWrapper}>
        <View style={styles.opciones}>
          <Text style={[styles.cambiarContrasea, styles.correoTypo]}>
            Correo actual
          </Text>
          <Text style={[styles.cambiarCorreo, styles.correoTypo]}>
            Cambiar correo
          </Text>
          <View
            style={[styles.bLeadingIconaInactivedi, styles.leadingPosition1]}
          >
            <View style={[styles.autolayout, styles.textFieldFlexBox]}>
              <Image
                style={[styles.leadingIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/leading-icon@3x.png")}
              />
              <Text style={styles.inputText}>Label</Text>
              <Image
                style={[styles.trailingIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/trailing-icon@3x.png")}
              />
            </View>
            <View style={styles.assistive}>
              <Text style={styles.assistiveText}>Disabled</Text>
            </View>
          </View>
          <View
            style={[styles.bLeadingIconaInactivedi1, styles.leadingPosition1]}
          >
            <View style={[styles.autolayout, styles.textFieldFlexBox]}>
              <Image
                style={[styles.leadingIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/leading-icon@3x.png")}
              />
              <Text style={styles.inputText}>Label</Text>
              <Image
                style={[styles.trailingIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/trailing-icon@3x.png")}
              />
            </View>
            <View style={styles.assistive}>
              <Text style={styles.assistiveText}>Disabled</Text>
            </View>
          </View>
          <Text style={[styles.correoActual, styles.correoTypo]}>
            cambiar contraseña
          </Text>
          <View style={styles.twoLinebWithImage}>
            <View style={[styles.textField, styles.textFieldFlexBox]}>
              <Image
                style={styles.avatarIcon}
                contentFit="cover"
                source={require("../assets/-avatar@3x.png")}
              />
              <Text style={styles.body2}>
                Es posible que algunos datos de la cuenta y del sistema
                operativo se envie al centro de soporte de acuerdo a nuestras
                politicas de privacidad
              </Text>
            </View>
            <View style={styles.buttons}>
              <View style={styles.buttonFlexBox}>
                <Text style={styles.label}>Aceptar</Text>
              </View>
              <View style={[styles.button1, styles.buttonFlexBox]}>
                <Text style={styles.label}>Cancelar</Text>
              </View>
            </View>
            <View style={styles.divider}>
              <View style={[styles.divider1, styles.label2Position]} />
            </View>
          </View>
          <Text style={[styles.dui, styles.correoTypo]}>DUI</Text>
        </View>
      </View>
      <View style={[styles.bLeadingIconcFocusederr, styles.leadingPosition]}>
        <View style={[styles.autolayout2, styles.autolayoutPosition]}>
          <Image
            style={[styles.leadingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/leading-icon1@3x.png")}
          />
          <View style={styles.autolayout3}>
            <View style={styles.inputAutolayout}>
              <Text style={styles.inputText2}>Input text</Text>
              <View style={styles.cursor} />
            </View>
            <Text style={[styles.label2, styles.label2Typo]}>Label</Text>
          </View>
          <Image
            style={[styles.trailingIcon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/trailing-icon1@3x.png")}
          />
        </View>
        <View style={styles.indicator} />
        <View style={styles.assistive}>
          <Text style={styles.label2Typo}>Activated</Text>
        </View>
      </View>
      <View style={[styles.bLeadingIconcFocusederr1, styles.leadingPosition]}>
        <View style={[styles.autolayout2, styles.autolayoutPosition]}>
          <Image
            style={[styles.leadingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/leading-icon1@3x.png")}
          />
          <View style={styles.autolayout3}>
            <View style={styles.inputAutolayout}>
              <Text style={styles.inputText2}>Input text</Text>
              <View style={styles.cursor} />
            </View>
            <Text style={[styles.label2, styles.label2Typo]}>Label</Text>
          </View>
          <Image
            style={[styles.trailingIcon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/trailing-icon1@3x.png")}
          />
        </View>
        <View style={styles.indicator} />
        <View style={styles.assistive}>
          <Text style={styles.label2Typo}>Activated</Text>
        </View>
      </View>
      <View style={styles.profileInner}>
        <View>
          <Text style={styles.hello}>Hello,</Text>
          <Text style={styles.hiJames}>Hi James</Text>
        </View>
      </View>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame@3x.png")}
      />
      <View style={[styles.statusBarIphone1313Pr, styles.profileChildPosition]}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch@3x.png")}
        />
        <View style={[styles.rightSide, styles.iconPosition]}>
          <Image
            style={[styles.batteryIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/battery@3x.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/wifi@3x.png")}
          />
          <Image
            style={[styles.mobileSignalIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/mobile-signal@3x.png")}
          />
        </View>
        <View style={[styles.leftSide, styles.timeLayout]}>
          <View style={[styles.time, styles.timeLayout]}>
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.profileChild, styles.profileChildPosition]}
        contentFit="cover"
        source={require("../assets/group-1707478165@3x.png")}
      />
      <Image
        style={[styles.iconmdiArrowBack, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconmdi-arrow-back@3x.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  correoTypo: {
    width: 313,
    fontSize: FontSize.defaultBoldSubheadline_size,
    height: 44,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  leadingPosition1: {
    width: "100.31%",
    top: "50%",
    position: "absolute",
  },
  textFieldFlexBox: {
    padding: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  label2Position: {
    left: "0%",
    position: "absolute",
  },
  leadingPosition: {
    width: "87.47%",
    top: "50%",
    position: "absolute",
  },
  autolayoutPosition: {
    borderTopRightRadius: Border.br_9xs,
    borderTopLeftRadius: Border.br_9xs,
    alignItems: "center",
    backgroundColor: Color.surfaceOverlay,
  },
  label2Typo: {
    color: Color.error,
    lineHeight: 16,
    fontFamily: FontFamily.body2,
    letterSpacing: 0,
    textAlign: "left",
    fontSize: FontSize.caption_size,
  },
  profileChildPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    height: 11,
    left: "50%",
    position: "absolute",
  },
  timeLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  version100: {
    top: 704,
    left: 159,
    width: 81,
    height: 44,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.caption_size,
    position: "absolute",
  },
  cambiarContrasea: {
    top: 98,
    left: -3,
    fontSize: FontSize.defaultBoldSubheadline_size,
  },
  cambiarCorreo: {
    top: 184,
    left: -3,
    fontSize: FontSize.defaultBoldSubheadline_size,
  },
  leadingIcon: {
    display: "none",
  },
  inputText: {
    marginLeft: 14,
    color: Color.onSurfaceDisabled,
    fontFamily: FontFamily.body2,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.subtitle1_size,
    textAlign: "left",
    flex: 1,
  },
  trailingIcon: {
    marginLeft: 14,
  },
  autolayout: {
    alignItems: "center",
    backgroundColor: Color.surfaceOverlay,
    borderTopRightRadius: Border.br_9xs,
    borderTopLeftRadius: Border.br_9xs,
  },
  assistiveText: {
    lineHeight: 16,
    color: Color.onSurfaceDisabled,
    fontFamily: FontFamily.body2,
    letterSpacing: 0,
    textAlign: "left",
    fontSize: FontSize.caption_size,
  },
  assistive: {
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_9xs,
    display: "none",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  bLeadingIconaInactivedi: {
    marginTop: -28,
    right: "2.75%",
    left: "-3.06%",
    top: "50%",
  },
  bLeadingIconaInactivedi1: {
    marginTop: -114,
    right: "0.61%",
    left: "-0.92%",
    top: "50%",
  },
  correoActual: {
    top: 270,
    left: -3,
    fontSize: FontSize.defaultBoldSubheadline_size,
  },
  avatarIcon: {
    width: 40,
    height: 40,
  },
  body2: {
    fontSize: FontSize.body2_size,
    color: Color.onSurfaceMediumEmphasis,
    marginLeft: 16,
    lineHeight: 20,
    fontFamily: FontFamily.body2,
    letterSpacing: 0,
    textAlign: "left",
    flex: 1,
  },
  textField: {
    display: "none",
  },
  label: {
    letterSpacing: 1,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.button,
    color: Color.primary500,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.defaultBoldSubheadline_size,
  },
  button1: {
    marginLeft: 8,
  },
  buttons: {
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
  },
  divider1: {
    marginTop: -0.5,
    right: "0%",
    height: 1,
    backgroundColor: Color.surfaceOverlay,
    top: "50%",
    width: "100%",
  },
  divider: {
    width: 360,
    height: 1,
    display: "none",
  },
  twoLinebWithImage: {
    top: 375,
    right: 79,
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: Color.surface,
  },
  dui: {
    left: 3,
    top: 12,
  },
  opciones: {
    height: 308,
    width: 327,
  },
  opcionesWrapper: {
    top: 263,
    left: 27,
    width: 327,
    position: "absolute",
  },
  inputText2: {
    color: Color.onSurfaceHighEmphasis,
    fontFamily: FontFamily.body2,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.subtitle1_size,
    textAlign: "left",
  },
  cursor: {
    width: 1,
    height: 17,
    marginLeft: 5,
    backgroundColor: Color.error,
  },
  inputAutolayout: {
    top: 14,
    width: 262,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  label2: {
    width: "48.66%",
    top: 0,
    left: "0%",
    position: "absolute",
  },
  autolayout3: {
    height: 38,
    marginLeft: 10,
    flex: 1,
  },
  trailingIcon2: {
    marginLeft: 10,
  },
  autolayout2: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.surfaceOverlay,
    alignSelf: "stretch",
  },
  indicator: {
    height: 2,
    backgroundColor: Color.error,
    alignSelf: "stretch",
  },
  bLeadingIconcFocusederr: {
    marginTop: 68,
    right: "8%",
    left: "4.53%",
  },
  bLeadingIconcFocusederr1: {
    marginTop: 149,
    right: "7.2%",
    left: "5.33%",
  },
  hello: {
    lineHeight: 19,
    color: "#8696bb",
    fontSize: FontSize.subtitle1_size,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  hiJames: {
    fontSize: FontSize.header3_size,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray_100,
    marginTop: 6,
    textAlign: "left",
  },
  profileInner: {
    top: 60,
    left: 8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 327,
    position: "absolute",
  },
  frameIcon: {
    top: 123,
    left: 132,
    width: 90,
    height: 81,
    position: "absolute",
    overflow: "hidden",
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 31,
    left: "50%",
    display: "none",
    position: "absolute",
  },
  batteryIcon: {
    marginLeft: 8.95,
    top: 0,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    marginLeft: -11.35,
    width: 15,
    top: 0,
  },
  mobileSignalIcon: {
    marginLeft: -33.35,
    width: 17,
    top: 0,
  },
  rightSide: {
    marginLeft: 102.2,
    top: 17,
    width: 67,
  },
  text: {
    top: 1,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldSubheadline,
    height: 20,
    width: 54,
    left: 0,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldSubheadline_size,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  time: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -163.5,
    top: 12,
  },
  statusBarIphone1313Pr: {
    top: 0,
    height: 44,
    overflow: "hidden",
  },
  profileChild: {
    top: 736,
    height: 65,
  },
  iconmdiArrowBack: {
    top: 44,
    left: 33,
    position: "absolute",
    overflow: "hidden",
  },
  profile: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.surface,
  },
});

export default Profile;
