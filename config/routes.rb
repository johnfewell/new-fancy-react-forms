Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :forms do
      get 'responses', on: :member
    end
    resources :questions
    resources :form_responses
  end

end
