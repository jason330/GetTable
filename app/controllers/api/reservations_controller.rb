class Api::ReservationsController < ApplicationController
  wrap_parameters include: Reservation.attribute_names + ['userId','restaurantId','date','time','partySize']

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
