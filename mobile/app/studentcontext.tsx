import React, { createContext, useContext, useState, ReactNode } from "react";

type Course = {
  name: string;
  startDate: string;
};

type Student = {
  name: string;
  surname: string;
  studentNumber: string;
  courses: Course[];
  status: string;
  message: string;
  amountDue: string;
};

type StudentContextType = {
  student: Student | null;
  setStudent: (student: Student) => void;
};

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [student, setStudent] = useState<Student | null>(null);
  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = (): StudentContextType => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudent must be used within a StudentProvider");
  }
  return context;
};

export default StudentProvider;
