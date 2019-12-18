# == Schema Information
#
# Table name: assignments
#
#  id           :bigint           not null, primary key
#  spot_id      :bigint
#  amenities_id :bigint
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Assignment < ActiveRecord::Base
  belongs_to :spot
  
  belongs_to :amenity,
    class_name: :Amenity,
    primary_key: :id,
    foreign_key: :amenities_id
end
