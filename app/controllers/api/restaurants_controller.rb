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
    @query = "%" + Restaurant.sanitize_sql_like( params[:q] ) + "%"

    @restaurants = Restaurant.where(
      "lower(name) LIKE ? OR lower(location) LIKE ? OR lower(cuisine) LIKE ?",
      @query.downcase,
      @query.downcase,
      @query.downcase
      )

    render :search
  end
  
end