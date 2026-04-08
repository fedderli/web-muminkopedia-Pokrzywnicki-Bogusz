import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import artifactModel from "../models/artifact";

const artifacts = [
    {
        name: "harmonijka",
        propertyDescription: "Stara, wysłużona harmonijka ustna. Gra smutne melodie, które potrafią ukoić każde serce.",
        owner: "Włóczykij"
    },
    {
        name: "stary kapelusz",
        propertyDescription: "Wytarty kapelusz chroniący przed słońcem i deszczem, towarzysz wielu wędrówek.",
        owner: "Włóczykij"
    },
    {
        name: "kapelusz Tajemniczego Pana",
        propertyDescription: "Wysoki czarny cylinder o magicznych właściwościach – zamienia w coś zupełnie innego wszystko, co zostanie do niego włożone.",
        owner: "Tajemniczy Pan"
    },
    {
        name: "kamień z dziurką",
        propertyDescription: "Gładki kamień z naturalnie wydrążoną dziurką. Przynosi szczęście temu, kto przez nią spojrzy.",
        owner: "Muminek"
    },
    {
        name: "srebrna szpilka",
        propertyDescription: "Maleńka srebrna szpilka, którą Mała Mi używa jako broni i ozdoby jednocześnie.",
        owner: "Mała Mi"
    },
    {
        name: "czarny cylinder",
        propertyDescription: "Elegancki cylinder Tatusia Muminka, nieodłączny element jego wizerunku podróżnika i marzyciela.",
        owner: "Tatuś Muminka"
    }
];

const seed = async () => {
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) throw new Error("MongoDB URI is missing");

    await mongoose.connect(MONGODB_URI);
    console.log("Połączono z MongoDB");

    await artifactModel.deleteMany({});
    console.log("Wyczyszczono kolekcję przedmiotów");

    await artifactModel.insertMany(artifacts);
    console.log("Dodano przedmioty do bazy");

    await mongoose.disconnect();
    console.log("Rozłączono");
};

seed();
