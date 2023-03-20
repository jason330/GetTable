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
    
    @query = "%" + Restaurant.sanitize_sql_like( params[:q] ) + "%"
    # puts 'query is ',query

    @restaurants = Restaurant.where(
      "lower(name) LIKE ? OR lower(location) LIKE ? OR lower(cuisine) LIKE ?",
      @query.downcase,
      @query.downcase,
      @query.downcase
      )
    # puts '@restaurants is', @restaurants
    # puts '@query. class is ',@query.class
    render :search
  end
  
end