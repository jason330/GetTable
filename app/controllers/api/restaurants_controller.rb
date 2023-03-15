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
    # puts 'params is ',params
    
    query = "%" + Restaurant.sanitize_sql_like( params[:q] ) + "%"
    # puts 'query is ',query

    @restaurants = Restaurant.where(
      "name LIKE ? OR location LIKE ? OR cuisine LIKE ?",
      query,
      query,
      query
      )
    # puts '@restaurants is', @restaurants

    render :index
  end
  
end