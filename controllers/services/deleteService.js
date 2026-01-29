const Service = require("../../models/services");

const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    return res.status(200).json({
      message: "Service deleted successfully",
      service,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = deleteService;
