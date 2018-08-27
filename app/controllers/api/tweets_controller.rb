class  Api::TweetsController < ApplicationController
  before_action :require_logged_in

  def index
    user = User.find_by(id: params[:userId]);
    if user
      @tweets = user.tweets.order(id: :desc).limit(25)
      if @tweets
          render :index
      else
       render json: ["no tweets posted?"]
      end
    else
       render json: @tweets.errors.full_messages , status: 404
    end

  end

  def show
    @tweet = Tweet.find(params[:id])
  end

  def create
    @tweets = $client.user_timeline(params['tweet']['body'], count: 25)
    render :show
    # @tweet = Tweet.new(tweet_params)
    #
    # if @tweet.save
    #   render :show
    # else
    #   render json: @tweet.errors.full_messages, status: 422
    # end

  end

  def destroy
    tweet = Tweet.find(params[:id])

    if tweet
      tweet.destroy
      render json: tweet
    else
      render json: ["tweet doesn't exist"], status: 404
    end

  end

  private

  def tweet_params
    params.require(:tweet).permit(:body, :user_id)
  end

end
