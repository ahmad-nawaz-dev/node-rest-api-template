const fs = require("fs");
const path = require("path");
const UPLOAD_FILE = (file, folderName) => {
  const uploadDir = "uploads/" + folderName;

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const fileName = Date.now() + path.extname(req.file.originalname);
  const filePath = uploadDir + "/" + fileName;
  fs.writeFileSync(filePath, file.data);

  return filePath;
};

module.exports = UPLOAD_FILE;
