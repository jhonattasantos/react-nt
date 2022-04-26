import { useNavigate } from "react-router-dom";
import { getId } from "../services/helper";
import { Person } from "../types/ProfilesProps";
import {
  faUserAstronaut,
  faUserNinja,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProfileCardProps = {
  profile: Person;
};

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  let navigate = useNavigate();

  function goToProfile() {
    const url = profile.url;
    const entity = "people";
    navigate(`/profiles/${getId({ url, entity })}`);
  }

  function bgColor(): any {
    const colors: any = {
      male: "bg-blue-500",
      female: "bg-pink-500",
    };
    return colors[profile.gender] ?? "bg-slate-500";
  }

  return (
    <div
      onClick={() => goToProfile()}
      className={`
      flex place-content-between text-white	
      h-32 p-3 m-1 rounded-lg
      cursor-pointer
      ${bgColor()}
    `}
    >
      <div
        className="
      flex flex-col justify-between
      mr-1"
      >
        <div className="flex flex-col">
          <div>
            <span>{profile.name}</span>
          </div>
        </div>

        <div>
          <span
            className="
                rounded-md py-1 px-3 mr-1 text-sm 
                border"
          >
            {profile.gender}
          </span>
        </div>
        {/* <div>
          <Button label="View" click={() => goToProfile()} />
        </div> */}
      </div>

      <div className="flex justify-items-center items-end text-7xl">
        {["male", "female"].includes(profile.gender) ? (
          <FontAwesomeIcon icon={faUserAstronaut} />
        ) : (
          <FontAwesomeIcon icon={faUserNinja} />
        )}
      </div>
    </div>
  );
};
