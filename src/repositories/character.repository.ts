import characterModel, {Character} from "../models/characters"
import CharacterRoutes from "../routes/characterRoutes";

export async function getAllCharacters(): Promise<Character[]> {

    return characterModel.find()
}

export async function createCharacter(name:string, description:string, species: string, status: string, bestFriend: string, ownerOf :string[]) :Promise<Character> {
    const newCharacter = new characterModel({name, description, species, status, bestFriend, ownerOf});
    return await newCharacter.save();
}

export async function updateCharacterById(id:string,updatedData: Partial<Character>):Promise<Character | null> {
    return characterModel.findByIdAndUpdate(id, updatedData, {returnDocument: 'after'})
}

export async function deleteCharacterById(id:string):Promise<Character | null> {
    return await characterModel.findByIdAndDelete(id)
}