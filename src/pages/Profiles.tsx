import { useState, useEffect } from "react";
import { Pagination } from "../components/Pagination";
import { ProfileCard } from "../components/ProfileCard";
import { getPeople } from "../services/http";
import { ProfilesProps } from "../types/ProfilesProps";

export function Profiles() {
  const [profiles, setProfiles] = useState<ProfilesProps | undefined>();
  const [loading, setLoading] = useState(false);
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = profiles ? Math.ceil(profiles.count / perPage) : 0;

  function init() {
    setLoading(true);
    getPeople(currentPage)
      .then(({ data }) => {
        setProfiles(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(init, [currentPage]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="p-4">
      <div className="mb-2">
        <h1 className="text-3xl">Desafio</h1>
      </div>
      <div
        className="
        grid grid-cols-2
      "
      >
        {profiles &&
          profiles.results.map((profile, index) => {
            return <ProfileCard profile={profile} key={index} />;
          })}
      </div>
      {profiles && (
        <div>
          <Pagination
            pages={pages}
            currentPage={currentPage}
            count={profiles.count}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}
