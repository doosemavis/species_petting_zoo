class CreateSpecies < ActiveRecord::Migration[6.0]
  def change
    create_table :species do |t|
      t.string :name
      t.integer :age
      
      t.timestamps
    end
  end
end
