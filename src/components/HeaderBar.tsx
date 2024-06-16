import Image from "next/image";
import Link from "next/link";

import Transactions from "../assets/icons/ChangeImageIcon";
import Schedule from "../assets/icons/Check";
import Messages from "../assets/icons/CheckBoxTick";
import Patients from "../assets/icons/CheckCircle";
import HomeIcon from "../assets/icons/CloseIcon";
import Setting from "../assets/icons/CollapseIcon";
import PencilDots from "../assets/icons/PencilDotsIcon";
import CompanyLogo from "../assets/icons/CompanyLogo.svg";
const Header = () => {
  return (
    <div className="bg-white flex justify-between items-center p-4 w-full rounded-full">
      <div>
        <Image src={CompanyLogo} alt="Company Logo" width={100} height={100} />
      </div>
      <div className="flex gap-1 items-center">
        <div className="flex gap-1 justify-between rounded-lg hover:bg-[#01F0D0] p-2 items-center">
          <HomeIcon width={14} height={14} />
          <Link href={"#"}>
            <span className="text-center text-sm">Overview</span>
          </Link>
        </div>
        <div className="flex gap-1 justify-between rounded-lg hover:bg-[#01F0D0] p-2 items-center">
          <Patients width={14} height={14} />
          <Link href={"#"}>
            <span className="text-center text-sm">Patients</span>
          </Link>
        </div>
        <div className="flex gap-1 justify-between rounded-lg hover:bg-[#01F0D0] p-2 items-center">
          <Schedule width={14} height={14} />
          <Link href={"#"}>
            <span className="text-center text-sm">Schedule</span>
          </Link>
        </div>
        <div className="flex gap-1 justify-between rounded-lg hover:bg-[#01F0D0] p-2 items-center">
          <Messages width={14} height={14} />
          <Link href={"#"}>
            <span className="text-center text-sm">Message</span>
          </Link>
        </div>
        <div className="flex gap-1 justify-between rounded-lg hover:bg-[#01F0D0] p-2 items-center">
          <Transactions width={14} height={14} />
          <Link href={"#"}>
            <span className="text-center text-sm">Transactions</span>
          </Link>
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <img
          src="https://fedskillstest.ct.digital/4.png"
          alt="Profile Image"
          width={50}
          height={50}
          className="rounded-full cursor-pointer hover:ring-2 hover:ring-white"
        />
        <div className="flex flex-col gap-1 justify-between">
          <span className="text-xs font-medium">Dr. Jose Simmons</span>
          <span className="text-xs font-medium text-[#707070]">
            General Practitioner
          </span>
        </div>
        <span className="h-full bg-gray-400 w-[4px]"></span>
        <div className="flex gap-x-2.5">
          <Setting width={14} height={14} />
          <PencilDots width={14} height={14} />
        </div>
      </div>
    </div>
  );
};

export default Header;
