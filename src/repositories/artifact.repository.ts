import artifactModel, { Artifact } from "../models/artifact";

export async function getAllArtifacts(): Promise<Artifact[]> {
    return artifactModel.find();
}

export async function createArtifact(name: string, propertyDescription: string, owner: string): Promise<Artifact> {
    const newArtifact = new artifactModel({ name, propertyDescription, owner });
    return await newArtifact.save();
}

export async function updateArtifactById(id: string, updatedData: Partial<Artifact>): Promise<Artifact | null> {
    return artifactModel.findByIdAndUpdate(id, updatedData, { returnDocument: 'after' });
}

export async function deleteArtifactById(id: string): Promise<Artifact | null> {
    return await artifactModel.findByIdAndDelete(id);
}
