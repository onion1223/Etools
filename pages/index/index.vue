<template>
  <view class="container">
    <scroll-view class="category" scroll-y>
      <view v-for="cat in categories" :key="cat.id" :class="['cat-item', cat.id === activeCat ? 'active' : '']" @click="selectCategory(cat.id)">
        {{ cat.name }}
      </view>
    </scroll-view>

    <scroll-view class="content" scroll-y>
      <view class="tool-card" v-for="tool in filteredTools" :key="tool.id">
        <swiper class="cover" indicator-dots circular>
          <swiper-item v-for="img in tool.images" :key="img">
            <image :src="img" mode="aspectFill" />
          </swiper-item>
        </swiper>
        <view class="info">
          <image class="logo" :src="tool.logo" />
          <view class="title">{{ tool.name }}</view>
          <view class="desc" :class="{ folded: !tool.expanded }">{{ tool.desc }}</view>
          <view class="toggle" @click="tool.expanded = !tool.expanded">{{ tool.expanded ? '收起' : '展开' }}</view>
          <view class="price">试用 {{ tool.price.trial }} ｜月付 {{ tool.price.monthly }} ｜年付 {{ tool.price.yearly }}</view>
          <button class="buy" @click="buyTool(tool)">获取</button>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, name: '全部' },
        { id: 2, name: '图文设计' },
        { id: 3, name: '智能客服' },
        { id: 4, name: '数据分析' }
      ],
      activeCat: 1,
      tools: [
        {
          id: 1,
          name: '黑米AI文案助手',
          desc: '上传产品图，生成电商整套文案、主图、详情页，一键完成',
          images: ['/static/img1.jpg'],
          logo: '/static/logo1.png',
          price: { trial: '9.9', monthly: '39.9', yearly: '399' },
          category: 2,
          expanded: false
        },
        {
          id: 2,
          name: '客服语料生成器',
          desc: '自动训练客服话术，减少重复回复工作量，提高转化率',
          images: ['/static/img2.jpg'],
          logo: '/static/logo2.png',
          price: { trial: '9.9', monthly: '29.9', yearly: '299' },
          category: 3,
          expanded: false
        },
        {
          id: 3,
          name: '爆款分析雷达',
          desc: '智能分析同行爆款动向，帮助你选品更精准',
          images: ['/static/img3.jpg'],
          logo: '/static/logo3.png',
          price: { trial: '9.9', monthly: '49.9', yearly: '499' },
          category: 4,
          expanded: false
        }
      ]
    };
  },
  computed: {
    filteredTools() {
      return this.activeCat === 1 ? this.tools : this.tools.filter(t => t.category === this.activeCat);
    }
  },
  methods: {
    selectCategory(id) {
      this.activeCat = id;
    },
    buyTool(tool) {
      uni.showToast({ title: '支付成功，链接已复制', icon: 'success' });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}
.category {
  width: 80rpx;
  background: #f6f6f6;
}
.cat-item {
  padding: 20rpx 10rpx;
  font-size: 24rpx;
  text-align: center;
}
.cat-item.active {
  background: #ffffff;
  font-weight: bold;
}
.content {
  flex: 1;
  padding: 20rpx;
  background: #ffffff;
}
.tool-card {
  border: 1px solid #eee;
  border-radius: 12rpx;
  margin-bottom: 30rpx;
  overflow: hidden;
}
.cover {
  height: 200rpx;
}
.logo {
  width: 60rpx;
  height: 60rpx;
  margin-top: 20rpx;
}
.info {
  padding: 20rpx;
}
.title {
  font-weight: bold;
  margin-top: 10rpx;
}
.desc {
  margin: 10rpx 0;
  color: #666;
  font-size: 24rpx;
  max-height: 4em;
  overflow: hidden;
}
.desc.folded {
  max-height: 2em;
}
.toggle {
  font-size: 22rpx;
  color: #0099ff;
}
.price {
  margin: 10rpx 0;
  color: #333;
}
.buy {
  background: #07c160;
  color: white;
  font-size: 28rpx;
  padding: 10rpx;
  border-radius: 8rpx;
}
</style>
