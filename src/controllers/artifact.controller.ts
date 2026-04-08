import { Request, Response } from 'express';
import { addArtifact, fetchArtifacts, modifyArtifact, removeArtifact } from "../services/artifact.service";


export async function getArtifacts(req: Request, res: Response): Promise<void> {
    try {
        const artifacts = await fetchArtifacts();

        res.status(200).json(artifacts);
    } catch(err) {
        res.status(500).json({ error: `Not Found: ${err}` });
    }
}

export async function postArtifact(req: Request, res: Response): Promise<void> {
    try {
        const { name, propertyDescription, owner } = req.body;

        const newArtifact = await addArtifact(name, propertyDescription, owner);

        res.status(200).json({ message: `dodano nowy przedmiot`, newArtifact });
    } catch(err) {
        const errorMsg = err instanceof Error ? err.message : "POPSLEMS TAK ZE NIE WIEM CO SIE STALO!!!";
        res.status(400).json({ error: `nie udalo sie dodac przedmiotu bo ${errorMsg}` });
    }
}

export async function putArtifact(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id as string;
        const updatedData = req.body;

        const updatedArtifact = await modifyArtifact(id, updatedData);

        res.json({ message: `zaktualizowano przedmiot`, artifact: updatedArtifact });
    } catch(err) {
        const errorMessage = err instanceof Error ? err.message : "TERAZ TYM BARDZIEJ NIE WIEM CO POPSOLES";

        if (errorMessage === "nie znaleziono zadania") {
            res.status(404).json({ error: errorMessage });
        } else {
            res.status(500).json({ error: "Nie znaleziono przedmiotu" });
        }
    }
}

export async function deleteArtifact(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id as string;
        const deletedArtifact = await removeArtifact(id);

        res.json({ message: "Usunieto przedmiot", artifact: deletedArtifact });
    } catch(err) {
        const error = err instanceof Error ? err : new Error(`NIE WIEM NO NIE WIEM`);

        if (error.message === "nie znaleziono zadania") {
            res.status(404).json({ error: error.message });
        } else {
            res.status(500).json({ error: `nie znaleziono przedmiotu ${error.message}` });
        }
    }
}
