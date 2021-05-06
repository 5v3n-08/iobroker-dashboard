# ----- Deploy on docker ------

git clone -b sstiels https://github.com/5v3n-08/iobroker-dashboard.git
cd /iobroker-dashboard/
docker build -t iobroker-dashboard:v1 .
docker run -p 8000:80/tcp -d iobroker-dashboard:v1

# ----- .gitignore not working? -----

git rm -rf --cached .
git add .
