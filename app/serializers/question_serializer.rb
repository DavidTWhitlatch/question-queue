class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at, :updated_at, :username, :favorites, :favorites_count

  def favorites
    object.favorites.map { |f| f.id }
  end

  def favorites_count
    object.favorites.count
  end
end
