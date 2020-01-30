class Api::SpotsController < ApplicationController

  def index
    if (params[:bounds] && params[:bounds] != "none")
      @spots = Spot.in_bounds(params)
    elsif (params[:city] && params[:city] != "")
      if (params[:guests])
        @spots = Spot.where(city: params[:city]).where("max_occupants >= ?", params[:guests])
      else
        @spots = Spot.where(city: params[:city])
      end
    elsif (params[:guests])
        @spots = Spot.where("max_occupants >= ?", params[:guests])
    else
        @spots = Spot.all 
    end

    puts params
    if params[:bookingRange]
    booked = {}
    bookedSpots = Booking.select("spot_id").where("start_date >= ? AND start_date <= ?", params[:bookingRange]["startDate"], params[:bookingRange]["endDate"])
    bookedSpots += Booking.select("spot_id").where("end_date >= ? AND end_date <= ?", params[:bookingRange]["startDate"], params[:bookingRange]["endDate"])
    bookedSpots += Booking.select("spot_id").where("start_date <= ? AND end_date >= ?", params[:bookingRange]["startDate"], params[:bookingRange]["endDate"])
    bookedSpots.each do |booking| 
      booked[booking.spot_id] = true
    end
    openSpots = []
    @spots.each do |spot|
      unless booked[spot.id]
        openSpots.push(spot) 
      end
    end
    @spots = openSpots
    end
      render :index
  end


  def show
      @spot = Spot.find(params[:id])
      render :show
  end

  def update
      @spot = Spot.find(params[:id])
      if @spot.update(spot_params)
        render :show
      else
        render json: @spots.errors.full_messages, status: 401
      end
  end

  def create
    @spot = Spot.new(spot_params)
    if @spot.save
      render :show
    else
      render json: @spot.errors.full_messages, status: 401
    end
  end
  
  def destroy
    @spot = Spot.find(params[:id])
    @spot.delete!
    render :show
  end

  private 

  def spot_params
  end
  
end
