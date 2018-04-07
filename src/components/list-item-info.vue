<template>
    <ListItem class="list-item-info">
        <EditImage :src="image" class="img"></EditImage>
        <span contenteditable="false">{{ title }}</span>
    </ListItem>
</template>
<script>
    import ListItem from './list-item'
    import EditImage from './edit-image'

    export default {
        name: 'ListItemInfo',
        components: {
            ListItem,
            EditImage
        },
        props: {
            image: {
                type: String,
                default: require('../assets/social-github.png')
            },
            title: {
                type: String,
                default: 'github.com/truexin1292'
            }
        }
    }
</script>
<style lang="less">
    .list-item-info {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e9e8e8;
        height: 80px;
        .img {
            margin: 0 20px 0 50px;
        }
        span {
            font-size: 20px;
            color: #555;
        }
    }
</style>
