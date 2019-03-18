docker stop gpio-ui
docker rm gpio-ui
docker run --name gpio-ui -d -p 8080:8080 -p 9090:9090 --privileged tfindelkind/gpio-ui
