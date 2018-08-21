class  Api::TweetsController < ApplicationController
  before_action :require_logged_in

  def index
    user = User.find_by(id: parmas[:userId])
    if user
      @tweets = user.tweets.order(id: :desc).limit(25)
    else
       render json: ["no tweets posted?"], status: 404
    end

  end

  def show
    @tweet = Tweet.find(params[:id])
  end

  def create
    @tweet = Tweet.new(tweet_params)

    if @tweet.save
      render :show
    else
      render json: @tweet.errors.full_messages, status: 422
    end

  end

  def tweet_params
    params.require(:tweet).permit(:body, :user_id)
  end

end
