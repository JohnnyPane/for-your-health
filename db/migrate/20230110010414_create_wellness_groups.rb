class CreateWellnessGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :wellness_groups do |t|
      t.string :name
      t.string :mission

      t.timestamps
    end

    create_table :users_wellness_groups do |t|
      t.belongs_to :user
      t.belongs_to :wellness_group
    end

    create_table :wellness_groups_categories do |t|
      t.belongs_to :category
      t.belongs_to :wellness_group
    end
  end
end
