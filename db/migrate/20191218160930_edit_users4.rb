class EditUsers4 < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :city, :string, :null => true
    change_column :users, :description, :string, :null => true
    change_column :users, :profile_photo_url, :string, :null => true
  end
end
