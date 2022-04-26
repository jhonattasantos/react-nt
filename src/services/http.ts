import axios from "axios";
import { Film, Person, Planet, ProfilesProps, Specie, Vehicle, Starship } from "../types/ProfilesProps";

const http = axios.create({
    baseURL: "https://swapi.dev/api/"
})

export function getPeople(page=1){
    return http.get<ProfilesProps>(`people?page=${page}`)
}

export function getPerson(id: string) {
    return http.get<Person>(`people/${id}`)
}

export function getPlanet(id: string) {
    return http.get<Planet>(`planets/${id}`)
}

export function getFilms(id: string) {
    return http.get<Film>(`films/${id}`)
}

export function getSpecies(id: string) {
    return http.get<Specie>(`species/${id}`)
}

export function getVehicles(id: string) {
    return http.get<Vehicle>(`vehicles/${id}`)
}

export function getStarships(id: string) {
    return http.get<Starship>(`starships/${id}`)
}

export default http