const AWS = require('aws-sdk');

const uploadFile = (req, res) => {
    let file = req.body.file;

    console.log(req.body)
    let s3bucket = new AWS.S3({
        accessKeyId: process.env.IAM_USER_KEY,
        secretAcessKey: process.env.IAM_USER_SECRET
    });
    
    s3bucket.createBucket( () => {
        let params = {
            Bucket: process.env.BUCKET_NAME,
            Key: file.name,
            Body: file.data
        };
        s3bucket.upload(params)
    })
}

module.exports = {
    uploadFile
}


