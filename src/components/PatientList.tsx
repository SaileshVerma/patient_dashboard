import PencilDots from "@/assets/icons/PencilDotsIcon";
import { User } from "@/utils/types";

export const PatientList = ({ userList }: { userList: User[] | undefined }) => {
  return (
    <div className="bg-white  shadow p-4 rounded-lg w-1/4">
      <h2 className="text-xl font-semibold mb-4">Patients</h2>
      {userList?.map((user: User) => {
        return (
          <PatientProfileTile
            gender={user.gender}
            image={user.profile_picture}
            name={user.name}
          />
        );
      })}
    </div>
  );
};

const PatientProfileTile = ({
  name,
  image,
  gender,
}: {
  name: string;
  image: string;
  gender: string;
}) => {
  return (
    <div className="flex gap-1 justify-between pt-2">
      <div className="flex items-center justify-center gap-2">
        <img
          src={image}
          alt="Profile Image"
          width={40}
          height={40}
          className="rounded-full cursor-pointer hover:ring-2 hover:ring-white"
        />
        <div className="flex flex-col justify-between">
          <span className="text-xs font-medium">{name}</span>
          <span className="text-xs font-medium text-[#707070]">{gender}</span>
        </div>
      </div>
      <span className="h-full bg-gray-400 w-[4px]"></span>

      <PencilDots width={14} height={14} />
    </div>
  );
};
