class CreateWellnessResources < ActiveRecord::Migration[6.1]
  def change
    create_table :wellness_resources do |t|
      t.string :url
      t.string :title
      t.string :body
      t.integer :user_id
      t.integer :category_id

      t.timestamps
    end
  end
end
