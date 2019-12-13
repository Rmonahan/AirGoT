class Api::SpotsController < ApplicationController

  def index
      @spots = Spot.all
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
    @spot = Spot.find(params)
    @spot.delete!
    render :show
  end
end
