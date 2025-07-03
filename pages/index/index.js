Page({
  data: {
    showCategoryPopup: false,
    categories: ["全部", "AI文案", "客服", "翻译", "分析"],
    selectedCategory: "全部",
    tools: [
      {
        id: 1,
        name: "AI文案助手",
        desc: "自动生成电商文案和推广内容，适合新手卖家，支持多平台。",
        image: "/static/tool1.jpg",
        tags: ["AI文案", "推广"],
        price: {
          trial: "9.9",
          monthly: "39.9",
          yearly: "399"
        }
      },
      {
        id: 2,
        name: "客服机器人",
        desc: "模拟人工客服，7x24小时接待访客，提升客服效率。",
        image: "/static/tool2.jpg",
        tags: ["客服", "服务"],
        price: {
          trial: "9.9",
          monthly: "49.9",
          yearly: "499"
        }
      },
      {
        id: 3,
        name: "AI翻译润色",
        desc: "多语种翻译+智能润色，让商品更容易被各国人看到。",
        image: "/static/tool3.jpg",
        tags: ["翻译", "AI文案"],
        price: {
          trial: "9.9",
          monthly: "29.9",
          yearly: "299"
        }
      }
    ]
  },

  toggleCategoryPopup() {
    this.setData({
      showCategoryPopup: !this.data.showCategoryPopup
    });
  },

  selectCategory(e) {
    const cat = e.currentTarget.dataset.cat;
    this.setData({
      selectedCategory: cat,
      showCategoryPopup: false
    });
  },

  filteredTools() {
    const cat = this.data.selectedCategory;
    if (cat === "全部") return this.data.tools;
    return this.data.tools.filter(tool => tool.tags.includes(cat));
  }
})