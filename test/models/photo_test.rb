# == Schema Information
#
# Table name: photos
#
#  id         :bigint           not null, primary key
#  spot_id    :integer
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
