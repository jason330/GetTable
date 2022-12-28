class AddIndexToReports < ActiveRecord::Migration[7.0]
  def change
    add_index :reports, [:user_id, :reservation_id], unique: true
  end
end
