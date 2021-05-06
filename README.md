# ----- Deploy first time with docker ------

git clone -b sstiels https://github.com/5v3n-08/iobroker-dashboard.git
cd iobroker-dashboard/
nano .env (fill data! Only first time)
docker build -t iobroker-dashboard:v1 .
docker run -p 8000:80/tcp -d iobroker-dashboard:v1

# ----- Deploy on existing docker ------

cd iobroker-dashboard/
git pull
docker build -t iobroker-dashboard:v1 .
docker run -p 8000:80/tcp -d iobroker-dashboard:v1

# ----- .gitignore not working? -----

git rm -rf --cached .
git add .
