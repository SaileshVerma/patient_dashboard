import CalendarIcon from "@/assets/icons/CalendarIcon";
import CallIcon from "@/assets/icons/CallIcon";
import GenderIcon from "@/assets/icons/GenderIcon";
import { User } from "@/utils/types";
import { ReactNode } from "react";

export const UserProfileComponent = ({ user }: { user: User | undefined }) => {
  return (
    <div className="flex w-1/4 flex-col py-4 bg-white h-screen shadow rounded-lg">
      <UserProfile
        imageUrl={user?.profile_picture ?? " "}
        name={user?.name ?? ""}
      />

      <ProfileInfo
        heading="Date Of Birth"
        subheading={user?.date_of_birth ?? ""}
        icon={<CalendarIcon />}
      />
      <ProfileInfo
        heading="Gender"
        subheading={user?.gender ?? " "}
        icon={<GenderIcon />}
      />
      <ProfileInfo
        heading="Contact Info"
        subheading={user?.phone_number ?? ""}
        icon={<CallIcon />}
      />
      <ProfileInfo
        heading="Emergency Contacts"
        subheading={user?.emergency_contact ?? ""}
        icon={<CallIcon />}
      />

      <div className="flex justify-between items-center bg-[#01F0D0] rounded-full p-2 mx-4 ">
        <span className="text-sm font-bold mx-auto">Show All Information</span>
      </div>
    </div>
  );
};

const UserProfile = ({
  imageUrl,
  name,
}: {
  imageUrl: string;
  name: string;
}) => {
  return (
    <div className="flex flex-col items-center rounded">
      <img src={imageUrl} alt={name} className="w-48 h-48 rounded-full mb-4" />
      <h2 className="text-xl font-extrabold">{name}</h2>
    </div>
  );
};

const ProfileInfo = ({
  icon,
  heading,
  subheading,
}: {
  icon: ReactNode;
  heading: string;
  subheading: string;
}) => {
  return (
    <div className="flex items-center bg-white p-4 rounded">
      {icon}
      <div className="pl-2">
        <h2 className="text-sm">{heading}</h2>
        <p className="text-sm text-[#072635] font-semibold">{subheading}</p>
      </div>
    </div>
  );
};
