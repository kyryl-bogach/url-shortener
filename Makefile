build:
	cd api && $(MAKE) build
	cd client && $(MAKE) build

run:
	docker-compose up -d

stop:
	docker-compose down
