import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';
import {Colors} from '../utils/ColorsUtil';

const courses = [
  {
    id: '1',
    title: 'Marketing',
    totalCourses: 17,
    image: require('../assets/marketing.png'),
  },
  {
    id: '2',
    title: 'UX Design',
    totalCourses: 25,
    image: require('../assets/uxdesign.png'),
  },
  {
    id: '3',
    title: 'Photography',
    totalCourses: 13,
    image: require('../assets/photography.png'),
  },
  {
    id: '4',
    title: 'Business',
    totalCourses: 20,
    image: require('../assets/business.png'),
  },
];

export default CourseList = (props) => {
  const width = Dimensions.get('window').width;

  return (
    //   Container
    <View>
      <View style={styles.courseHeader}>
        <Text style={styles.heading}>Categories</Text>
        <Text style={styles.subHeading}>See All</Text>
      </View>
      <View style={styles.listCourse}>
        <View>
          {courses.map(
            (course, index) =>
              index % 2 == 0 && (
                <ImageBackground
                  resizeMode="cover"
                  source={course.image}
                  style={[
                    styles.courseItem,
                    {
                      width: (width - 40) / 2 - 10,
                      minHeight: 250,
                      marginBottom: 20,
                    },
                  ]}
                  imageStyle={styles.courseImage}>
                  {/* <Image style={styles.courseImage} source={course.image} /> */}
                  <Text style={styles.title}>{course.title}</Text>
                  <Text style={styles.totalCourses}>
                    {course.totalCourses} Courses
                  </Text>
                </ImageBackground>
              ),
          )}
        </View>
        <View>
          {courses.map(
            (course, index) =>
              index % 2 == 1 && (
                <ImageBackground
                  resizeMode="cover"
                  source={course.image}
                  style={[
                    styles.courseItem,
                    {
                      width: (width - 40) / 2 - 10,
                      minHeight: 300,
                      marginBottom: 20,
                    },
                  ]}
                  imageStyle={styles.courseImage}>
                  {/* <Image style={styles.courseImage} source={course.image} /> */}
                  <Text style={styles.title}>{course.title}</Text>
                  <Text style={styles.totalCourses}>
                    {course.totalCourses} Courses
                  </Text>
                </ImageBackground>
              ),
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
  },
  subHeading: {
    fontSize: 18,
    color: Colors.blue,
  },
  courseImage: {
    borderRadius: 25,
  },
  title: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    fontSize: 18,
    fontWeight: '500',
  },
  totalCourses: {
    position: 'absolute',
    top: '25%',
    left: '10%',
    fontSize: 16,
    color: 'gray',
  },
  listCourse: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
