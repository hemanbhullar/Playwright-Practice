import { test } from "@playwright/test";
import * as XLSX from 'xlsx';
import path from 'path'

const UserDataFile = path.join(__dirname, '');


test("userfile", async({page}) => {
    const workBook = XLSX.readFile(UserDataFile);
    const worksheet = workBook.Sheets["Sheet1"];
    const xlstoJson = XLSX.utils.sheet_to_json(worksheet);
    console.log(xlstoJson);
})



