class JoinsTable < ActiveRecord::Migration[5.2]
  def change    
    
    create_table :assignments do |t|
      t.references :spot, index: true, foreign_key: true
      t.references :amenities, index: true, foreign_key: true
      t.timestamps
    end
  end
end
