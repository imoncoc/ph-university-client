import React from "react";
import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log("data: gt seme: ", data);

  return <div>AcademicSemester</div>;
};

export default AcademicSemester;
