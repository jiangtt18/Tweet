class  Api::TweetsController < ApplicationController
  before_action :require_logged_in

  def index
    @tweets = Tweet.all.order(id: :desc).limit(25)
  end

  def create
    @tweet = Tweet.new(tweet_params)
    @tweet.user_id = current_user.id
  end

  def tweet_params
    params.require(:tweet).permit(:body)
  end

end
