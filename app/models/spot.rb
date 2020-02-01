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

class Spot < ApplicationRecord
  validates :lat, :lng, :address, :city, :state, :zipcode, :title, :description,
 :allegiance, :danger_rating, :house_type, :max_occupants, :price, :number_of_bedrooms,
 :number_of_beds, :number_of_bathrooms, :square_foot, :host_id, presence: true

  has_many :assignments

  has_many :amenities,
   through: :assignments

  has_many :photos

  has_many :bookings
  
  belongs_to :host,
   class_name: :User,
   primary_key: :id,
   foreign_key: :host_id



  def self.in_bounds(params)
   bounds = params[:bounds];
    if (params[:city] && params[:city] != "")
      if (params[:guests] != "0")
        if(params[:allegiance] != "All")
          self.where("lat < ?", bounds[:northEast][:lat])
              .where("lat > ?", bounds[:southWest][:lat])
              .where("lng > ?", bounds[:southWest][:lng])
              .where("lng < ?", bounds[:northEast][:lng])
              .where(city: params[:city])
              .where("max_occupants >= ?", params[:guests])
              .where("allegiance = ?", params[:allegiance])
        else
          self.where("lat < ?", bounds[:northEast][:lat])
              .where("lat > ?", bounds[:southWest][:lat])
              .where("lng > ?", bounds[:southWest][:lng])
              .where("lng < ?", bounds[:northEast][:lng])
              .where(city: params[:city])
              .where("max_occupants >= ?", params[:guests])
        end
      else
        if(params[:allegiance] != "All")
          self.where("lat < ?", bounds[:northEast][:lat])
              .where("lat > ?", bounds[:southWest][:lat])
              .where("lng > ?", bounds[:southWest][:lng])
              .where("lng < ?", bounds[:northEast][:lng])
              .where(city: params[:city])
              .where("allegiance = ?", params[:allegiance])
        else
          self.where("lat < ?", bounds[:northEast][:lat])
              .where("lat > ?", bounds[:southWest][:lat])
              .where("lng > ?", bounds[:southWest][:lng])
              .where("lng < ?", bounds[:northEast][:lng])
              .where(city: params[:city])
        end
      end
    elsif (params[:guests] != "0")
      if(params[:allegiance] != "All")
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
            .where("max_occupants >= ?", params[:guests])
            .where("allegiance = ?", params[:allegiance])
      else
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
            .where("max_occupants >= ?", params[:guests])
      end
    elsif (params[:allegiance] != "All")
      self.where("lat < ?", bounds[:northEast][:lat])
          .where("lat > ?", bounds[:southWest][:lat])
          .where("lng > ?", bounds[:southWest][:lng])
          .where("lng < ?", bounds[:northEast][:lng])
          .where("allegiance = ?", params[:allegiance])
    else
      self.where("lat < ?", bounds[:northEast][:lat])
          .where("lat > ?", bounds[:southWest][:lat])
          .where("lng > ?", bounds[:southWest][:lng])
          .where("lng < ?", bounds[:northEast][:lng])
    end
  end

end
