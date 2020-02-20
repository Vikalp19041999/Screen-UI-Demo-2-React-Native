import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, ScrollView, FlatList } from 'react-native';

export default class Screen2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    var details = [
      {
        image: './assets/image.png',
        title: 'Accumulating Cash',
        subtitle: 'Invest your cash in short term bond so you are ready for a sudden expense or a big oppurtunity'
      },
      {
        image: './assets/image.png',
        title: 'Accumulating Cash',
        subtitle: 'Invest your cash in short term bond so you are ready for a sudden expense or a big oppurtunity'
      },
      {
        image: './assets/image.png',
        title: 'Accumulating Cash',
        subtitle: 'Invest your cash in short term bond so you are ready for a sudden expense or a big oppurtunity'
      },
      {
        image: './assets/image.png',
        title: 'Accumulating Cash',
        subtitle: 'Invest your cash in short term bond so you are ready for a sudden expense or a big oppurtunity'
      },
      {
        image: './assets/image.png',
        title: 'Accumulating Cash',
        subtitle: 'Invest your cash in short term bond so you are ready for a sudden expense or a big oppurtunity'
      },
      {
        image: './assets/image.png',
        title: 'Accumulating Cash',
        subtitle: 'Invest your cash in short term bond so you are ready for a sudden expense or a big oppurtunity'
      },
      {
        image: './assets/image.png',
        title: 'Accumulating Cash',
        subtitle: 'Invest your cash in short term bond so you are ready for a sudden expense or a big oppurtunity'
      },
      {
        image: './assets/image.png',
        title: 'Accumulating Cash',
        subtitle: 'Invest your cash in short term bond so you are ready for a sudden expense or a big oppurtunity'
      },
      {
        image: './assets/image.png',
        title: 'Accumulating Cash',
        subtitle: 'Invest your cash in short term bond so you are ready for a sudden expense or a big oppurtunity'
      },
    ]

    return (
      <View>
        <View style={styles.header}>
          <Image source={require('./assets/search-header.png')} style={styles.imageHeader}></Image>
          <Text style={styles.headerText}>Search</Text>
        </View>
        <ScrollView horizontal={true} style={styles.scroller}>
          <Text style={[styles.scroll, styles.theme]}>Theme</Text>
          <Text style={styles.scroll}>Companies</Text>
          <Text style={styles.scroll}>Tech and Gaming</Text>
          <Text style={styles.scroll}>Others</Text>
          <Text style={styles.scroll}>Views</Text>
          <Text style={styles.scroll}>Logout</Text>
        </ScrollView>
        <ScrollView style={styles.scrollview}>
          <FlatList data={details}
            renderItem={({ item }) =>
              <View style={styles.row}>
                <Image style={styles.image} source={{ uri: item.image }}></Image>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.text}>{item.subtitle}</Text>
                </View>
              </View>}>
          </FlatList>
        </ScrollView>
        <ScrollView horizontal={true} style={styles.bottomScroll}>
          <View style={styles.card}>
            <Image style={styles.imageSmall} source={require('./assets/plus.png')}></Image>
            <View>
              <Text style={styles.Smalltitle}>  College</Text>
            </View>
            <Image style={styles.imageSmall} source={require('./assets/car.png')}></Image>
          </View>
          <View style={styles.card}>
            <Image style={styles.imageSmall} source={require('./assets/plus.png')}></Image>
            <View>
              <Text style={styles.Smalltitle}>  First Car</Text>
            </View>
            <Image style={styles.imageSmall} source={require('./assets/car.png')}></Image>
          </View>
          <View style={styles.card}>
            <Image style={styles.imageSmall} source={require('./assets/plus.png')}></Image>
            <View>
              <Text style={styles.Smalltitle}>  College</Text>
            </View>
            <Image style={styles.imageSmall} source={require('./assets/car.png')}></Image>
          </View>
        </ScrollView>
        <View style={styles.tabBar}>
          <Image source={require('./assets/thunder.png')} style={styles.tabIcons}></Image>
          <Image source={require('./assets/search.png')} style={styles.tabIcons}></Image>
          <Image source={require('./assets/menu.png')} style={[styles.tabIcons]}></Image>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 0.67,
    paddingLeft: 15,
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 15,
    height: '8%',
    marginTop: 8,
    paddingLeft: 20
  },
  headerText: {
    fontSize: 35,
    marginTop: 8,
    fontWeight: 'normal',
    color: '#25CCF7'
  },
  scroll: {
    color: '#25CCF7',
    fontSize: 20,
    margin: 10,
  },
  image: {
    height: 85,
    width: 85,
    borderRadius: 85,
    marginRight: 10,
    borderWidth: 0.1,
    borderColor: 'black'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    padding: 15,
    paddingRight: 5,
    paddingBottom: 10
  },
  text: {
    fontSize: 17,
    marginRight: 100,
  },
  scroller: {
    height: 60,
    marginTop: 12,
    marginBottom: 15
  },
  bottomScroll: {
    flexDirection: 'row',

    marginRight: 5
  },
  card: {
    paddingTop: 13,
    height: 50,
    width: 160,
    backgroundColor: '#0abde3',
    flexDirection: 'row',
    marginRight: 5
  },
  imageSmall: {
    height: 30,
    width: 30,
    paddingRight: 10
  },
  Smalltitle: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingRight: 20,
    color: 'snow'
  },
  imageHeader: {
    height: 38,
    width: 35,
    borderRadius: 50,
    marginRight: 10,
    marginTop: 10,
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    height: 50,
  },
  tabIcons: {
    height: 35,
    width: 35,
    margin: 45
  },
  scrollview: {
    height: '61%',
    marginBottom: 20
  },
  theme: {
    color: 'black',
    fontWeight: 'bold'
  }
})