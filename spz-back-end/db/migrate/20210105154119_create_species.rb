class CreateSpecies < ActiveRecord::Migration[6.0]
  def change
    create_table :species do |t|
      t.string :name
      t.integer :age
      t.integer :genu_id

      t.timestamps
    end
  end
end
