class CreateGenus < ActiveRecord::Migration[6.0]
  def change
    create_table :genus do |t|
      t.string :name

      t.timestamps
    end
  end
end
