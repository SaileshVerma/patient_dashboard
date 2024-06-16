import { HeartRateIcon } from "@/assets/icons/HeartRateIcon";
import { RespiratoryIcon } from "@/assets/icons/RespiratoryIcon";
import { TemperatureIcon } from "@/assets/icons/TemperatureIcon";
import { BPLineChart } from "./DiagnosisBPChart";

export const DiagnosisAnalysisData = ({
  respiratoryRate,
  temperatureRate,
  heartRate,
  data,
}: {
  respiratoryRate: any;
  temperatureRate: any;
  heartRate: any;
  data: any;
}) => {
  return (
    <div className="flex-1 bg-white shadow p-4 rounded-lg w-full">
      <h1 className="text-2xl font-semibold mb-4">Diagnosis Details</h1>

      <BPLineChart data={data} />

      <div className="flex gap-4 justify-center">
        <div className="flex flex-col bg-blue-300 rounded-lg p-6">
          {/* <div className="flex"> */}

          <RespiratoryIcon />

          <div className="text pt-2">
            <h2 className="text-base">Respiratory Rate</h2>
            <h2 className="text-3xl font-bold">{respiratoryRate.value}bpm</h2>
            <p className="text-sm">{respiratoryRate.levels}</p>
            {/* </div> */}
          </div>
        </div>
        <div className="flex flex-col bg-[#FFE6E9] rounded-lg p-6">
          {/* <div className="flex"> */}

          <TemperatureIcon />

          <div className="text pt-2">
            <h2 className="text-base">Temperature</h2>
            <h2 className="text-3xl font-bold">{temperatureRate.value}F</h2>
            <p className="text-sm">{temperatureRate.levels}</p>
            {/* </div> */}
          </div>
        </div>
        <div className="flex flex-col bg-[#FFE6E9] rounded-lg p-6">
          {/* <div className="flex"> */}

          <HeartRateIcon />

          <div className="text pt-2">
            <h2 className="text-base">Heart Rate</h2>
            <h2 className="text-3xl font-bold">{heartRate.value}bpm</h2>
            <p className="text-sm">{heartRate.levels}</p>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
