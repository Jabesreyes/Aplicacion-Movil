import React, { useState } from 'react'
import { Image } from "expo-image";
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View, Text, TextInput } from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
  StyleVariable,
} from "../globalStyles";

const CrearCita = () => {

  const [name, setName] = useState('');
  const [dui, setDui] = useState('');
  const [edad, setEdad] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedMessage, setSelectedMessage] = useState('');

  return (
    <View style={styles.crearCita}>

      <View style={styles.crearCitaInner}>
        <View style={styles.frameParent}>
          <View style={styles.crearCitaParent}>
            <Text style={[styles.crearCita1, styles.crearCita1Clr]}>
              Crear Cita
            </Text>
            <View style={styles.formSpaceBlock}>
              <View style={[styles.category, styles.insideFlexBox]}>
                <Text style={styles.category1}>Nombre del paciente</Text>
              </View>
              <View style={styles.frameGroup}>
              <View style={[styles.searchParent, styles.insideFlexBox]}>
                <TextInput
                  style={[styles.placeholder, styles.placeholderTypo]}
                  placeholder="Ej. Jhon Doe"
                  value={name}
                  onChangeText={setName}
                />
              </View>
            </View>
              <Text style={[styles.explanation, styles.explanationTypo]}>
                Explanation
              </Text>
            </View>
            <View style={styles.formSpaceBlock}>
              <View style={[styles.category, styles.insideFlexBox]}>
                <Text style={styles.category1}>DUI</Text>
              </View>
              <View style={styles.frameContainer}>
                <View style={[styles.searchParent, styles.insideFlexBox]}>
                  <Text style={[styles.placeholder1, styles.crearCita1Clr]}>
                    <Text style={styles.mgt101}>
                      MGT 101 - Organization Management
                    </Text>
                  </Text>
                </View>
              </View>
              <Text style={[styles.explanation, styles.explanationTypo]}>
                Explanation
              </Text>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.searchParent, styles.insideFlexBox]}>
                <TextInput
                  style={styles.category1}
                  placeholder="DUI"
                  value={dui}
                  onChangeText={setDui}
                />
              </View>
            </View>
            <View style={styles.formSpaceBlock}>
              <View style={[styles.category, styles.insideFlexBox]}>
                <Text style={styles.category1}>Edad</Text>
              </View>
              <View style={styles.frameContainer}>
                <View style={[styles.searchParent, styles.insideFlexBox]}>
                  <Text style={[styles.placeholder1, styles.crearCita1Clr]}>
                    <Text style={styles.mgt101}>
                      MGT 101 - Organization Management
                    </Text>
                  </Text>
                </View>
              </View>
              <Text style={[styles.explanation, styles.explanationTypo]}>
                Explanation
              </Text>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.searchParent, styles.insideFlexBox]}>
                <TextInput
                  style={styles.category1}
                  placeholder="Ej. : 30"
                  value={edad}
                  onChangeText={setEdad}
                />
              </View>
            </View>
            <View style={styles.formSpaceBlock}>
              <View style={[styles.category, styles.insideFlexBox]}>
                <Text style={styles.category1}>Nombre del doctor</Text>
              </View>
              <View style={styles.frameContainer}>
                <View style={[styles.searchParent, styles.insideFlexBox]}>
                  <Text style={[styles.placeholder1, styles.crearCita1Clr]}>
                    <Text style={styles.mgt101}>
                      MGT 101 - Organization Management
                    </Text>
                  </Text>
                </View>
              </View>
              <Text style={[styles.explanation, styles.explanationTypo]}>
                Explanation
              </Text>
            </View>
            <View style={styles.frameView}>
                  <View style={styles.searchParent}>
                    <Picker
                      selectedValue={selectedDoctor}
                      onValueChange={(itemValue) => setSelectedDoctor(itemValue)}
                      style={styles.picker}
                    >
                      <Picker.Item label="Selecciona un doctor" value="" />
                      <Picker.Item label="Dra. Jane Doe" value="jane_doe" />
                      <Picker.Item label="Dr. John Smith" value="john_smith" />
                      <Picker.Item label="Dra. Ana Perez" value="ana_perez" />
                    </Picker>
                  </View>
                </View>
            <View style={styles.formSpaceBlock}>
              <View style={styles.category}>
                            
                        </View>
              <View style={styles.frameContainer}>
                <View style={[styles.searchParent, styles.insideFlexBox]}>
                  <Text style={[styles.placeholder1, styles.crearCita1Clr]}>
                    <Text style={styles.mgt101}>
                      MGT 101 - Organization Management
                    </Text>
                  </Text>
                </View>
              </View>
              <Text style={[styles.explanation, styles.explanationTypo]}>
                Explanation
              </Text>
            </View>
            <View style={styles.frameView}>
              <View style={styles.searchParent}>
                <Picker
                          selectedValue={selectedDate}
                          onValueChange={(itemValue) => setSelectedDate(itemValue)}
                          style={styles.picker}
                        >
                          <Picker.Item label="Selecciona un horario" value="" />
                          <Picker.Item label="9 A.M." value="9am" />
                          <Picker.Item label="10 A.M." value="10am" />
                          <Picker.Item label="11 A.M." value="11am" />
                          <Picker.Item label="12 M.D." value="12md" />
                          <Picker.Item label="1 P.M." value="1pm" />
                        </Picker>  
              </View>
            </View>
            <View
              style={[styles.formInputsdefaultempty, styles.formSpaceBlock]}
            >
              <Text style={styles.category10}>Detalles</Text>
              <View style={styles.placeholderWrapper}>
                <TextInput
                  style={styles.category1}
                  placeholder="Escriba aquí comentarios relevantes"
                  value={selectedMessage}
                  onChangeText={setSelectedMessage}
                />
              </View>
              <Text style={[styles.explanation5, styles.explanationTypo]}>
                Explanation
              </Text>
            </View>
          </View>
          <View style={styles.frameChild} />
        </View>
      </View>
      <View style={styles.buttonsParent}>
        <View style={[styles.buttons, styles.buttonsFlexBox]}>
          <View style={styles.insideFlexBox}>
            <Image
              style={[styles.searchIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/chevronleft@3x.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Cancelar</Text>
            <Image
              style={[styles.chevronDownIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/chevronright@3x.png")}
            />
          </View>
        </View>
        <View style={[styles.buttons, styles.buttonsFlexBox]}>
          <View style={styles.insideFlexBox}>
            <Image
              style={[styles.searchIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/chevronleft@3x.png")}
            />
            <Text style={[styles.label1, styles.labelTypo]}>Guardar</Text>
            <Image
              style={[styles.chevronDownIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/chevronright@3x.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.crearCitaChild}
        contentFit="cover"
        source={require("../assets/group-1707478165@3x.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
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
  crearCita1Clr: {
    color: Color.colorGray_100,
    textAlign: "left",
  },
  insideFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  placeholderTypo: {
    opacity: 0.4,
    fontFamily: FontFamily.paragraphDefault,
    fontSize: FontSize.body2_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  explanationTypo: {
    color: Color.bordersColorBorder1,
    fontSize: FontSize.caption_size,
    marginTop: 8,
    textAlign: "left",
    alignSelf: "stretch",
    display: "none",
  },
  formSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  buttonsFlexBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    height: 36,
    borderRadius: Border.br_9xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  labelTypo: {
    fontFamily: FontFamily.paragraphBold,
    fontWeight: "700",
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
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    width: 54,
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
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  crearCita1: {
    fontSize: FontSize.header3_size,
    textAlign: "left",
    fontFamily: FontFamily.paragraphBold,
    fontWeight: "700",
  },
  category1: {
    fontFamily: FontFamily.paragraphDefault,
    fontSize: FontSize.body2_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  category: {
    alignSelf: "stretch",
  },
  searchIcon: {
    display: "none",
  },
  placeholder: {
    marginLeft: 8,
  },
  searchParent: {
    flex: 1,
  },
  chevronDownIcon: {
    marginLeft: 8,
    display: "none",
  },
  frameGroup: {
    marginTop: 8,
    padding: Padding.p_5xs,
    borderWidth: 0.5,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    height: 44,
  },
  explanation: {
    fontFamily: FontFamily.paragraphBold,
    fontWeight: "700",
  },
  mgt101: {
    fontFamily: FontFamily.paragraphDefault,
  },
  placeholder1: {
    marginLeft: 8,
    fontSize: FontSize.body2_size,
    textAlign: "left",
  },
  chevronDownIcon1: {
    marginLeft: 8,
  },
  frameContainer: {
    borderColor: Color.bordersColorBorder1,
    marginTop: 8,
    padding: Padding.p_5xs,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    display: "none",
    height: 44,
  },
  frameView: {
    padding: Padding.p_5xs,
    borderWidth: 0.5,
    borderRadius: Border.br_5xs,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 16,
    alignSelf: "stretch",
    height: 44,
  },
  draJaneDoe: {
    marginLeft: 8,
    fontFamily: FontFamily.paragraphDefault,
    fontSize: FontSize.body2_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  category10: {
    fontFamily: FontFamily.paragraphDefault,
    fontSize: FontSize.body2_size,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.labelColorLightPrimary,
  },
  placeholderWrapper: {
    height: 81,
    padding: Padding.p_xs,
    borderRadius: Border.br_9xs,
    borderColor: Color.bordersColorBorder1,
    marginTop: 8,
    borderWidth: 0.5,
    borderStyle: "solid",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  explanation5: {
    fontFamily: FontFamily.paragraphDefault,
  },
  formInputsdefaultempty: {
    height: 92,
  },
  crearCitaParent: {
    alignSelf: "stretch",
  },
  frameChild: {
    borderTopWidth: 0.2,
    height: 0,
    marginTop: 24,
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  frameParent: {
    paddingHorizontal: StyleVariable.spaceLg,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  crearCitaInner: {
    top: 73,
    left: 8,
    width: 342,
    height: 381,
    position: "absolute",
  },
  label: {
    color: Color.textColorText2,
    marginLeft: 8,
    fontSize: FontSize.body2_size,
    textAlign: "center",
  },
  buttons: {
    borderColor: Color.colorsColorAction0,
    borderWidth: 1.5,
    width: 76,
    borderStyle: "solid",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    height: 36,
  },
  label1: {
    color: Color.textColorText0,
    marginLeft: 8,
    fontSize: FontSize.body2_size,
    textAlign: "center",
  },
  buttons1: {
    backgroundColor: Color.colorDeepskyblue_100,
    marginLeft: 8,
  },
  buttonsParent: {
    top: 697,
    left: 96,
    flexDirection: "row",
    position: "absolute",
  },
  crearCitaChild: {
    top: 733,
    height: 65,
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconmdiArrowBack: {
    top: 44,
    left: 33,
    height: 24,
    overflow: "hidden",
  },
  crearCita: {
    backgroundColor: Color.textColorText0,
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
});

export default CrearCita;
