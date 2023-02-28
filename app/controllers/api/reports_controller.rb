class Api::ReportsController < ApplicationController

  wrap_parameters include: [
    'userId',
    'restaurantId',
    'reservationId',
    'ratingOverall',
    'ratingFood',
    'ratingService',
    'ratingAmbience',
    'review'
  ]

  before_action :require_logged_in, only: [:create, :update, :destroy]

  def show  #need show?
    @report = Report.find(params[:id])

    if @report
      render :show
    else
      render json: { errors: 'Sorry the review you were looking for was not found.' }, status: 404
    end
  end

  def create
    @report = Report.new(report_params)

    if @report.save
      render :create
    else
      render json: { errors: @report.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @report = Report.find(params[:id])

    if @report.update(report_params)
      render :create
    else
      render json: { errors: @report.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @report = Report.find(params[:id])

    if @report.destroy
      render json: @report.id
    end
    
  end

  private

  def report_params
    params.require(:report).permit(
      :user_id,
      :restaurant_id,
      :reservation_id,
      :rating_overall,
      :rating_food,
      :rating_service,
      :rating_ambience,
      :review
    )
  end

end
