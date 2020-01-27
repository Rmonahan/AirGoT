class Api::SpotsController < ApplicationController

  def index
    if (params[:bounds] && params[:bounds] != "none")
      @spots = Spot.in_bounds(params)
    elsif (params[:city] && params[:city] != "")
      if (params[:guests])
          if (params[:bookingRange])
            @spots = Spot.where(city: params[:city]).where("max_occupants > ?", params[:guests])
            #  figure out how to filter for bookings
          else
            @spots = Spot.where(city: params[:city]).where("max_occupants > ?", params[:guests])
          end
      elsif (params[:bookingRange])
        @spots = Spot.where(city: params[:city])
      end
    else
      @spots = Spot.all 
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
