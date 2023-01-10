<template>
    <div class="container">
        <div class="macimg"><img :src="imgUrl" alt=""></div>
        <p class="macName">{{title}}</p>
        <p class="desc">新款</p>
        <p class="intro-cta">
            <a :href="buyUrl" target="_blank" class="button">购买</a>
            <a :href="learnMore" target="_blank" class="learn-more">进一步了解</a>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgUrl: "https://www.apple.com.cn/v/macbook-air/o/images/chapternav/macbook_air_m2__e8ziygi2lca6_large.svg",
            title: "MacBook Air",
            buyUrl: "https://www.apple.com.cn/cn/shop/goto/buy_mac/macbook_air_m2",
            learnMore: "https://www.apple.com.cn/macbook-air-m2/"
        }
    },
}
</script>

<style>
    * {
            padding: 0;
            margin: 0;
        }
        a {
            text-decoration: none;
            color: #000;

        }
        .container {
            text-align: center;
        }
        .macName {
            font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
            font-size: 12px;
            line-height: 1.33337;
            font-weight: 400;
        }
        .desc {
            font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
            font-size: 10px;
            color: #bf4800;
        }
        .button {
            cursor: pointer;
            display: inline-block;
            white-space: nowrap;
            font-size: 12px;
            line-height: 20px;
            font-weight: 400;
            background: #0071e3;
            color: #fff;
            font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
            width: 40px;
            height: 20px;
            vertical-align: middle;
            border-radius: 15px;
            margin-right: 16px;
        }
        .learn-more {
            color: #06c;
            font-size: 12px;
            font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;;
        }
</style>