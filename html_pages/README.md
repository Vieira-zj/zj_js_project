# Init Nginx Env

1. start virtual machine

```sh
podman machine start
```

2. search and pull nginx image

```sh
podman search nginx
podman pull docker.io/library/nginx
podman images
```

3. copy html to dist dir, and run nginx instance

```sh
podman run --name nginx-test -d -p 8080:80 -v /home/core/data/docker_nginx:/usr/share/nginx/html docker.io/library/nginx
podman ps
```

4. check nginx configs

```sh
podman exec -it nginx-test sh
cat /etc/nginx/conf.d/default.conf
```

- `default.conf`

```conf
location / {
  root   /usr/share/nginx/html;
  index  index.html index.htm;
}
```

5. open from chrome `http://localhost:8080/`

