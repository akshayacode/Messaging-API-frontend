import {ethers} from "ethers";
import abiRouter from "./routerABI.json";
import abiMain from "./voteMain.json";

const routerAddress = "0x65CaF707Bf47BaB8f4C9C54823E24Ce88C126B95"; // network mumbai
const mainAddress = "0x4E5925E4d90f1085D8e194c3EdFD69DF6db877ed"; // network sepolia


export const getRouterContract = async(signer) => {
    return new ethers.Contract(routerAddress, abiRouter, signer);
}

export const getMainContract = async(signer) => {
    return new ethers.Contract(mainAddress, abiMain, signer);
}
