const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { response } = require("express");
const { error } = require("winston");

/**
 * POST: /airplanes
 * req-body {model-number: 'airbus320', capacity: 200}
 */
async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully creared an airplane",
      data: airplane,
      error: {},
    });
  } catch {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while creating an airplane",
      data: {},
      error: { error },
    });
  }
}

module.exports = { createAirplane };
