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

class Photo < ApplicationRecord
  validates :image_url, presence: true
  belongs_to :spot
end
