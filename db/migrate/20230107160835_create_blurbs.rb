class CreateBlurbs < ActiveRecord::Migration[6.1]
  def change
    create_table :blurbs do |t|
      t.string :title
      t.references :user, null: false, foreign_key: true
      t.string :body

      t.timestamps
    end
  end
end
