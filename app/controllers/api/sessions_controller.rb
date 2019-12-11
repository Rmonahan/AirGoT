class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:email], user_params[:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      errors = []
      if user_params[:email] == ""
        errors << ["Email is required."]
      end
      if user_params[:password].length < 8
        errors << ["Your password must be at least 8 characters. Please try again."]
      end

      if errors.length == 0
        errors << ["There isn't an account associated with those credentials. Please try again"]
      end
      
      render json: errors, status:401
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
    params.require(:user).permit(:email, :password, :first_name, :last_name, :birth_date)
  end
end
