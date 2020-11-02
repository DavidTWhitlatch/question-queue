class UserFavorite < ApplicationRecord
  belongs_to :username
  belongs_to :question
  validates_uniqueness_of :username_id, scope: [:question_id]
end
