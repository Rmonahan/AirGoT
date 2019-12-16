class EditSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :host_id, :integer, null: false
    add_index :spots, :host_id
  end
end
