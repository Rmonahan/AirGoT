class EditUsers2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :birth_date

    add_column :users, :birth_date, :date, null: false
  end
end
