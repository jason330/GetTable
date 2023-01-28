class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    render :index
  end

  def show
    @restaurant = Restaurant.includes(:photos, :reports).find(params[:id])
    render :show
  end
end