import { Artifact } from "../models/artifact";
import {
    createArtifact,
    deleteArtifactById,
    getAllArtifacts,
    updateArtifactById
} from "../repositories/artifact.repository";


export async function fetchArtifacts(): Promise<Artifact[]> {
    return await getAllArtifacts();
}

export async function addArtifact(name: string, propertyDescription: string, owner: string): Promise<Artifact> {

    if (!name || !propertyDescription || !owner) {
        throw new Error("Wszystkie pola musza byc wypelnione");
    }

    return await createArtifact(name, propertyDescription, owner);
}

export async function modifyArtifact(id: string, updatedData: Partial<Artifact>): Promise<Artifact> {
    const updatedArtifact = await updateArtifactById(id, updatedData);

    if (!updatedArtifact) {
        throw new Error("nie znaleziono zadania");
    }

    return updatedArtifact;
}

export async function removeArtifact(id: string): Promise<Artifact> {
    const deletedArtifact = await deleteArtifactById(id);

    if (!deletedArtifact) {
        throw new Error("nie znaleziono zadania");
    }

    return deletedArtifact;
}
