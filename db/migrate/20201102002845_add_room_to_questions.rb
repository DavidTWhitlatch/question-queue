class AddRoomToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_reference :questions, :room, null: false, foreign_key: true
  end
end
