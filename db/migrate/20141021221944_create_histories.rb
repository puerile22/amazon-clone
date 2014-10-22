class CreateHistories < ActiveRecord::Migration
  def change
    create_table :histories do |t|
      t.integer :quantity
      t.belongs_to :item
      t.timestamps
    end
  end
end
