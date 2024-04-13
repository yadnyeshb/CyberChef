/**
 * @author Yadnyesh [yadnyesh.b@gmail.com]
 * @copyright Crown Copyright 2023
 * @license Apache-2.0
 */
import {toBase64, ALPHABET_OPTIONS} from "../lib/Base64.mjs";
import Operation from "../Operation.mjs";
import Utils from "../Utils.mjs";
import {rot, rotl, rotlCarry} from "../lib/Rotate.mjs";
import { bitOp, xor } from "../lib/BitwiseOp.mjs";
import { ByteArray } from "@astronautlabs/amf/dist/amf3";

//import math from "core-js/fn/math";
//import OperationError from "../errors/OperationError.mjs";

/**
 * SHEContainerGeneration operation
 */
class SHEContainerGeneration extends Operation {

    /**
     * SHEContainerGeneration constructor
     */
    constructor() {
        super();
	
        this.name = "SHEContainerGeneration";
        this.module = "SHEContainergeneration";
        this.description = "Output provides the M1, M2, M3, M4, M5 values";
        this.infoURL = "sdfdsf.com";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [
            {
                "name": "UID",
                "type": "toggleString",
                "value": "",
                "toggleValues": ["Hex", "Base64"]
            },
            {
                "name": "KAuth",
                "type": "toggleString",
                "value": "",
                "toggleValues": ["Hex", "Base64"]
            },
            {
                "name": "KNew",
                "type": "toggleString",
                "value": "",
                "toggleValues": ["Hex", "Base64"]
            },
            {
                "name": "CID",
                "type": "number",
                "value": 1
            },
            {
                "name": "WP",
                "type": "boolean",
                "value": true
            },
            {
                "name": "BP",
                "type": "boolean",
                "value": false
            },
            {
                "name": "DP",
                "type": "boolean",
                "value": false
            },
            {
                "name": "KU",
                "type": "boolean",
                "value": false
            },
            {
                "name": "WC",
                "type": "boolean",
                "value": false
            },
            {
                "name": "CU",
                "type": "boolean",
                "value": false
            },
            {
                "name": "SHEID",
                "type": "toggleString",
                "value": "",
                "toggleValues": ["Hex", "Base64"]
            },
            {
                "name": "AUTHID",
                "type": "toggleString",
                "value": "",
                "toggleValues": ["Hex", "Base64"]
            }
            
        ];
    }

    /*
     * @param {byteArray} input
     * @param {Object[]} args
     * @returns {string}
     */
/*     run(input, args) {
	const UID = Utils.convertToByteArray(args[0].string, args[0].option);
	const KAuth = Utils.convertToByteString(args[1].string, args[1].option);
	const KNew = Utils.convertToByteString(args[2].string, args[2].option);
	const CID = args[3];
	let FID = (((args[4]==true)<<5)+((args[5]==true)<<4)+((args[6]==true)<<3)+((args[7]==true)<<2)+((args[8]==true)<<1)+(args[9]==true));
	const SHEID = Utils.convertToByteArray(args[10].string, args[10].option);
	const AUTHID = Utils.convertToByteArray(args[11].string, args[11].option);
	const M1 = (rot(UID, 8, rotl))+(rot(SHEID, 4, rotl))+AUTHID ;
	//M2 =
	//M3 =
	//M4 =
	//M5 =
        //return toBase64(input, alphabet);
        return M1;
	//return Utils.hex(UID[1]);
	//return r.KJUR.asn1.ASN1Util.getPEMStringFromHex(input.replace(/\s/g, ""), args[0]);
        //throw new OperationError("Test");
    } */
    /*
    * @param {ArrayBuffer} input
    * @param {number} args
    * @returns {ArrayBuffer}
    */

    run(input, args) {
        let temp_UID = args[0];
        let UID = Utils.convertToByteArray(args[0].string, "Hex");
        const KAuth = Utils.convertToByteString(args[1].string, "Hex");
        const KNew = Utils.convertToByteString(args[2].string, "Hex");
        const CID = args[3];
        let FID = (((args[4]==true)<<5)+((args[5]==true)<<4)+((args[6]==true)<<3)+((args[7]==true)<<2)+((args[8]==true)<<1)+(args[9]==true));
        let SHEID = Utils.convertToByteArray(args[10].string, "Hex");
        const AUTHID = Utils.convertToByteArray(args[11].string, "Hex");
        //const M1 = (rot(UID, 8, rotl))+(rot(SHEID, 4, rotl))+AUTHID ;
        /* let M1 = this.xorByteArrays((rot(UID, 8, rotl)), (rot(SHEID, 4, rotl)));
        M1 = this.xorByteArrays(M1, AUTHID);
 */
        //UID       : 000000000000000000000000000001
        //SHEID     : 4
        //AuthID    : 1

        //let y =  (SHEID[0]<<4 | UID[0]);

        let M1 = Utils.padBytesRight(UID,16);
        
        let temp = Utils.convertToByteArray((UID <<8).toString(16), "Hex");
        let temp2 = Utils.convertToByteArray((SHEID <<4).toString(16), "Hex");

        
        let abc = Utils.convertToByteArray((UID <<7).toString(16), "Hex");
        //M2 =
        //M3 =
        //M4 =
        //M5 =
        //let _TEMP = Buffer.from(UID);
        let x = (SHEID <<4).toString(16);
        //let _TEMP2 = new Uint8Array(x);
        return M1.toString(16);
        //return Utils.hex(UID[1]);
        //return r.KJUR.asn1.ASN1Util.getPEMStringFromHex(input.replace(/\s/g, ""), args[0]);
            //throw new OperationError("Test");
        }
    
    
    
}
export default SHEContainerGeneration;
