class Question < ApplicationRecord
  belongs_to :username
  belongs_to :room
  has_many :user_favorites
  has_many :favorites, through: :user_favorites, source: :username
end
