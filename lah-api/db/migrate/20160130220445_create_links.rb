class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.integer :question_id
      t.integer :answer_id
      t.integer :number
      t.text :archive

      t.timestamps null: false
    end
  end
end
