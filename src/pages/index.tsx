import { Inter } from "next/font/google";
import { UserProfileComponent } from "@/components/UserProfile";
import Header from "@/components/HeaderBar";
import { useState } from "react";
import axios from "axios";
import { User } from "@/utils/types";
import { PatientList } from "@/components/PatientList";
import { DiagnosisAnalysisData } from "@/components/DiagnosisAnalyticsData";
import { DiagnosisList } from "@/components/DiagnosisList";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  user,
  userList,
}: {
  user: User | undefined;
  userList: User[];
}) {
  const [userData, setUserData] = useState<User | undefined>(user);

  return (
    <main className="p-4 flex-col  gap-4 items-center bg-[#F6F7F8] text-[#072635]">
      <Header />
      <div className="flex gap-4 pt-4">
        <PatientList userList={userList} />
        {/* Main Content */}
        <div className="flex-grow flex-col ">
          <DiagnosisAnalysisData
            heartRate={user?.diagnosis_history[0].heart_rate}
            respiratoryRate={user?.diagnosis_history[0].respiratory_rate}
            temperatureRate={user?.diagnosis_history[0].temperature}
            data={user?.diagnosis_history}
          />
          <DiagnosisList diagnosticList={user?.diagnostic_list ?? []} />
        </div>
        {/* User Profile */}
        <UserProfileComponent user={userData} />
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  let username = process.env.APP_USERNAME;
  let password = process.env.APP_PASSWORD;

  let auth = btoa(`${username}:${password}`);

  const authHeaders = {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  };

  const fetchUserData = async () => {
    const response = await axios.get(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      authHeaders
    );
    return response.data;
  };

  let response = await fetchUserData();

  return {
    props: {
      userList: response,
      user: response[0],
    },
  };
};
