import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Your Sticky Notes</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        width:"100%",
        height:"20%",
        backgroundColor:Platform.OS==="android"?"purple":"white",
        paddingTop:60
    },
    headerTitle:{
      color:Platform.OS==="android"?"white":"black",
      fontSize:20,
      fontWeight:"bold",
      paddingLeft:10
    }
})