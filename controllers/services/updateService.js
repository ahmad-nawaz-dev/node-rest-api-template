const Service = require("../../models/services");
const { ValidateService } = require("../../validations/serviceValidator");
const updateService = async (req, res) => {
  try {
    const { error } = ValidateService(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    return res.status(200).json({
      message: "Service updated successfully",
      service,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = updateService;
