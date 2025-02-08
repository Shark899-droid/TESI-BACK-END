import mongoose from 'mongoose'

const ReservationSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    date: {
      type: String,
      default: Date.now(),
    },
    guests: {
      type: Number,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Attiva', 'Cancellata'],
    },
  },
  { timestamps: true }
)

export default mongoose.model('Reservation', ReservationSchema)
