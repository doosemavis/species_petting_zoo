class CreateAnimals < ActiveRecord::Migration[6.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :layman
      t.integer :age
      t.boolean :extinct
      t.integer :category_id

      t.timestamps
    end
  end
end
