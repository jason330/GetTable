class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:email], params[:password])

    if @user
      login!(@user)
      render json: @user
    else
      render json: { errors: ['The provided credentials were invalid.'], status: :unauthorized }
    end
  end

  def destroy
    logout!
    render json: { message: 'success' }
  end

end
