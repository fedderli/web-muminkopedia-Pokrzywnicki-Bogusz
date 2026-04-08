import express, {Request,Response} from "express";
import CharacterModel, {Character} from "../models/characters";
import {deleteCharacter, getCharacters, postCharacter, putCharacter} from "../controllers/character.controller";


const router = express.Router();

router.get('/',getCharacters);
router.post('/',postCharacter);
router.put('/:id',putCharacter);
router.delete('/:id',deleteCharacter);



export default router;