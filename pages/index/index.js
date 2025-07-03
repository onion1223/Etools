Page({
  data: {
    tools: [
      {
        id: 1,
        name: "AI文案助手",
        desc: "自动生成文案和详情页内容，适合新手卖家。",
        images: ["https://picsum.photos/seed/tool1/600/400"],
        logo: "",
        tags: ["AI文案", "文案工具"],
        price: {
          trial: "9.9",
          monthly: "39.9",
          yearly: "399"
        }
      },
      {
        id: 2,
        name: "客服机器人",
        desc: "模拟人工客服，7x24小时接待访客，提升服务效率。",
        images: ["https://picsum.photos/seed/tool2/600/400"],
        logo: "",
        tags: ["客服", "AI工具"],
        price: {
          trial: "9.9",
          monthly: "49.9",
          yearly: "499"
        }
      }
    ]
  },
  toggleCategorySelector() {
    wx.showToast({
      title: '分类切换功能开发中',
      icon: 'none'
    })
  }
})