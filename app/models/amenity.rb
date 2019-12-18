# == Schema Information
#
# Table name: amenities
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  icon       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Amenity < ApplicationRecord
  validates :name, :icon, presence: true

  has_many :assignments,
    class_name: :Assignment,
    primary_key: :id,
    foreign_key: :amenities_id

  has_many :spots,
    through: :assignments
end
