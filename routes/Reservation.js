import express from 'express'

const router = express.Router()

import {
  getAllReservations,
  getReservation,
  createReservation,
  updateReservation,
  deleteReservation,
  getMyReservations,
} from '../controllers/Reservation.js'

router.route('/reservation').get(getAllReservations).post(createReservation)
router
  .route('/reservation/:id')
  .get(getReservation)
  .put(updateReservation)
  .delete(deleteReservation)
router.route('/myreservations/:userId').get(getMyReservations)
export default router
