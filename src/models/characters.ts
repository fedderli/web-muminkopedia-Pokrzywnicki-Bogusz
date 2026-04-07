import mongoose, { Document } from "mongoose";

export interface Character extends Document {
    name: string;
    description: string;
    species: string;
    status:string;
    bestFriend: string;
    ownerOf: string[];
}

const CharacterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    species: { type: String, required: true },
    status: { type: String, required: true },
    bestFriend: { type: String, required: true },
    ownerOf: [{type: String}]
})

export default mongoose.model<Character>("Character", CharacterSchema);