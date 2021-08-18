import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as React from 'react';
import {Text, View} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const timeSlots = [
  '09:00 am',
  '11:00 am',
  '01:00 pm',
  '03:00 pm',
  '05:00 pm',
  '07:00 pm',
];

const TodayScreen = () => {
  return (
    <View>
      <Text>TodayScreen</Text>
    </View>
  );
};

const TomorrowScreen = () => {
  return (
    <View>
      <Text>TomorrowScreen</Text>
    </View>
  );
};

const DayAfterTomorrowScreen = () => {
  return (
    <View>
      <Text>DayAfterTomorrowScreen</Text>
    </View>
  );
};

const AppointmentTabs = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Today" component={TodayScreen} />
      <Tab.Screen name="Tomorrow" component={TomorrowScreen} />
      <Tab.Screen
        name="Day After Tomorrow"
        component={DayAfterTomorrowScreen}
      />
    </Tab.Navigator>
  );
};

export default AppointmentTabs;
