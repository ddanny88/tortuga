// const AWS = require('aws-sdk');




// (async function() {
//     try {
//         AWS.config.setPromisesDependency();
//         AWS.config({
//             accessKeyId: process.env.IAM_ACCESS_KEY,
//             secretAccessKey: process.env.IAM_SECRET_KEY,
//             region: 'us-east-ohio'
//         });

//         //make new instence of s3
//         const s3 = new AWS.S3();
//         const response = await s3.listObjectsV2({
//             Bucket: 'users-id'
//         }).promise();

//         console.log(response)


//     } catch(e){
//         console.log('error*', e)
//     }

// })();


















// const uploadFile = (req, res) => {
//     let file = req.body.file;

//     console.log(req.body)
//     let s3bucket = new AWS.S3({
//         accessKeyId: process.env.IAM_USER_KEY,
//         secretAcessKey: process.env.IAM_USER_SECRET
//     });
    
//     s3bucket.createBucket( () => {
//         let params = {
//             Bucket: process.env.BUCKET_NAME,
//             Key: file.name,
//             Body: file.data
//         };
//         s3bucket.upload(params)
//     })
//     res.sendStatus(200)
// }

// module.exports = {
//     uploadFile
// }


