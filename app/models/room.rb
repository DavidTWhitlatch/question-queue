class Room < ApplicationRecord
  belongs_to :username
  has_many :questions
end
