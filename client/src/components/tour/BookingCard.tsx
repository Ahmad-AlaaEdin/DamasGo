import { useState } from "react";
import { Heart, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Tour } from "@/types/tour";

interface BookingCardProps {
  tour: Tour;
  onBook: (quantity: number) => void;
  bookingLoading: boolean;
}

export default function BookingCard({
  tour,
  onBook,
  bookingLoading,
}: BookingCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const maxParticipants = tour.maxGroupSize;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-28 border border-brand-secondary">
      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-brand-dark/70">From</span>
          <span className="text-3xl font-bold text-brand-primary">
            ${tour.price}
          </span>
          <span className="text-brand-dark/70">per person</span>
        </div>
        {tour.priceDiscount && tour.priceDiscount > 0 && (
          <p className="text-sm text-brand-burgundy">
            Save ${tour.priceDiscount}!
          </p>
        )}
      </div>

      <div className="mb-6 flex items-center justify-between p-3 bg-gray-50 rounded-lg">
        <span className="font-medium text-gray-700">Participants:</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white border shadow-sm hover:bg-gray-100 disabled:opacity-50 text-gray-700 font-bold"
            disabled={quantity <= 1 || bookingLoading}
            type="button"
          >
            -
          </button>
          <span className="w-6 text-center font-semibold text-lg">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(Math.min(maxParticipants, quantity + 1))}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white border shadow-sm hover:bg-gray-100 disabled:opacity-50 text-gray-700 font-bold"
            disabled={quantity >= maxParticipants || bookingLoading}
            type="button"
          >
            +
          </button>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <Button
          className="w-full"
          size="lg"
          onClick={() => onBook(quantity)}
          disabled={bookingLoading}
        >
          {bookingLoading
            ? "Processing..."
            : `Book for $${tour.price * quantity}`}
        </Button>

        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            className="w-full border-brand-secondary text-brand-dark"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart
              className={`h-4 w-4 mr-2 ${
                isFavorite
                  ? "fill-brand-burgundy text-brand-burgundy"
                  : "text-brand-dark"
              }`}
            />
            Save
          </Button>
          <Button
            variant="outline"
            className="w-full border-brand-secondary text-brand-dark"
          >
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      <div className="pt-6 border-t border-brand-secondary">
        <h3 className="font-semibold mb-3 text-brand-dark">Need Help?</h3>
        <p className="text-sm mb-4 text-brand-dark/70">
          Our travel experts are here to help you plan your perfect adventure.
        </p>
        <Button
          variant="outline"
          className="w-full border-brand-secondary text-brand-dark"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}
