class MessageController < ApplicationController
    def index
      message = Message.all
      greet = rand(1..message.count)
      @greetings = message.find_by(id: greet)
      render json: @greetings
    end
end
