deploy:
	rclone sync ./site cc-own-cellar:www.whisust.com --progress --s3-acl=public-read
	rclone sync ./site cc-own-cellar:whisust.com --progress --s3-acl=public-read
