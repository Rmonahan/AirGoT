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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
