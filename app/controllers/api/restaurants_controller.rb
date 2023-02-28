class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    render :index
  end

  def show
    @restaurant = Restaurant.includes(:reports, :reservations)
      .find(params[:id])
    render :show
  end

  def search
    @restaurants = Restaurant.where(
      "name LIKE ? OR location LIKE ? OR cuisine LIKE ?",
      Restaurant.sanitize_sql_like( "%" + params[:query] + "%" ))
    render :index
  end
  
end