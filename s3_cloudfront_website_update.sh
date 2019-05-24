echo "aws s3 sync --acl public-read --sse --delete dist s3://ka19.ca"
aws s3 sync --acl public-read --sse --delete dist s3://ka19.ca
echo "aws cloudfront create-invalidation --distribution-id EWMA3MU5JMC40 --paths '/*'"
aws cloudfront create-invalidation --distribution-id EWMA3MU5JMC40 --paths '/*'
