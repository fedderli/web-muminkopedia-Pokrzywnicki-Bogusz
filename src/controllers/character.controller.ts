import {Request, Response} from 'express'
import {addCharacter, fetchCharacters, modifyCharacter, removeCharacter} from "../services/character.service";
import {Character} from "../models/characters";



export async function getCharacters(req: Request, res: Response): Promise<void> {
    try{
        const tasks = await fetchCharacters()

        res.status(200).json(tasks)
    }catch(err){
        res.status(500).json({error: `Not Found: ${err}`})
    }
}

export async function postCharacter(req: Request, res: Response): Promise<void> {
    try{
        const {name, description, species, status, bestFriend, ownerOf} = req.body

        const newCharacter = await addCharacter(name, description, species, status, bestFriend, ownerOf);

        res.status(200).json({ message: `dodano nowa postac`, newCharacter });
    }catch(err){
        const errorMsg = err instanceof Error ? err.message : "POPSLEMS TAK ZE NIE WIEM CO SIE STALO!!!";
        res.status(400).json({error: `nie udalo sie dodac psotaci bo ${errorMsg}`})
    }
}

export async function putCharacter(req: Request, res: Response): Promise<void> {
    try{
      const id = req.params.id as string;
      const updatedData = req.body;

      const updatedCharacter = await modifyCharacter(id, updatedData);

      res.json({ message: `zaktualizowano zadanie`, character: updatedCharacter });

    } catch(err){
        const errorMessage = err instanceof Error ? err.message : "TERAZ TYM BARDZIEJ NIE WIEM CO POPSOLES";

        if (errorMessage === "nie znaleziono zadania") {
            res.status(404).json({error: errorMessage})
        }else {
            res.status(500).json({error: "Nie znaleziono zadania"})
        }
    }
}

export async function deleteCharacter(req: Request, res: Response): Promise<void> {
    try{
        const id = req.params.id as string;
        const deletedTask = await removeCharacter(id);

        res.json({ message: "Usunieto postac", character: deletedTask });
    } catch(err){
        const error = err instanceof Error ? err : new Error(`NIE WIEM NO NIE WIEM`)

        if (error.message === "nie znaleziono zadania") {
            res.status(404).json({error: error.message})
        }else {
            res.status(500).json({error: `nie znaleziono zadania ${error.message}`})
        }
    }
}