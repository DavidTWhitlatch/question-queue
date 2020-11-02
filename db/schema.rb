# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_02_210911) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "questions", force: :cascade do |t|
    t.string "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "username_id", null: false
    t.bigint "room_id", null: false
    t.boolean "answered", default: false
    t.index ["room_id"], name: "index_questions_on_room_id"
    t.index ["username_id"], name: "index_questions_on_username_id"
  end

  create_table "rooms", force: :cascade do |t|
    t.string "code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "username_id", null: false
    t.index ["username_id"], name: "index_rooms_on_username_id"
  end

  create_table "user_favorites", force: :cascade do |t|
    t.bigint "username_id", null: false
    t.bigint "question_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["question_id"], name: "index_user_favorites_on_question_id"
    t.index ["username_id"], name: "index_user_favorites_on_username_id"
  end

  create_table "usernames", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "questions", "rooms"
  add_foreign_key "questions", "usernames"
  add_foreign_key "rooms", "usernames"
  add_foreign_key "user_favorites", "questions"
  add_foreign_key "user_favorites", "usernames"
end
