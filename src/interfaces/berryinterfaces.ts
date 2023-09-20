export interface BerryData{
    id: number;
    growth_time: number;
    size: number;
}
export interface BerryEntry{
    flavor_text_entries:text_entries[];
    names:names[];
    sprites: sprites;
}
interface sprites{
    default:string;
}
interface text_entries{
    language: language;
    text: string;
}
interface language{
    name: string;
}
interface names{
    language: language;
    name: string;
}