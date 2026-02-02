import mongoose, { Document, Schema, Model } from 'mongoose';

interface IBooking {
  user: mongoose.Types.ObjectId;
  tour: mongoose.Types.ObjectId;
  price: number;
  quantity: number;
  createdAt: Date;
  paid: boolean;
}

type BookingDocument = Document & IBooking;

const bookingSchema = new Schema<BookingDocument>(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Booking must belong to a user'],
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'Booking must belong to a tour'],
    },
    price: {
      type: Number,
      required: [true, 'Booking must have a Price'],
    },
    quantity: {
      type: Number,
      default: 1,
    },

    createdAt: { type: Date, default: Date.now },
    paid: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

bookingSchema.pre(/^find/, function (this: mongoose.Query<any, any>) {
  this.populate('user').populate({
    path: 'tour',
    select: 'name imageCover duration startLocation',
  });
});

const Booking: Model<BookingDocument> = mongoose.model<BookingDocument>(
  'Bookings',
  bookingSchema,
);

export default Booking;
