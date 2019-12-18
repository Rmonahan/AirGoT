class EditUsersAgain < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :city, :string, null: false
    add_column :users, :description, :string, null: false
  end
end
