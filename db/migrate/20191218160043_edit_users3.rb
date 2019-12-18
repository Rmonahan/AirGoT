class EditUsers3 < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_photo_url, :string,  null: false
  end
end
