class Api::BookingsController < ApplicationController
  def create 
    @booking = Booking.new(booking_params)
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 401
    end
  end

  def index
    if booking_params[:user_id]
       @bookings = User.find(booking_params[:user_id]).bookings
    else
      @bookings = Booking.all
    end
    render :index
  end

  def show
      @booking = Booking.find(params[:id])
      render :show
  end


  def destroy 
    @booking = Booking.find(params[:id])
    @booking.delete!
    render :show
  end

  private 

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :spot_id, :user_id)
  end
end
