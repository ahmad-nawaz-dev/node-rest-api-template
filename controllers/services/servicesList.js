const Service = require("../../models/services");

const listService = async (req, res) => {
  try {
    const page = req.query.page || 1;

    const limit = req.query.limit || 5;

    const skip = (page - 1) * limit;
    const services = await Service.find()
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      message: "Services fetched successfully",
      data: services,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = listService;
