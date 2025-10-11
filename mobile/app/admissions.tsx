import React, { useState, useMemo } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigationBar from "@/components/navigationbar";
import DropDownPicker, { ItemType } from "react-native-dropdown-picker";
import { useStudent } from "@/app/studentcontext";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// --- Types ---
type Course = {
  label: string;
  value: string;
  price: number;
};

type FormState = {
  name: string;
  surname: string;
  email: string;
  password: string;
  id: string;
  address: string;
};

// --- Component ---
const Admissions: React.FC = () => {
  const navigation = useNavigation<any>();
  const { setStudent } = useStudent();

  const courses: Course[] = [
    { label: "Sewing (R1500)", value: "Sewing", price: 1500 },
    { label: "First Aid (R1500)", value: "First Aid", price: 1500 },
    { label: "Child Minding (R750)", value: "Child Minding", price: 750 },
    { label: "Landscaping (R1500)", value: "Landscaping", price: 1500 },
    { label: "Garden Maintenance (R750)", value: "Garden Maintenance", price: 750 },
    { label: "Cooking (R750)", value: "Cooking", price: 750 },
    { label: "Life Skills (R1500)", value: "Life Skills", price: 1500 },
  ];

  const [open, setOpen] = useState<boolean>(false);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [form, setForm] = useState<FormState>({
    name: "",
    surname: "",
    email: "",
    password: "",
    id: "",
    address: "",
  });

  // --- Discount logic ---
  const discountPercentage = useMemo<number>(() => {
    const count = selectedCourses.length;
    if (count === 2) return 5;
    if (count === 3) return 10;
    if (count > 3) return 15;
    return 0;
  }, [selectedCourses]);

  // --- Fee calculation ---
  const totalFee = useMemo<string>(() => {
    const subtotal = selectedCourses.reduce((sum, value) => {
      const course = courses.find((c) => c.value === value);
      return sum + (course ? course.price : 0);
    }, 0);

    const discount = subtotal * (discountPercentage / 100);
    const vat = (subtotal - discount) * 0.15;
    return (subtotal - discount + vat).toFixed(2);
  }, [selectedCourses, discountPercentage]);

  // --- Handle Deposit ---
  const handleDeposit = () => {
    if (!form.name || !form.surname || selectedCourses.length === 0) {
      Alert.alert("Missing Information", "Please fill in all required fields.");
      return;
    }

    const courseStartDates: Record<string, string> = {
      Sewing: "8th February 2026",
      "First Aid": "27th March 2026",
      Cooking: "27th March 2026",
      Landscaping: "8th February 2026",
      "Life Skills": "10th March 2026",
      "Garden Maintenance": "15th March 2026",
      "Child Minding": "5th April 2026",
    };

    const selectedCourseList = selectedCourses.map((course) => ({
      name: course,
      startDate: courseStartDates[course] || "TBA",
    }));

    setStudent({
      name: form.name,
      surname: form.surname,
      studentNumber: Math.floor(Math.random() * 90000000 + 10000000).toString(),
      courses: selectedCourseList,
      status: "Pending",
      message:
        "Your application is currently being processed. Look out for updates here soon.",
      amountDue: `R${totalFee}`,
    });

    Alert.alert("Success", "Application submitted!");
    navigation.navigate("updates");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Your Navigation Bar */}
      <NavigationBar title="Admissions" />

      {/* Admissions Form */}
      <ScrollView
        contentContainerStyle={{ padding: 20, paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          style={styles.input}
          placeholder="Name:"
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Surname"
          value={form.surname}
          onChangeText={(text) => setForm({ ...form, surname: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address:"
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={form.password}
          onChangeText={(text) => setForm({ ...form, password: text })}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="ID/Passport"
          value={form.id}
          onChangeText={(text) => setForm({ ...form, id: text })}
        />
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Physical Address"
          value={form.address}
          multiline
          onChangeText={(text) => setForm({ ...form, address: text })}
        />

        {/* Dropdown Picker */}
        <DropDownPicker
          open={open}
          value={selectedCourses}
          items={
            courses.map((c) => ({
              label: c.label,
              value: c.value,
            })) as ItemType<string>[]
          }
          setOpen={setOpen}
          setValue={setSelectedCourses}
          multiple={true}
          placeholder="Select Courses"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          listMode="SCROLLVIEW"
        />

        {/* Total + Discount */}
        <Text style={styles.totalText}>
          Total Fee (including 15% VAT): R{totalFee}
        </Text>

        {discountPercentage > 0 && (
          <Text style={styles.discountText}>
            Discount Applied: {discountPercentage}%
          </Text>
        )}

        {/* Deposit Button */}
        <TouchableOpacity style={styles.button} onPress={handleDeposit} >
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          Discount will be applied automatically if applicable
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Admissions;

// --- Styles ---
const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
  },
  dropdown: {
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
    borderWidth: 0,
    elevation: 2,
    marginTop: 5,
  },
  dropdownContainer: {
    borderWidth: 0,
    elevation: 2,
  },
  totalText: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  discountText: {
    textAlign: "center",
    color: "green",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  note: {
    textAlign: "center",
    color: "#666",
    marginTop: 10,
    fontSize: 12,
  },
});
