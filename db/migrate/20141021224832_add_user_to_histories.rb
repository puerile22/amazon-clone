class AddUserToHistories < ActiveRecord::Migration
  def change
    add_column :histories, :user, :string
  end
end
