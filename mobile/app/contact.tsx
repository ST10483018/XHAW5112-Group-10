import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, KeyboardAvoidingView, Platform,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '@/components/navigationbar';
import { WebView } from 'react-native-webview';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    // this is for form submission logic
    console.log('Form submitted:', form);
    alert('Message submitted!');
    setForm({
    name: '',
    surname: '',
    email: '',
    message: '',
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <NavigationBar title="Contact" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.heading}>Contact Form</Text>

          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={form.name}
            onChangeText={(text) => handleChange('name', text)}
          />

          <Text style={styles.label}>Surname</Text>
          <TextInput
            style={styles.input}
            placeholder="Surname"
            value={form.surname}
            onChangeText={(text) => handleChange('surname', text)}
          />

          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={form.email}
            onChangeText={(text) => handleChange('email', text)}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Type your message"
            multiline
            value={form.message}
            onChangeText={(text) => handleChange('message', text)}
          />

          
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <Text style={[styles.heading, { marginTop: 40 }]}>Our Locations</Text>

          <View style={styles.mapContainer}>
            <WebView
              source={{
                uri: 'https://www.bing.com/maps?&ty=18&q=Fourways%20Mall%2C%20G025%2FG029%2C%20Fourways%20Shopping%20Centre%2C%20C%2Fo%20William%20Nichol%20and%20Witkoppen%20Roadvard%2C%20Randburg%20North%2C%20South%20Africa&ss=ypid.YN8202x15760335909300336679&mb=-26.011975~27.996104~-26.02555~28.016832&description=G025%2FG029%2C%20Fourways%20Shopping%20Centre%2C%20C%2Fo%20William%20Nichol%20and%20Witkoppen%20Roadvard%20Randburg%20North%202055%C2%B7Retail&cardbg=%23768DF1&dt=1760108400000&tt=Fourways%20Mall&tsts0=%2526ty%253D18%2526q%253DFourways%252520Mall%25252C%252520G025%25252FG029%25252C%252520Fourways%252520Shopping%252520Centre%25252C%252520C%25252Fo%252520William%252520Nichol%252520and%252520Witkoppen%252520Roadvard%25252C%252520Randburg%252520North%25252C%252520South%252520Africa%2526ss%253Dypid.YN8202x15760335909300336679%2526mb%253D-26.011975~27.996104~-26.02555~28.016832%2526description%253DG025%25252FG029%25252C%252520Fourways%252520Shopping%252520Centre%25252C%252520C%25252Fo%252520William%252520Nichol%252520and%252520Witkoppen%252520Roadvard%252520Randburg%252520North%2525202055%2525C2%2525B7Retail%2526cardbg%253D%252523768DF1%2526dt%253D1760108400000&tstt0=Fourways%20Mall&cp=-26.018763~28.001146&lvl=16&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027',
              }}
              style={styles.map}
            />

            <WebView
              source={{
                uri: 'https://www.bing.com/maps?&ty=18&ss=ypid.YN8202x7810658811951109176&mb=-26.055883~27.826086~-26.066595~27.84421&description=Corner%20Furrow%20Road%20and%20Hendrik%20Potgieter%20Road%2C%20Muldersdrift%2C%20Krugersdorp%20Krugersdorp%201747%C2%B7Retail&dt=1760108400000&tt=Cradlestone%20Mall&tsts1=%2526ty%253D18%2526ss%253Dypid.YN8202x7810658811951109176%2526mb%253D-26.055883~27.826086~-26.066595~27.84421%2526description%253DCorner%252520Furrow%252520Road%252520and%252520Hendrik%252520Potgieter%252520Road%25252C%252520Muldersdrift%25252C%252520Krugersdorp%252520Krugersdorp%2525201747%2525C2%2525B7Retail%2526dt%253D1760108400000&tstt1=Cradlestone%20Mall&cp=-26.061245~27.83182&lvl=16.34117&pi=0&ftst=1&ftics=True&v=2&sV=2&form=S00027',
              }}
              style={styles.map}
            />

            <WebView
              source={{
                uri: 'https://www.bing.com/maps?&ty=18&q=Mall%20of%20Africa%2C%20Magwa%20Cres%2C%20Midrand%2C%20South%20Africa&ss=ypid.YN8202x14350008014875551990&mb=-26.007116~28.097234~-26.020691~28.117962&description=Magwa%20Cres%20Midrand%201686%C2%B7Retail&cardbg=%23768DF1&dt=1760112000000&tt=Mall%20of%20Africa&tsts0=%2526ty%253D18%2526q%253DMall%252520of%252520Africa%25252C%252520Magwa%252520Cres%25252C%252520Midrand%25252C%252520South%252520Africa%2526ss%253Dypid.YN8202x14350008014875551990%2526mb%253D-26.007116~28.097234~-26.020691~28.117962%2526description%253DMagwa%252520Cres%252520Midrand%2525201686%2525C2%2525B7Retail%2526cardbg%253D%252523768DF1%2526dt%253D1760112000000&tstt0=Mall%20of%20Africa&cp=-26.013904~28.102276&lvl=16&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027',
              }}
              style={styles.map}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 100,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
  },
  mapContainer: {
    marginTop: 20,
    marginBottom: -98,
  },
  map: {
    height: 300,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2C2C2C',
    paddingVertical: 6,
    paddingHorizontal: 11,
    width: 120,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: -10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Contact;
