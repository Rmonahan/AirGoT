class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.string :allegience, null: false
      t.float :danger_rating, null: false
      t.string :house_type, null:false
      t.integer :max_occupants, null:false
      t.integer :price, null:false
      t.integer :number_of_bedrooms, null:false
      t.integer :number_of_beds, null:false
      t.integer :number_of_bathrooms, null:false
      t.integer :square_foot, null:false
      t.timestamps
    end
  end
end
