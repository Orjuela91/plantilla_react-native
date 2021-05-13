/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  NativeModules,
  Platform,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {RNHTMLtoPDF} from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';

import AsyncStorage from '@react-native-community/async-storage';

export default class RNPrintExample extends Component {
  state = {
    selectedPrinter: null
  }

  // @NOTE iOS Only
  selectPrinter = async () => {
    const selectedPrinter = await RNPrint.selectPrinter({ x: 100, y: 100 })
    this.setState({ selectedPrinter })
  }

  // @NOTE iOS Only
  silentPrint = async () => {
    if (!this.state.selectedPrinter) {
      alert('Must Select Printer First')
    }

    const jobName = await RNPrint.print({
      printerURL: this.state.selectedPrinter.url,
      html: '<h1>Silent Print</h1>'
    })

  }

  async printHTML() {
    await RNPrint.print({
      html: '<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3>'
    })
  }

  async printPDF() {
    const results = await RNHTMLtoPDF.convert({
      html: '<h1>Custom converted PDF Document</h1>',
      fileName: 'test',
      base64: true,
    })

    await RNPrint.print({ filePath: results.filePath })
  }

   printRemotePDF = async (solicitud) => {
    let userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'));
    await RNPrint.print({ filePath: "https://logiconomina.com/api/api/getpdf/"+userInfo.user_id+"/"+solicitud })
  }

  customOptions = () => {
    return (
      <View>
        {this.state.selectedPrinter &&
          <View>
            <Text>{`Selected Printer Name: ${this.state.selectedPrinter.name}`}</Text>
            <Text>{`Selected Printer URI: ${this.state.selectedPrinter.url}`}</Text>
          </View>
        }
      <Button onPress={this.selectPrinter} title="Select Printer" />
      <Button onPress={this.silentPrint} title="Silent Print" />
    </View>

    )
  }

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && this.customOptions()}
        {/* certificado Laboral */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {this.printRemotePDF("certificado_laboral")}}
        >
          <LinearGradient
            colors={['#fbbd3f', '#fbbd3f']}
            style={styles.button}
          >
            <Text style={[styles.text, {
              color:'#fff'
            }]}>Certificado Laboral</Text>
          </LinearGradient>
        </TouchableOpacity>
        {/* Desprendible de Pago */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {this.printRemotePDF("desprendible_pago")}}
        >
          <LinearGradient
            colors={['#fbbd3f', '#fbbd3f']}
            style={styles.button}
          >
            <Text style={[styles.text, {
              color:'#fff'
            }]}>Desprendible de Pago</Text>
          </LinearGradient>
        </TouchableOpacity>
        {/* Hoja de vida */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {this.printRemotePDF("hoja_vida")}}
        >
          <LinearGradient
            colors={['#fbbd3f', '#fbbd3f']}
            style={styles.button}
          >
            <Text style={[styles.text, {
              color:'#fff'
            }]}>Hoja de vida</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  text: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});