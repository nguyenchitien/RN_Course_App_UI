import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {Colors} from '../utils/ColorsUtil';
import CourseList from './CourseList';

export default Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image style={styles.icon} source={require('../assets/menu.png')} />
          <Image style={styles.icon} source={require('../assets/avatar.png')} />
        </View>
        {/* Search */}
        <View style={styles.section}>
          <View>
            <Text style={styles.heading}>Hey Alex</Text>
            <Text style={styles.description}>
              Find a course you want to learn
            </Text>
          </View>
          {/* Search Input Container*/}
          <View style={styles.searchInputContainer}>
            <Image
              style={[styles.icon, {marginRight: 15}]}
              source={require('../assets/search.png')}
            />
            <TextInput placeholder="Search for anything" />
          </View>
          <CourseList />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 40,
  },
  icon: {
    width: 30,
    height: 30,
  },
  section: {
    marginVertical: 40,
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 15,
  },
  description: {
    color: Colors.gray,
    fontSize: 18,
    marginBottom: 15,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
    backgroundColor: Colors.sliver,
    marginVertical: 30,
  },
  seeAll: {
    color: Colors.blue,
  },
});
