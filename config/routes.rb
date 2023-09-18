Rails.application.routes.draw do
  root 'root#index'
  get 'greetings' , to: 'message#index'
end