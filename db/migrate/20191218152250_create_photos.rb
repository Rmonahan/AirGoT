class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :spot_id, index: true, foreign_key: true
      t.string :image_url, null: false
      t.timestamps
    end
  end
end
