class Api::ReservationsController < ApplicationController
  wrap_parameters include: Reservation.attribute_names + ['userId','restaurantId','reservationDate','reservationTime','partySize']

  before_action :require_logged_in, only: [:update, :destroy]

  def show
    @reservation = Reservation.find_by(id: params[:id])

    if @reservation
      render :show
    else
      render json: { errors: @reservation.errors.full_messages }, status: 404
    end
  end

  def create
    @reservation = Reservation.new(reservation_params)

    if @reservation.save
      render :create
    else
      render json: { errors: @reservation.errors.full_messages }, status: :unprocessable_entity
    end
    
  end

  def update
  end

  def destroy
  end

  private

  def reservation_params
    params.require(:reservation).permit(
      :user_id,
      :restaurant_id,
      :reservation_date,
      :reservation_time,
      :party_size
      )
  end

end
