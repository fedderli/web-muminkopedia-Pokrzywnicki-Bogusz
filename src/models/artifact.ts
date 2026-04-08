import mongoose, { Document } from "mongoose";

export interface Artifact extends Document {
    name: string;
    propertyDescription: string;
    owner: string;
}

const ArtifactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    propertyDescription: { type: String, required: true },
    owner: { type: String, required: true }
})

export default mongoose.model<Artifact>("Artifact", ArtifactSchema);
