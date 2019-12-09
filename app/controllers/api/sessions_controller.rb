class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["invalid username password comboo"], status:401
    end
  end

  def destroy
    if current_user
      logout()
      render json: {}
    else
      render json: "didn't work", status: 404
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
