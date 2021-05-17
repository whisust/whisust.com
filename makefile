deploy:
	rclone sync ./site mys3:www.whisust.com --progress --s3-acl=public-read
