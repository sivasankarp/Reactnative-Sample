import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import Contacts from 'react-native-contacts';

const ContactsScreen = ({navigation}) => {
  const [contactsArray, setContacts] = useState([]);
  Contacts.getAll().then(contacts => {
    setContacts(contacts);
  });
  return (
    <FlatList
      data={contactsArray}
      contentContainerStyle={styles.body}
      renderItem={({item}) => {
        console.log({item});
        const {givenName, familyName} = item;
        return (
          <View>
            <Text>{`${givenName} ${familyName}`}</Text>
          </View>
        );
      }}
    />
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },
});
