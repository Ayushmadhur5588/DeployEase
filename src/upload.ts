import { S3 } from "aws-sdk";;
import fs from "fs";

const s3 = new S3({
  //  accessKeyId : 
   // secretAccessKey : 
   //endpoint : 
})
//fileName : output/hdj12/src/App.jsx
//filePath : /Users/ayushbhardwaj/desktop/desployease/dist/output/hdj12/src/App.jsx
export const uploadFile = async(fileName: string, localFilePath: string) => {
const fileContent = fs.readFileSync(localFilePath);
const response = await s3.upload({
    Body : fileContent,
    Bucket : "deployease",
    Key : fileName
}).promise();
}