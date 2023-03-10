# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_01_15_005858) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "blurbs", force: :cascade do |t|
    t.string "title"
    t.bigint "user_id", null: false
    t.string "body"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_blurbs_on_user_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.boolean "top_level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "categories_wellness_groups", force: :cascade do |t|
    t.bigint "category_id"
    t.bigint "wellness_group_id"
    t.index ["category_id"], name: "index_categories_wellness_groups_on_category_id"
    t.index ["wellness_group_id"], name: "index_categories_wellness_groups_on_wellness_group_id"
  end

  create_table "resource_previews", force: :cascade do |t|
    t.string "title"
    t.string "image"
    t.string "root_url"
    t.string "description"
    t.string "author"
    t.integer "wellness_resource_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_wellness_categories", force: :cascade do |t|
    t.integer "user_id"
    t.integer "category_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "users_wellness_activities", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "wellness_activity_id"
    t.index ["user_id"], name: "index_users_wellness_activities_on_user_id"
    t.index ["wellness_activity_id"], name: "index_users_wellness_activities_on_wellness_activity_id"
  end

  create_table "users_wellness_groups", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "wellness_group_id"
    t.index ["user_id"], name: "index_users_wellness_groups_on_user_id"
    t.index ["wellness_group_id"], name: "index_users_wellness_groups_on_wellness_group_id"
  end

  create_table "wellness_activities", force: :cascade do |t|
    t.string "name"
    t.string "activity_type"
    t.datetime "start_time"
    t.datetime "end_time"
    t.boolean "completed"
    t.integer "wellness_group_id"
    t.integer "category_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "wellness_groups", force: :cascade do |t|
    t.string "name"
    t.string "mission"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "wellness_resources", force: :cascade do |t|
    t.string "url"
    t.string "title"
    t.string "body"
    t.integer "user_id"
    t.integer "category_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "blurbs", "users"
end
