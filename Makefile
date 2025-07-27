SHELL := /bin/bash

.PHONY: gh-init gh-push-init gh-push

# GitHub URLs
GIT_REPO_SSH_URL	:= git@github.com:ashuksu/forestman.git
GIT_BRANCH			:= 'gh-pages'

gh-init:
	@mkdir -p $(GIT_BRANCH) && \
	cd $(GIT_BRANCH) && \
	git init && \
	git remote add origin $(GIT_REPO_SSH_URL) && \
	git branch -m $(GIT_BRANCH) && \
	cd ..

gh-push-init:
	@cd $(GIT_BRANCH) && \
	git add . -f && \
	git commit -am "Initial Commit $(shell date +%F\ %T)" || true && \
	git push -u origin $(GIT_BRANCH) --force && \
	cd ..

gh-page:
	@rm -rf dist 2>/dev/null && \
	npm run build && \
	cp -a $(GIT_BRANCH)/. dist/ || { echo '${RED}Failed to copy root files from gh-pages/root/.${RESET}'; exit 1; }
	@cd dist && \
	git add . -f && \
	git commit -am "Update GH-Pages build $(shell date +%F\ %T)" || true && \
	git push -u origin $(GIT_BRANCH) --force && \
	cd ..
