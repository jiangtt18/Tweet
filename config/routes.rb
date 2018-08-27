Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
  resources :users, only: [:create, :show] # testing only
  resource :session, only:[:create, :destroy]
  resources :tweets, only:[:create, :index, :show]
  # resource :handle, only:[:index], to: 'tweets#index'
 end

 root to: "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
