<template>
  <view class="my-container">
    <view class="section">
      <view class="label">已订阅工具</view>
      <view class="item" v-for="tool in subscribed" :key="tool.id">
        {{ tool.name }}（到期：{{ tool.expire }}）
      </view>
    </view>
    <view class="section">
      <view class="label">收藏夹</view>
      <view class="item" v-for="tool in favorites" :key="tool.id">
        {{ tool.name }}
      </view>
    </view>
    <view class="section">
      <view class="label">历史订单</view>
      <view class="item" v-for="order in orders" :key="order.id">
        {{ order.name }} - ￥{{ order.price }}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      subscribed: [
        { id: 1, name: '黑米AI文案助手', expire: '2025-12-31' }
      ],
      favorites: [
        { id: 2, name: '客服语料生成器' }
      ],
      orders: [
        { id: 1, name: '黑米AI文案助手', price: 399 }
      ]
    };
  }
};
</script>

<style scoped>
.my-container {
  padding: 30rpx;
}
.section {
  margin-bottom: 40rpx;
}
.label {
  font-weight: bold;
  margin-bottom: 20rpx;
}
.item {
  background: #f8f8f8;
  padding: 20rpx;
  border-radius: 12rpx;
  margin-bottom: 10rpx;
}
</style>
