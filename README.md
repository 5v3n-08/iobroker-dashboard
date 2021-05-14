# ----- !!! NOT COMMIT THIS FILES TO GITHUB !!! ------

- pages/.
- routes/routes.ts

# ----- Deploy first time with docker ------

cd /home
git clone -b BRANCHE https://github.com/5v3n-08/iobroker-dashboard.git
cd iobroker-dashboard/
nano .env (fill data! Only first time)
docker build -t iobroker-dashboard:v1 .
docker run --name iobroker-dashboard -p 8000:80/tcp -d iobroker-dashboard:v1

# ----- Deploy on existing docker ------

cd iobroker-dashboard/
git pull
docker build -t iobroker-dashboard:v1 .
docker stop iobroker-dashboard
docker rm iobroker-dashboard
docker run --name iobroker-dashboard -p 8000:80/tcp -d iobroker-dashboard:v1

# ----- .gitignore not working? -----

git rm -rf --cached .
git add .
