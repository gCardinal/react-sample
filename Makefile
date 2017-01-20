DC=docker-compose -f docker-compose.yml
NODE=$(DC) run --rm node

all: init vendors-install dev
dev: webpack-server attach-webpack

stop:
	$(DC) kill
	$(DC) rm -vf

init:
	$(DC) pull
	$(DC) build

vendors-install:
	$(NODE) yarn install
	$(NODE) npm rebuild node-sass
	mkdir -p bin
	ln -sf ../node_modules/.bin/gulp bin/gulp

webpack-server:
	$(DC) up -d webpack

attach-webpack:
	$(DC) logs --follow --tail 200 webpack