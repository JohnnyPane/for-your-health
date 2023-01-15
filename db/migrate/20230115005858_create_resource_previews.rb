class CreateResourcePreviews < ActiveRecord::Migration[6.1]
  def change
    create_table :resource_previews do |t|
      t.string :title
      t.string :image
      t.string :root_url
      t.string :description
      t.string :author 
      t.integer :wellness_resource_id

      t.timestamps
    end
  end
end
