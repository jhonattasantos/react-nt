export type Planet = {
    name: string;
	rotation_period: string;
	orbital_period: string;
	diameter: string;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: string;
	population: string;
}

export type Film = {
    title: string;
	episode_id: string;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
}

export type Specie = {
    name: string;
	classification:string;
	designation: string;
	average_height: string;
	skin_colors: string;
	hair_colors: string;
	eye_colors:string;
	average_lifespan: string;
	language: string;
}

export type Vehicle = {
    name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: string;
	length: string;
	max_atmosphering_speed: string;
	crew: string;
	passengers: string;
	cargo_capacity: string;
	consumables: string;
	vehicle_class: string;
}

export type Starship = {
    name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: string;
	length: string;
	max_atmosphering_speed: string;
	crew: string;
	passengers:string;
	cargo_capacity: string;
	consumables: string;
	hyperdrive_rating: string;
	MGLT: string;
	starship_class: string;
}

export type Person = {
    name: string,
    gender: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    url: string,
    homeworld: Planet;
    films: Film[],
    species: Specie[],
    vehicles:Vehicle[],
    starships: Starship[]
}

export type ProfilesProps = {
    count: number,
    previous: string,
    next: string,
    results: Person[]
}

