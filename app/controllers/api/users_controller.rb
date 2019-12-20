class Api::UsersController < ApplicationController

    def create
      @user = User.new(user_params)
      @user.profile_photo_url = "https://s3.amazonaws.com/airgot-dev/images/night-king.jpg"
      if @user.save
        login(@user)
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
