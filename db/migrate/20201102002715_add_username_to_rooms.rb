class AddUsernameToRooms < ActiveRecord::Migration[6.0]
  def change
    add_reference :rooms, :username, null: false, foreign_key: true
  end
end
