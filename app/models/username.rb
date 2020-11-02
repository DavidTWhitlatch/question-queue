class Username < ApplicationRecord
  has_many :questions
  has_many :rooms
  has_many :user_favorites
  has_many :favorites, through: :user_favorites, source: :question
end
