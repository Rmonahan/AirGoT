# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  spot_id    :integer
#  start_date :date             not null
#  end_date   :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
  validates :start_date, :end_date, presence: true

  belongs_to :user
  belongs_to :spot
end
