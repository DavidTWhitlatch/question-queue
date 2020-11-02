class QuestionsController < ApplicationController
  def index
    @questions = Room.find_by_code(params[:code]).questions

    render json: @questions
  end

  def create
    @room = Room.find(question_params[:room_id])
    @question = Question.new(question_params)
    if @question.save
      @question.user_favorites.create(username_id: question_params[:username_id])
      serialized_data = @room.questions.map { |q| QuestionSerializer.new(q) }
      RoomChannel.broadcast_to @room, serialized_data
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  def upvote
    @question = Question.find(params[:id])
    @username = Username.find(params[:username_id])

    @username.favorites << @question
    @room = @question.room
    serialized_data = @room.questions.map { |q| QuestionSerializer.new(q) }

    RoomChannel.broadcast_to @room, serialized_data
  end

  private

  def question_params
    params.require(:question).permit(:content, :room_id, :username_id)
  end
end
