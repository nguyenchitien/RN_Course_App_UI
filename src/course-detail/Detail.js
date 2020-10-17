import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Colors} from '../utils/ColorsUtil';

const data = [
  {
    id: '1',
    title: 'Welcome to the course',
    time: '5:35',
  },
  {
    id: '2',
    title: 'Design Thinking - Intro',
    time: '19:04',
  },
  {
    id: '3',
    title: 'Design Thinking - Process',
    time: '12:48',
  },
  {
    id: '4',
    title: 'Customer Perspective',
    time: '37:54',
  },
  {
    id: '5',
    title: 'Customer Perspective',
    time: '37:54',
  },
  {
    id: '6',
    title: 'Customer Perspective',
    time: '37:54',
  },
  {
    id: '7',
    title: 'Customer Perspective',
    time: '37:54',
  },
];

export default Detail = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* header */}
          <ImageBackground
            source={require('../assets/uxdesign.png')}
            style={styles.headerBG}>
            <View style={styles.header}>
              {/* nav */}
              <View style={styles.nav}>
                <Image source={require('../assets/arrow-left.png')} />
                <Image source={require('../assets/more-vertical.png')} />
              </View>
              <View style={styles.courseDetail}>
                <ImageBackground
                  style={{
                    width: '55%',
                    height: 30,
                    justifyContent: 'center',
                    paddingStart: 10,
                  }}
                  resizeMode="stretch"
                  source={require('../assets/rect.png')}>
                  <Text style={styles.sellerText}>Bestseller</Text>
                </ImageBackground>
                <Text style={styles.courseName}>Design Thinking</Text>
                <View style={styles.rate}>
                  <View style={styles.rateItem}>
                    <Image
                      style={styles.iconText}
                      source={require('../assets/people.png')}
                    />
                    <Text style={styles.rateText}>18k</Text>
                  </View>
                  <View style={styles.rateItem}>
                    <Image
                      style={styles.iconText}
                      source={require('../assets/star.png')}
                    />
                    <Text style={styles.rateText}>4.8</Text>
                  </View>
                </View>
                {/* Price */}
                <View style={styles.priceContainer}>
                  <Text style={styles.salePrice}>$50</Text>
                  <Text style={styles.realPrice}>$70</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.courseContent}>
            <Text style={styles.contentHeading}>Course Content</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              contentContainerStyle={{paddingBottom: 80}}
              keyExtractor={(item) => item.id}
              renderItem={({item, index}) => (
                <ContentItem item={item} index={index} />
              )}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.shopingBag}>
          <Image source={require('../assets/shopping-bag.png')} />
        </View>
        <View style={styles.buyNowContainer}>
          <Text style={styles.buyNowTitle}>Buy Now</Text>
        </View>
      </View>
    </View>
  );
};

const ContentItem = ({item, index}) => {
  return (
    <View style={styles.contentItem}>
      <Text style={styles.indexer}>
        {index < 10 ? '0' + (index + 1) : index + 1}
      </Text>
      <View style={styles.mainContent}>
        <Text style={styles.courseTime}>{item.time} minus</Text>
        <Text style={styles.courseTitle}>{item.title}</Text>
      </View>
      <View style={styles.playContainer}>
        <Image source={require('../assets/play.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBG: {
    flex: 1,
    width: '100%',
    height: 400,
  },
  header: {
    padding: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  courseDetail: {
    paddingVertical: 40,
  },
  sellerText: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  courseName: {
    marginVertical: 20,
    fontSize: 35,
    fontWeight: '500',
  },
  rate: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  rateItem: {
    width: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginEnd: 10,
  },
  rateText: {
    color: Colors.gray,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  salePrice: {
    fontSize: 34,
    fontWeight: '500',
    marginEnd: 10,
  },
  realPrice: {
    color: Colors.gray,
    textDecorationLine: 'line-through',
  },
  courseContent: {
    flexGrow: 1,
    height: Dimensions.get('window').height - 370,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    position: 'relative',
    backgroundColor: Colors.sliver,
    borderColor: '#ddd',
    borderTopWidth: 1,
    top: -50,
  },
  contentHeading: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 30,
  },
  contentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  indexer: {
    color: 'gray',
    fontSize: 40,
    fontWeight: 'bold',
    opacity: 0.4,
  },
  mainContent: {
    width: '60%',
  },
  courseTime: {
    color: 'gray',
    fontSize: 16,
    lineHeight: 26,
  },
  courseTitle: {
    fontSize: 18,
  },
  playContainer: {
    alignContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: Colors.green,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    height: 80,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  shopingBag: {
    width: 80,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.pink,
  },
  buyNowContainer: {
    width: '66%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    borderRadius: 25,
  },
  buyNowTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
