class CreateWellnessActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :wellness_activities do |t|
      t.string :name
      t.string :activity_type
      t.datetime :start_time
      t.datetime :end_time
      t.boolean :completed
      t.integer :wellness_group_id
      t.integer :category_id

      t.timestamps
    end

    create_table :users_wellness_activities do |t|
      t.belongs_to :user
      t.belongs_to :wellness_activity
    end
  end
end
