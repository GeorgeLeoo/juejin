# 这是一个仿掘金项目

## 首先我们配置tabBar
 - 新建home、find、search、book、user四个组件
 - 打开app.json，在里面添加如下代码
```
"tabBar": {
    "selectedColor": "#007fff",//选中的颜色
    "backgroundColor": "#ffffff",//背景颜色
    //存储tab的list
    "list": [
      {
        "pagePath": "pages/home/home",//路径
        "iconPath": "images/icon/home.png",//图标路径
        "selectedIconPath": "images/icon/home_selected.png"//选中图标路径
      },
      {
        "pagePath": "pages/find/find",
        "iconPath": "images/icon/view.png",
        "selectedIconPath": "images/icon/view_selected.png"
      },
      {
        "pagePath": "pages/search/search",
        "iconPath": "images/icon/find.png",
        "selectedIconPath": "images/icon/find_selected.png"
      },
      {
        "pagePath": "pages/book/book",
        "iconPath": "images/icon/book.png",
        "selectedIconPath": "images/icon/book_selected.png"
      },
      {
        "pagePath": "pages/me/me",
        "iconPath": "images/icon/user.png",
        "selectedIconPath": "images/icon/user_selected.png"
      }
    ]
  }
```