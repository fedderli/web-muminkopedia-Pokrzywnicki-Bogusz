import {Character} from "../models/characters";
import {
    createCharacter,
    deleteCharacterById,
    getAllCharacters,
    updateCharacterById
} from "../repositories/character.repository";


export async function fetchCharacters(): Promise<Character[]> {
    return await getAllCharacters()
}

export async function addCharacter(name:string, description:string, species: string, status: string, bestFriend: string, ownerOf :string[]): Promise<Character> {

    if (!name || !description || !species || !status || !bestFriend || !ownerOf) {
        throw new Error("Wsystkie pola musza byc wypelnione")
    }

    return await createCharacter(name, description, species, status, bestFriend, ownerOf);

}

export async function modifyCharacter(id: string, updatedData: Partial<Character>): Promise<Character> {
    const updatedCharacter = await updateCharacterById(id, updatedData)

    if (!updatedCharacter) {
        throw new Error("Character not found")
    }

    return updatedCharacter
}

export async function removeCharacter(id:string):Promise<Character> {
    const deletedCharacter = await deleteCharacterById(id)

    if (!deletedCharacter) {
        throw new Error("Character not found")
    }

    return deletedCharacter;
}