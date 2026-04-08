import express from "express";
import { deleteArtifact, getArtifacts, postArtifact, putArtifact } from "../controllers/artifact.controller";


const router = express.Router();

router.get('/', getArtifacts);
router.post('/', postArtifact);
router.put('/:id', putArtifact);
router.delete('/:id', deleteArtifact);


export default router;
