import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../globalStyles";

const DetallesDeLaCita = () => {
  return (
    <View style={styles.detallesDeLaCita}>

      <View style={[styles.cita1234Wrapper, styles.cita1234Layout]}>
        <View style={[styles.cita1234, styles.cita1234Layout]}>
          <Text style={[styles.detallesDeLa, styles.frameParentPosition]}>
            Detalles de la cita
          </Text>
          <View style={[styles.frameParent, styles.frameParentPosition]}>
            <View style={styles.frameWrapper}>
              <View>
                <Text style={styles.srJhonDoe}>Sr. Jhon Doe</Text>
              </View>
            </View>
            <View style={[styles.duiParent, styles.parentSpaceBlock]}>
              <Text style={[styles.dui, styles.duiFlexBox]}>DUI:</Text>
              <Text style={[styles.text6, styles.text6Clr]}>12345678-9</Text>
            </View>
            <View style={[styles.frameContainer, styles.edadParentLayout]}>
              <View style={[styles.edadParent, styles.edadParentLayout]}>
                <Text style={[styles.dui, styles.duiFlexBox]}>Edad:</Text>
                <Text style={[styles.text6, styles.text6Clr]}>30 años</Text>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.edadParentLayout]}>
              <View style={[styles.edadParent, styles.edadParentLayout]}>
                <Text style={[styles.dui, styles.duiFlexBox]}>Doctor(a):</Text>
                <Text style={[styles.text6, styles.text6Clr]}>
                  Dra. Jane Doe
                </Text>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameWrapper1Layout]}>
              <View style={[styles.detallesParent, styles.frameWrapper1Layout]}>
                <Text style={[styles.dui, styles.duiFlexBox]}>Detalles:</Text>
                <Text style={[styles.text6, styles.text6Clr]}>
                  El motivo de la consulta
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarIphone1313PrPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 11,
    left: "50%",
  },
  batteryIconLayout: {
    width: 24,
    position: "absolute",
  },
  timeLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  duiFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  cita1234Layout: {
    height: 503,
    width: 356,
    position: "absolute",
  },
  frameParentPosition: {
    width: 323,
    left: 20,
    position: "absolute",
  },
  parentSpaceBlock: {
    padding: Padding.p_5xs,
    backgroundColor: Color.primaryColorsGray100,
    borderRadius: Border.br_9xs,
  },
  text6Clr: {
    color: Color.primaryColorsGray800,
    textAlign: "left",
  },
  edadParentLayout: {
    height: 61,
    width: 297,
  },
  frameWrapper1Layout: {
    height: 87,
    width: 297,
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 31,
    display: "none",
    left: "50%",
    position: "absolute",
  },
  batteryIcon: {
    marginLeft: 8.95,
    height: 11,
    left: "50%",
    top: 0,
  },
  wifiIcon: {
    marginLeft: -11.35,
    width: 15,
    top: 0,
    position: "absolute",
    height: 11,
  },
  mobileSignalIcon: {
    marginLeft: -33.35,
    width: 17,
    top: 0,
    position: "absolute",
    height: 11,
  },
  rightSide: {
    marginLeft: 102.2,
    top: 17,
    width: 67,
    position: "absolute",
    height: 11,
  },
  text: {
    top: 1,
    fontSize: FontSize.defaultBoldSubheadline_size,
    fontFamily: FontFamily.defaultBoldSubheadline,
    color: Color.labelColorLightPrimary,
    height: 20,
    fontWeight: "600",
    lineHeight: 20,
    width: 54,
    letterSpacing: 0,
    left: 0,
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
    height: 44,
    top: 0,
    overflow: "hidden",
  },
  detallesDeLaCitaChild: {
    top: 736,
    height: 65,
  },
  iconmdiArrowBack: {
    top: 44,
    left: 39,
    height: 24,
    overflow: "hidden",
  },
  detallesDeLa: {
    top: 24,
    fontSize: FontSize.textLgSemibold_size,
    lineHeight: 28,
    fontFamily: FontFamily.textLgSemibold,
    textAlign: "left",
    color: Color.primaryColorsGray800,
    fontWeight: "600",
  },
  srJhonDoe: {
    fontSize: 24,
    lineHeight: 24,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.paragraphBold,
    color: Color.textColorText0,
    textAlign: "left",
  },
  frameWrapper: {
    flexDirection: "row",
  },
  dui: {
    fontSize: FontSize.size_smi,
    lineHeight: 17,
    fontFamily: FontFamily.paragraphDefault,
    color: Color.primaryColorsGray500,
  },
  text6: {
    fontSize: FontSize.body2_size,
    fontWeight: "500",
    fontFamily: FontFamily.textSmMedium,
    marginTop: 8,
    textAlign: "left",
    lineHeight: 20,
  },
  duiParent: {
    height: 53,
    marginTop: 19,
    width: 297,
    padding: Padding.p_5xs,
    backgroundColor: Color.primaryColorsGray100,
    borderRadius: Border.br_9xs,
  },
  edadParent: {
    padding: Padding.p_5xs,
    backgroundColor: Color.primaryColorsGray100,
    borderRadius: Border.br_9xs,
  },
  frameContainer: {
    marginTop: 19,
    flexDirection: "row",
  },
  detallesParent: {
    padding: Padding.p_5xs,
    backgroundColor: Color.primaryColorsGray100,
    borderRadius: Border.br_9xs,
  },
  frameWrapper1: {
    marginTop: 19,
    flexDirection: "row",
  },
  frameParent: {
    top: 68,
    borderRadius: 6,
    backgroundColor: "#63b4ff",
    height: 392,
    padding: Padding.p_base,
    overflow: "hidden",
  },
  cita1234: {
    borderRadius: 13,
    left: 0,
    width: 356,
    top: 0,
    overflow: "hidden",
    backgroundColor: Color.textColorText0,
  },
  cita1234Wrapper: {
    top: 113,
    left: 10,
  },
  detallesDeLaCita: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.textColorText0,
  },
});

export default DetallesDeLaCita;
