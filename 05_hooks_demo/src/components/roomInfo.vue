<template>
        <div class="info">
            <div class="inner-info">
                <div class="cover"><img :src="itemData.picture_url"></div>
                <div class="verfy-info" :style=" {color: titleInfo.color}">{{ titleInfo.text }}</div>
                <div class="roomname">{{ itemData.name }}</div>
                <div class="roomprice">{{ itemData.price_format + "/晚" }}</div>
                <div class="content" :style="bottomInfo.style">{{ bottomInfo.content }}</div>
            </div>
        </div>
</template>

<script setup>
import { computed } from 'vue'
    const props = defineProps({
        itemData: {
            type: Object,
            default: () => ({})
        }
    })
    const titleInfo = computed( () => {
        return {
            text: props.itemData.verify_info.messages.join(" "),
            color: props.itemData.verify_info.text_color
        }
    })
    const bottomInfo = computed(() => {
        return {
            content: props.itemData.bottom_info.content,
            style: {
                color: props.itemData.bottom_info.content_color,
                fontSize:  props.itemData.bottom_info.font_size + "px"
            }
        }
    })
</script>

<style scoped lang="less">
.info {
    width: 33.3333333%;

    .inner-info {
        margin: 10px 10px 10px 0;

        .cover {
            img {
                width: 100%;
            }
        }

        .roomname {
            font-weight: 700;
        }

        .roomprice {
            color: #666;
            margin: 5px 0;
        }

        .content {
            font-weight: 700;
        }
    }
}
</style>