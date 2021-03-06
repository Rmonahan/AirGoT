# == Schema Information
#
# Table name: spots
#
#  id                  :bigint           not null, primary key
#  lat                 :float            not null
#  lng                 :float            not null
#  address             :string           not null
#  city                :string           not null
#  state               :string           not null
#  zipcode             :integer          not null
#  title               :string           not null
#  description         :string           not null
#  danger_rating       :float            not null
#  house_type          :string           not null
#  max_occupants       :integer          not null
#  price               :integer          not null
#  number_of_bedrooms  :integer          not null
#  number_of_beds      :integer          not null
#  number_of_bathrooms :integer          not null
#  square_foot         :integer          not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  allegiance          :string           not null
#  host_id             :integer          not null
#

require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
