class Api::UsersController < ApplicationController

    def create
      @user = User.new(user_params)
      if @user.save
        login(@user)
        @user.profile_photo.attach(io: File.open('app/assets/images/night-king.jpg'), filename: "night-king.jpg")
        render :show
      else
        render json: @user.errors.full_messages, status: 401
      end
    end

    def show
      @user = User.find(params[:id])
      render :show
    end

    private

    def user_params
      params.require(:user).permit(:password, :first_name, :last_name, :email, :birth_date)
    end
end
