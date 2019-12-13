class EditSpot < ActiveRecord::Migration[5.2]
  def change
    remove_column :spots, :allegiance

    add_column :spots, :allegiance, :string, null: false
  end
end
