import express, {Request,Response} from "express";
import CharacterModel, {Character} from "../models/characters";


const router = express.Router();

router.get('/',async (req:Request, res : Response) => {
    try{
        const characters: Array<Character> = await CharacterModel.find();
        res.json(characters);
    } catch(err){
        res.status(500).json({error:`nie udalo sie pobrac danych ${err}`});
    }
})


router.post('/', async (req:Request, res : Response) => {
    try {
        const {name, description, species, status, bestFriend, ownerOf} = req.body;
        const newCharacter = new CharacterModel({
            name,
            description,
            species,
            status,
            bestFriend,
            ownerOf
        });
        await newCharacter.save();
        res.status(201).json({message: `dodano nowa postac ${newCharacter}`});
    }catch(err){
        res.status(500).json({massage: "nie udalo sie dodac postaci", err})
    }
})


export default router;