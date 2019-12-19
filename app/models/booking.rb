class Booking < ApplicationRecord
  validates :start_date, :end_date, presence: true

  belongs_to :user
  belongs_to :spot
end
