const Service = require("../../models/services");
const UPLOAD_FILE = require("../../utils/uploadFile");
const { ValidateService } = require("../../validations/serviceValidator");

const addService = async (req, res) => {
  try {
    const { error } = ValidateService(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    let imagePath = null;

    if (req.files && req.files.image) {
      imagePath = UPLOAD_FILE(req.files.image, "services");
    }
    const serviceData = {
      ...req.body,
      image: imagePath,
    };

    const service = await Service.create(serviceData);

    return res
      .status(201)
      .json({ message: "Service Created Successfully", service });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = addService;
