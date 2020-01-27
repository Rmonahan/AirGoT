class Api::SpotsController < ApplicationController

  def index
    if (params[:bounds] && params[:bounds] != "none")
      @spots = Spot.in_bounds(params[:bounds])
    else
      @spots = Spot.all 
    end

    if (params[:city] && params[:city] != "")
      filtered_spots = []
      @spots.each do |spot|
        if spot.city == params[:city]
          filtered_spots.push(spot);
        end
      end 
      @spots = filtered_spots;
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
