import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { Card } from "../components/Card";
import { Tab } from "../components/Tab";
import { TabPanel } from "../components/TabPanel";
import { Tabs } from "../components/Tabs";
import { getId, getRelationship } from "../services/helper";
import {
  getPerson,
  getPlanet,
  getFilms,
  getSpecies,
  getVehicles,
  getStarships,
} from "../services/http";
import { Person } from "../types/ProfilesProps";

export function Profile() {
  let params = useParams();
  const { t } = useTranslation();

  const [person, setPerson] = useState<Person | undefined>();
  const [loading, setLoading] = useState(false);
  const [toggleState, setToggleState] = useState("homeworld");

  function init() {
    setLoading(true);
    if (params.profileId) {
      const fetchData = async () => {
        const personData = await getPerson(String(params.profileId));
        const homeworlUrl = String(personData.data.homeworld);
        const homeworldId = getId({ url: homeworlUrl, entity: "planets" });

        const planetData = await getPlanet(homeworldId);
        const planet = planetData.data;

        const films = await getRelationship(
          "films",
          personData.data.films,
          getFilms
        );

        const species = await getRelationship(
          "species",
          personData.data.species,
          getSpecies
        );

        const vehicles = await getRelationship(
          "vehicles",
          personData.data.vehicles,
          getVehicles
        );

        const starships = await getRelationship(
          "starships",
          personData.data.starships,
          getStarships
        );

        setPerson({
          ...personData.data,
          homeworld: planet,
          films,
          species,
          vehicles,
          starships,
        });
        setLoading(false);
      };

      fetchData();
    }
  }

  useEffect(init, []);

  const toogleTab = (slug: string) => {
    setToggleState(slug);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="p-4">
      {person && (
        <>
          <h1 className="text-3xl">{person.name}</h1>

          <Tabs>
            <Tab
              label="Homeworld"
              active={toggleState === "homeworld"}
              click={() => toogleTab("homeworld")}
            />

            <Tab
              label="Films"
              active={toggleState === "films"}
              click={() => toogleTab("films")}
            />

            <Tab
              label="Species"
              active={toggleState === "species"}
              click={() => toogleTab("species")}
            />

            <Tab
              label="vehicles"
              active={toggleState === "vehicles"}
              click={() => toogleTab("vehicles")}
            />

            <Tab
              label="Starships"
              active={toggleState === "starships"}
              click={() => toogleTab("starships")}
            />
          </Tabs>

          <TabPanel value={toggleState} slug="homeworld">
            <h1>Homeworld Content</h1>
            <Card
              title={person.homeworld.name}
              description={person.homeworld.diameter}
            >
              <ul>
                <li>name: {person.homeworld.name}</li>
                <li>rotation_period: {person.homeworld.rotation_period}</li>
                <li>orbital_period: {person.homeworld.orbital_period}</li>
                <li>diameter: {person.homeworld.diameter}</li>
                <li>climate: {person.homeworld.climate}</li>
                <li>gravity: {person.homeworld.gravity}</li>
                <li>terrain: {person.homeworld.terrain}</li>
                <li>surface_water: {person.homeworld.surface_water}</li>
                <li>population: {person.homeworld.population}</li>
              </ul>
            </Card>
          </TabPanel>

          <TabPanel value={toggleState} slug="films">
            <div>
              {person.films.map((film, index) => {
                return (
                  <Card
                    key={index}
                    title={film.title}
                    description={film.opening_crawl}
                  />
                );
              })}
            </div>
          </TabPanel>

          <TabPanel value={toggleState} slug="species">
            {person.species.map((specie, index) => {
              return (
                <Card
                  key={index}
                  title={specie.name}
                  description={specie.classification}
                />
              );
            })}
          </TabPanel>

          <TabPanel value={toggleState} slug="vehicles">
            {person.vehicles.map((vehicle, index) => {
              return (
                <Card
                  key={index}
                  title={vehicle.name}
                  description={vehicle.model}
                />
              );
            })}
          </TabPanel>

          <TabPanel value={toggleState} slug="starships">
            {person.starships.map((starship, index) => {
              return (
                <Card
                  key={index}
                  title={starship.name}
                  description={starship.model}
                />
              );
            })}
          </TabPanel>

          <div className="w-full">
            <Link
              to="/profiles"
              className="p-3 bg-primary-color rounded-lg text-white block text-center	"
            >
              {t("buttons.back")}
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
