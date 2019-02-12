.PHONY: dev prod


# 启动前台开发服务
dev:
	lerna exec npm run dev

# 打包构建
prod:
	cd packages/client && yarn && yarn run build

