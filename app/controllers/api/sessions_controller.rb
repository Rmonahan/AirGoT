class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentails(user_params[:username], user_params[:password])
    if @user
      login(@user)
    else
      flash.now[:errors] = ["invalid username password comboo"]
    end
  end

  def destroy
    if current_user
      logout()
      render json: {}
    else
      render json: "didn't work", status: 401
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
