class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:email], params[:password])

    if @user
      login!(@user)
      render: JSON(@user)
  end

  def destroy
  end

end
