class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :user_id, index: true, foreign_key: true
      t.integer :spot_id, index: true, foreign_key: true
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.timestamps
    end
  end
end
