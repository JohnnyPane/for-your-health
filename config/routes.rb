Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root "pages#blurbs", as: :authenticated_root
    resources :categories, only: [:index, :show], to: "pages#blurbs"
    resources :user, only: [:index, :show], to: "pages#blurbs" 
    resources :user, only: [:show] do
      resources :categories, only: [:show], to: "pages#blurbs"
    end
  end

  root 'pages#home'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :blurbs, only: [:index, :show, :create, :update, :destroy]
      resources :categories, only: [:index, :show, :create]
      resources :user_wellness_categories, only: [:index, :show]
    end
  end
end
