class EditUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :username 
    add_column :users, :birth_date, :date
  end
end
