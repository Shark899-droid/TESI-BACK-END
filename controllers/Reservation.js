import Reservation from '../models/Reservation.js'
export const getAllReservations = async (req, res) => {
  try {
    const data = await Reservation.find({}).populate('userID')
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}
export const getMyReservations = async (req, res) => {
  try {
    const userId = req.params.userId
    const data = await Reservation.find({ userID: userId })
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

export const createReservation = async (req, res) => {
  try {
    const data = await Reservation.create(req.body)
    res.status(201).json({ data })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

export const getReservation = async (req, res) => {
  try {
    const data = await Reservation.findById(req.params.id).populate('userID')
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

export const updateReservation = async (req, res) => {
  try {
    const data = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(201).json({ data })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

export const deleteReservation = async (req, res) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id)
    res
      .status(201)
      .json({ message: `Reservation with id ${req.params.id} deleted !!!` })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}
