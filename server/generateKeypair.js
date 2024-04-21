// generateKeypair.js

import crypto from "crypto";
import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

async function genKeyPair() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const keyPair = crypto.generateKeyPairSync("rsa", {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: "spki",
            format: "pem",
        },
        privateKeyEncoding: {
            type: "pkcs8",
            format: "pem",
        },
    });

    await writeFile(path.join(__dirname, "id_rsa_pub.pem"), keyPair.publicKey);
    await writeFile(path.join(__dirname, "id_rsa_priv.pem"), keyPair.privateKey);

    console.log("Keys generated!");
}

genKeyPair();
