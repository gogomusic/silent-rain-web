#!/bin/bash
# 显式加载 nvm 和 pm2 路径
export NVM_DIR="/home/ecs-user/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# 执行 pm2 命令
pm2 reload "silent-rain-web" --update-env --time