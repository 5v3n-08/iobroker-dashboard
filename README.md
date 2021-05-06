# ----- Deploy on docker ------

"cd /opt/iobroker-dashboard/"
"docker build -t iobroker-dashboard:v1 ."
"docker run -p 8000:80/tcp -d iobroker-dashboard:v1"

# ----- .gitignore not working? -----

git rm -rf --cached .
git add .
