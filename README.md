# Electron 客户端（打开 `http://localhost:4000/`）

这个项目是一个最小 Electron 客户端，启动后会直接打开：

- `http://localhost:4000/`

并使用 `assets/x-logo.svg` 作为应用窗口图标资源（X 风格 Logo）。

## 使用方式

```bash
npm install
npm start
```

## 打包到本地客户端

已添加 `electron-builder`，支持在本机直接打包可分发客户端：

```bash
# 仅生成解压目录（用于本地测试）
npm run pack:dir

# 生成安装包（按当前系统）
npm run pack
```

打包产物默认输出到 `dist/` 目录。

> 说明：
> - macOS 默认目标为 `dmg`
> - Windows 默认目标为 `nsis`
> - Linux 默认目标为 `AppImage`
