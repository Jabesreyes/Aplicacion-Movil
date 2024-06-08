import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  StyleVariable,
} from "../globalStyles";
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { withNavigation } from '@react-navigation/compat';
import CrearCita from './crearCita';  
import DetallesCita from './detallesCita';  


const ListaDeCitas = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.listaDeCitas}>

      <View style={styles.buttons}>
        <View style={styles.inside}>
          <Image
            style={styles.chevronIconLayout}
            contentFit="cover"
            source={require("../assets/chevronleft@3x.png")}
          />
          <Text style={[styles.label, styles.agregarCitaText]} onPress={() => navigation.navigate('crearCita')}> Agregar Cita </Text>

          <Image
            style={[styles.chevronRightIcon, styles.chevronIconLayout]}
            contentFit="cover"
            source={require("../assets/chevronright@3x.png")}
          />
        </View>
      </View>

      <Image
        style={[styles.listaDeCitasChild, styles.listaDeCitasChildPosition]}
        contentFit="cover"
        source={require("../assets/group-1707478165@3x.png")}
      />
      <View style={[styles.wrapper, styles.viewLayout]}>
        <View style={[styles.view, styles.viewLayout]}>
          <View style={styles.frameParent}>
            <View style={styles.citasParent}>
              <Text style={[styles.citas, styles.citasTypo]}>Citas</Text>
              <View style={styles.buttons1}>
                <View style={styles.inside1}>
                  <View style={styles.inside}>
                    <Image
                      style={styles.chevronIconLayout}
                      contentFit="cover"
                      source={require("../assets/chevronleft@3x.png")}
                    />
                    <View style={styles.labelParent}>
                      <Text style={[styles.label1, styles.labelTypo]}>
                        + class
                      </Text>
                      <View style={styles.frameChild} />
                    </View>
                    <Image
                      style={[
                        styles.chevronRightIcon1,
                        styles.chevronIconLayout,
                      ]}
                      contentFit="cover"
                      source={require("../assets/chevronright@3x.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.seting1, styles.seting1SpaceBlock]}>
              <Text style={[styles.draJaneDoe, styles.citasTypo]}>
                Dra. Jane Doe - Sr. Jhon Doe
              </Text>
              <View style={styles.tabs}>
                <View style={styles.tabs1}>
                  <Text style={[styles.unselected, styles.textFlexBox]}>
                    Detalles
                  </Text>
                  <Image
                    style={styles.cheveronRightIcon}
                    contentFit="cover"
                    source={require("../assets/chevronright@3x.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.frameItem, styles.seting1SpaceBlock]} />
            <View style={[styles.seting1, styles.seting1SpaceBlock]}>
              <Text style={[styles.draJaneDoe, styles.citasTypo]}>
                Dra. Jane Doe - Sr. Jhon Doe
              </Text>
              <View style={styles.tabs}>
                <View style={styles.tabs1}>
                      <Text style={[styles.unselected, styles.textFlexBox]} onPress={() => navigation.navigate('detallesCita')}>
                    Detalles
                  </Text>
                  <Image
                    style={styles.cheveronRightIcon}
                    contentFit="cover"
                    source={require("../assets/chevronright@3x.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.frameItem, styles.seting1SpaceBlock]} />
            <View style={[styles.seting1, styles.seting1SpaceBlock]}>
              <Text style={[styles.draJaneDoe, styles.citasTypo]}>
                Dra. Jane Doe - Sr. Jhon Doe
              </Text>
              <View style={styles.tabs}>
                <View style={styles.tabs1}>
                  <Text style={[styles.unselected, styles.textFlexBox]}>
                    Detalles
                  </Text>
                  <Image
                    style={styles.cheveronRightIcon}
                    contentFit="cover"
                    source={require("../assets/chevronright@3x.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.frameItem, styles.seting1SpaceBlock]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listaDeCitasChildPosition: {
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
  textFlexBox: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  labelTypo: {
    fontFamily: FontFamily.paragraphBold,
    fontWeight: "700",
    fontSize: FontSize.body2_size,
    textAlign: "center",
  },
  chevronIconLayout: {
    height: 16,
    width: 16,
    display: "none",
  },
  viewLayout: {
    height: 283,
    width: 354,
    position: "absolute",
  },
  citasTypo: {
    textAlign: "left",
    fontFamily: FontFamily.paragraphBold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    flex: 1,
  },
  seting1SpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
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
  },
  mobileSignalIcon: {
    marginLeft: -33.35,
    width: 17,
    top: 0,
    position: "absolute",
  },
  rightSide: {
    marginLeft: 102.2,
    top: 17,
    width: 67,
    position: "absolute",
  },
  text: {
    top: 1,
    fontSize: FontSize.defaultBoldSubheadline_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldSubheadline,
    height: 20,
    width: 54,
    textAlign: "center",
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
  label: {
    color: Color.surface,
    textAlign: "center",
    fontSize: FontSize.body2_size,
    fontFamily: FontFamily.header3,
  },
  chevronRightIcon: {
    marginLeft: 8,
  },
  inside: {
    alignItems: "center",
    flexDirection: "row",
  },
  buttons: {
    top: 375,
    left: 130,
    borderRadius: Border.br_9xs,
    backgroundColor: "#1fb9fc",
    height: 36,
    justifyContent: "center",
    width: 110,
    position: "absolute",
    alignItems: 'center',
  },
  listaDeCitasChild: {
    top: 736,
    height: 65,
  },
  iconmdiArrowBack: {
    top: 45,
    left: 39,
    height: 24,
    overflow: "hidden",
  },
  citas: {
    fontSize: FontSize.header3_size,
  },
  label1: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.paragraphBold,
    fontWeight: "700",
  },
  frameChild: {
    borderColor: Color.colorsColorAction0,
    borderTopWidth: 1.5,
    height: 2,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  labelParent: {
    marginLeft: 4,
    justifyContent: "center",
  },
  chevronRightIcon1: {
    marginLeft: 4,
  },
  inside1: {
    justifyContent: "center",
    display: "none",
  },
  buttons1: {
    width: 87,
    height: 17,
    marginLeft: 16,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  citasParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  seting1Child: {
    width: 0,
    height: 40,
  },
  draJaneDoe: {
    display: "flex",
    alignSelf: "stretch",
    marginLeft: 8,
    fontSize: FontSize.body2_size,
    alignItems: "center",
  },
  unselected: {
    fontFamily: FontFamily.paragraphDefault,
    fontSize: FontSize.body2_size,
  },
  cheveronRightIcon: {
    width: 18,
    height: 18,
    marginLeft: 4,
    overflow: "hidden",
  },
  tabs1: {
    borderRadius: Border.br_30xl,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  tabs: {
    width: 85,
    height: 34,
    marginLeft: 8,
    flexDirection: "row",
  },
  seting1: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameItem: {
    borderColor: Color.bordersColorBorder1,
    borderTopWidth: 0.5,
    height: 1,
    opacity: 0.5,
    borderStyle: "solid",
  },
  frameParent: {
    height: 315,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  view: {
    paddingHorizontal: StyleVariable.spaceLg,
    paddingTop: StyleVariable.spaceSm,
    paddingBottom: StyleVariable.spaceXl,
    left: 0,
    width: 354,
    top: 0,
    overflow: "hidden",
  },
  wrapper: {
    top: 113,
    left: 9,
  },
  listaDeCitas: {
    backgroundColor: Color.textColorText0,
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
  agregarCitaText: {
    color: 'white',
  },
});

export default ListaDeCitas;
