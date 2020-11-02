class QuestionsController < ApplicationController
  def index
    @questions = Question.all

    render json: @questions
  end

  def create
    @question = Question.new(question_params)

    if @question.save
      ActionCable.server.broadcast 'room_channel', Question.all
      # render json: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  private

  def question_params
    params.require(:question).permit(:content)
  end
end
