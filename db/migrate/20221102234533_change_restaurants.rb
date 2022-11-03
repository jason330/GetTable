class ChangeRestaurants < ActiveRecord::Migration[7.0]
  def change
    remove_column :restaurants, :tables_per_time
    remove_column :restaurants, :days_open
  end
end
