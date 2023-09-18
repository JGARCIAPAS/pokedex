export interface PokemonData{
    name: string;
    id:number;
    sprites: sprites;
    height: number;
    weight: number;
    types: eachPokemontypes[];
}
export interface PokemonEntry{
    name: string;
    genera: eachPokemongenera[];
    flavor_text_entries:text_entries[];
}
interface sprites{
    front_default: string;
    front_female: string;
}
interface eachPokemontypes{
    slot:number;
    type: type;
}
interface type{
    name: string;
}
interface eachPokemongenera{
    genus:string;
    language: language;
}
interface language{
    name: string;
}
interface text_entries{
    flavor_text: string;
    language: language;
    version: version;
}
interface version{
    name: string;
}