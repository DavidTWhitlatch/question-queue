class AddAnsweredToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :answered, :boolean, :default => false
  end
end
