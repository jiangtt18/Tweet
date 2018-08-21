json.photo do
  json.partial! 'api/tweets/tweet', tweet: @tweet
end
